import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MainPage from "../components/MainPage";
import CustomSwiper from "../components/CustomSwiper";

export default function App() {
  return (
    <Swiper
      navigation={{
        nextEl: ".mainPage__learnMore",
        prevEl: ".customSwiperItem__logo",
      }}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <MainPage />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSwiper />
      </SwiperSlide>
    </Swiper>
  );
}
