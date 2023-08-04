import supabase, { supabaseUrl } from "./supabase";

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Failed to fetch Cabins");
  }
  return data;
}

async function createEditCabin(newCabin, id) {
  console.log(newCabin);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // const hasImagePath = newCabin.newCabinData.image?.startsWith?.(supabaseUrl);
  console.log(hasImagePath);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Edit Cabin
  let query = supabase.from("cabins");
  //1.A Create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //1.B Edit Cabin with given id
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Failed to create Cabin");
  }

  if (hasImagePath) return data;

  // 2. then upload the image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3. if image not uploaded in bucket then don,t create newCabin
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabin Image could not be uploaded so cabin no created");
  }
  return data;
}

async function deleteCabin(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Failed to delete Cabin");
  }
  return data;
}

export { getCabins, createEditCabin, deleteCabin };
