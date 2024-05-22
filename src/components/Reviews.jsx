import Image from 'next/image';
import { reviews } from "../constants";
import { GradientLight } from './design/Benefits';
import Heading from "./Heading";
import Section from "./Section";
import StarIcon from "../../public/assets/star.png";
import CompanyLogos from './CompanyLogos';

const Reviews = () => {
    return (
        <Section id="features">
            <div className="container relative flex flex-col items-center">
                <Heading
                    className="md:max-w-md lg:max-w-4xl"
                    title="Отзывы наших пользователей"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center relative"
                            style={{ flex: '1 0 auto' }}
                        >
                            <div className="z-2  w-full max-w-full bg-n-8 border border-n-6 rounded-[2rem] flex justify-center items-center relative overflow-hidden">
                                <div className="relative z-2 flex flex-col h-[25rem] p-[2.4rem] w-full">
                                    <div className="flex justify-center items-center mb-6 h-10">
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
                                    <p className="body-2 mb-6 text-n-3 flex-grow">{review.text}</p>
                                    <div className="mt-auto">
                                        <p className="font-bold mb-2 text-n-2">{review.author}</p>
                                        <p className="text-n-2">{review.job}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <CompanyLogos className="mx-10 relative z-10 lg:block" />

            </div>
        </Section>
    );
};

export default Reviews;
