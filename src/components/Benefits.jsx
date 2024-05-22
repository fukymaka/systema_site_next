import Image from 'next/image';
import { reviews } from "../constants"; // Предположим, что у вас есть массив reviews с отзывами
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../../public/assets/svg/Arrow";
import StarIcon from "../../public/assets/star.png"; // Замените путь на свой путь к иконке звезды
import ClipPath from "../../public/assets/svg/ClipPath";

const Reviews = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-4xl"
          title="Отзывы наших пользователей"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {reviews.map((review, index) => (
            <div
              className="block relative p-0.5 md:max-w-[24rem] border-2 rounded-lg"
              style={{
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
              }}
              key={index}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none bg-white rounded-lg">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={StarIcon}
                      width={24}
                      height={24}
                      alt="Star"
                    />
                  ))}
                </div>
                <p className="body-2 mb-4 text-n-3">{review.text}</p>
                <p className="font-bold text-n-2">{review.author}</p>
              </div>

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {review.imageUrl && (
                    <Image
                      src={review.imageUrl}
                      width={380}
                      height={362}
                      alt={review.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
