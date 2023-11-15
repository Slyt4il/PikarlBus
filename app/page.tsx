// @ts-ignore
import Map from "./components/Map.tsx";
// @ts-ignore
import NotificationBox from "./components/NotificationBox.tsx";
// @ts-ignore
import SearchForm from "./components/SearchForm.tsx";
// @ts-ignore
import Menu from "./components/Menu.tsx";

export default function Home() {
  return (
    <main>
      <Menu />
      <SearchForm />
      <NotificationBox message="🚍 CU Popbus 4 is about to arrive at your stop." />
      <Map />
    </main>
  );
}
