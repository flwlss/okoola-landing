import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import CustomSwiperItem from "./CustomSwiperItem";
import { useEffect, useRef, useState } from "react";

export default function CustomSwiper() {
  const ref = useRef<SwiperRef>(null);
  const [mouseWheel, setMouseWheel] = useState(true);

  useEffect(() => {
    if (ref.current) {
      if (!mouseWheel) {
        ref.current.swiper.mousewheel.disable();
        ref.current.swiper.allowTouchMove = false;
      } else {
        ref.current?.swiper.mousewheel.enable();
        ref.current.swiper.allowTouchMove = true;
      }
    }
  }, [mouseWheel]);

  return (
    <Swiper
      allowTouchMove={mouseWheel}
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
          fiveThumbAction={() => {
            ref.current?.swiper.slideTo(4, 1500);
          }}
          onButtonClick={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          title="знакомства"
          description="Okoola - твой шанс найти идеального партнера, подобрав его по интересам, увлечениям и ценностям. Наш алгоритм учитывает ваши предпочтения и предлагает самые точные совпадения. Знакомься безопасно и удобно, общайся и встречайся прямо сейчас! Знакомства ждут!"
          backgroundImage="images/firstSlide.jpg"
          showButton
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
          fiveThumbAction={() => {
            ref.current?.swiper.slideTo(4, 1500);
          }}
          onButtonClick={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          title="вечеринки"
          description="Горячие вечеринки, неповторимая атмосфера и море позитива! Не знаешь, где и с кем провести вечер — создай вечеринку и найди компанию. От клубных вечеринок до хипстерских встреч. Окунись в мир ярких впечатлений и незабываемых моментов."
          backgroundImage="images/secondSlide.jpg"
          showButton
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
          fiveThumbAction={() => {
            ref.current?.swiper.slideTo(4, 1500);
          }}
          onButtonClick={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          title="чаты с AI"
          description="Сложно начать диалог? Не знаешь, как заинтересовать партнера? Наш AI-помощник доступен 24/7 и готов помочь с любыми темами и диалогами. Ваш собеседник будет приятно удивлен вашей осведомленностью и эрудированностью. С нами ты точно продемонстрируешь себя с лучшей стороны!"
          backgroundImage="images/thirdSlide.jpg"
          showButton
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
          fiveThumbAction={() => {
            ref.current?.swiper.slideTo(4, 1500);
          }}
          onButtonClick={() => {
            ref.current?.swiper.slideTo(3, 1500);
          }}
          showMarkets
          showButton={false}
          title="скачать"
          description={
            "Скоро отрытие!\nДоступно на iOS и Android уже в феврале."
          }
          backgroundImage="images/fourthSlide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSwiperItem
          setMouseWheel={() => {
            setMouseWheel(!mouseWheel);
          }}
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
          fiveThumbAction={() => {
            ref.current?.swiper.slideTo(4, 1500);
          }}
          showPolicyButtons
          showButton={false}
          title="контакты"
          description={
            "Dubail, 20 19th St - Al Wasl - Dubai - ОАЭ\n\n+9 715 06 98 1539\n\nokoola@gmail.com"
          }
          backgroundImage="images/fiveSlide.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
