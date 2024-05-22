import Image from 'next/image';
import { modeltypes } from "../constants";
import { GradientLight } from './design/Benefits';
import Heading from "./Heading";
import Section from "./Section";
import Button from './Button';

const ModelTypes = () => {
    return (
        <Section id="features">
            <div className="container relative flex flex-col items-center">
                <Heading
                    className="md:max-w-md lg:max-w-4xl"
                    title="Наглядные и понятные 3D-сцены для каждой учебной темы"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 w-full max-w-4xl">
                    {modeltypes.map((modeltype, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center relative" // Добавляем relative здесь
                            style={{ flex: '1 0 auto' }}
                        >
                            <div className="z-2 w-full max-w-full bg-n-8 border border-n-6 rounded-[2rem] flex justify-center items-center relative overflow-hidden">
                                <Image
                                    src={modeltype.backgroundUrl}
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    alt={modeltype.title}
                                />

                            </div>
                            <GradientLight />

                            <p className="font-bold text-n-2 text-center mt-4 z-10">{modeltype.title}</p>
                        </div>
                    ))}
                </div>
                <Button href="#download" color='bg-main'>
                    Скачать SYSTEMA
                </Button>
            </div>
        </Section>
    );
};

export default ModelTypes;
