# The-Wild-Oasis

## Admin Dashboard for _The-Wild-Oasis_ resort

A custom build internal application ( Admin Dashboard ) to manage everything about resort's **_Bookings_**, **_Cabins_**, **_Guests_** etc.
The users of this application are resort employees who can do tasks like checkin, checkout, adding a new Cabin, adding breakfast etc.

### Different Pages in Application are :

- Login Page - Allow only aurthorised users to login.
- Home Page - To view todays activities (checkins/ checkouts), sales and charts.
- Bookings Page - To view and edit all bookings.
- Users Page - To add a new user.
- Cabins Page - To view and edit Cabins.
- Settings Page - Allow to update minimum/maximum nights, guests per booking and breakfast price per guest.
- Account Page - To update Username, Avatar and Password.

## Have a look

Follow this link: <a  href="https://the-wild-oasis-azeem8271.vercel.app">The Wild Oasis</a>

## Features

- New users can only be signed up (added) by Admin from inside the application.
- Users can upload Avatar, change their username and password.
- Allowed Cabin updates: name , price, discount, photo, capacity and add/delete a cabin.
  - Cabin filters : All, no discount, with discount.
  - Cabin Sorts : by name, by price, by capacity.
- Allowed Bookings updates: checkin/checkout, delete, add breakfast and status ( paid/unpaid ).
  - Booking filters : checked in, checked out, unconfirmed.
  - Booking Sorts : by date, by amount.
- Allowed to add extra services (like add breakfast) at guest checkin time.
- Deshboard shows sales and booking stats for last 7 days , 30 days and 90 days.
- Can update minimum/maximum nights and guests per Cabin and additional services price.
- Supports both light and dark mode.

## Installation Guide

```sh
git clone https://github.com/azeem8271/the-wild-oasis.git
cd fast-pizza-co
npm install
npm run dev
```

## Teck Stack Used

- <a  href="https://react.dev/">React 18</a>
- <a  href="https://tailwindcss.com/">Styled components :</a> For Styling
- <a  href="https://reactrouter.com/en/main">React-Router :</a> To implement SPAs
- <a  href="https://redux-toolkit.js.org/">React Query :</a> For Managing and caching remote state
- <a  href="https://redux-toolkit.js.org/">React Hook Forms :</a> For forms validations
- <a  href="https://redux-toolkit.js.org/">React hot toast :</a> For showing success/error toasts
- <a  href="https://redux-toolkit.js.org/">Recharts :</a> For showing sales charts and graphs
- <a  href="https://redux-toolkit.js.org/">Supabase :</a> Used as Baas, to store data

## Find a bug ?

If you find an issue or would like to add an improvement to this project, feel free to submit an issue using issue tab above and if you like to submit a PR with a fix, refrence the issue you created.

## Known Issues / Bug ( Work in Progress ... )

- Throws Page Not Found (404) error if page is reload, mid-way in application.
- Work only on large screens not responsive.

## Liked this project ?

Feel free to tell me at:
<br/>
Email : <a  href="mailto:azeemkhan07082000@gmail.com">azeemkhan07082000@gmail.com</a>
<br/>
LinkedIn : <a  href="https://www.linkedin.com/in/azeem8271/">azeem8271</a>
