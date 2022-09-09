import Image from "next/future/image";
import { Container } from "./Container";
import backgroundImage from "../images/background-features.jpg";

const Transform = () => {
  return (
    <section
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Transform
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Everything you could need to transform your boring exels into
            readable engaging dashboards
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Transform;
