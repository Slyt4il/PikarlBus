"use client";
import { useState } from "react";
// @ts-ignore
import Map from "./components/Map.tsx";
// @ts-ignore
import NotificationBox from "./components/NotificationBox.tsx";
// @ts-ignore
import SearchForm from "./components/SearchForm.tsx";
// @ts-ignore
import Menu from "./components/Menu.tsx";
// @ts-ignore
import SlideupCard from "./components/SlideupCard.tsx";

export default function Home() {
  const [slideCardShow, setslideCardShow] = useState(false);
  const handleSlideCardShow = (showSlideCard: boolean) => {
    setslideCardShow(showSlideCard);
  };

  return (
    <main>
      <Menu
        onB1Click={() => handleSlideCardShow(true)}
        onB2Click={() => handleSlideCardShow(true)}
        onB3Click={() => handleSlideCardShow(true)}
        onB4Click={() => handleSlideCardShow(true)}
        onB5Click={() => handleSlideCardShow(true)}
      />
      <SearchForm />
      <NotificationBox message="🚍 CU Popbus 4 is about to arrive at your stop." />
      <SlideupCard isOpen={slideCardShow} onClose={() => handleSlideCardShow(false)} />
      <Map />
    </main>
  );
}
