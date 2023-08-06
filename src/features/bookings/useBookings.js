import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //Filter list
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  //Sort list
  const sortByOrder = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByOrder.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, error };
}
