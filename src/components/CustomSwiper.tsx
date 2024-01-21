import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import CustomSwiperItem from "./CustomSwiperItem";
import { useRef } from "react";

export default function CustomSwiper() {
  const ref = useRef<SwiperRef>(null);

  return (
    <Swiper
      ref={ref}
      style={{ height: "100vh" }}
      mousewheel
      direction="vertical"
      modules={[Mousewheel]}
    >
      <SwiperSlide>
        <CustomSwiperItem
          firstThumbAction={() => {
            ref.current?.swiper.slideTo(0, 1500);
          }}
          secondThumbAction={() => {
            ref.current?.swiper.slideTo(1, 1500);
          }}
          thirdThumbAction={() => {
            ref.current?.swiper.slideTo(2, 1500);
          }}
          fourthThumbAction={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          onButtonClick={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          title="знакомства"
          description="Какой-то описательный текст в три или четыре строки какой-то  описательный текст в три или четыре небольших строки Какой-то  описательный текст в три или четыре строки какой-то  описательный текст в три или четыре небольших строки"
          backgroundImage="images/firstSlide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSwiperItem
          firstThumbAction={() => {
            ref.current?.swiper.slideTo(0, 1500);
          }}
          secondThumbAction={() => {
            ref.current?.swiper.slideTo(1, 1500);
          }}
          thirdThumbAction={() => {
            ref.current?.swiper.slideTo(2, 1500);
          }}
          fourthThumbAction={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          onButtonClick={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          title="вечеринки"
          description="Какой-то описательный текст в три или четыре строки какой-то  описательный текст в три или четыре небольших строки Какой-то  описательный текст в три или четыре строки какой-то  описательный текст в три или четыре небольших строки"
          backgroundImage="images/secondSlide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSwiperItem
          firstThumbAction={() => {
            ref.current?.swiper.slideTo(0, 1500);
          }}
          secondThumbAction={() => {
            ref.current?.swiper.slideTo(1, 1500);
          }}
          thirdThumbAction={() => {
            ref.current?.swiper.slideTo(2, 1500);
          }}
          fourthThumbAction={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          onButtonClick={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          title="чаты с AI"
          description="Какой-то описательный текст в три или четыре строки какой-то  описательный текст в три или четыре небольших строки Какой-то  описательный текст в три или четыре строки какой-то  описательный текст в три или четыре небольших строки"
          backgroundImage="images/thirdSlide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSwiperItem
          firstThumbAction={() => {
            ref.current?.swiper.slideTo(0, 1500);
          }}
          secondThumbAction={() => {
            ref.current?.swiper.slideTo(1, 1500);
          }}
          thirdThumbAction={() => {
            ref.current?.swiper.slideTo(2, 1500);
          }}
          fourthThumbAction={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          onButtonClick={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          lastSlide
          title="скачать"
          description="Какой-то описательный текст в три или четыре строки какой-то  описательный текст в три или четыре небольших строки Какой-то  описательный текст в три или четыре строки какой-то  описательный текст в три или четыре небольших строки"
          backgroundImage="images/fourthSlide.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
