import AnimateOnScroll from "../AnimateOnScroll";
import Link from "next/link";
import Image from "next/image";
import cursiveArrow from "../../../../public/svgs/cursiveArrow.svg";
import SectionHeading from "../SectionHeading";

import { GoArrowUpRight } from "react-icons/go";
import Articles from "./Articles";


const services = [
  {
    name: "SELL YOUR CAR",
    description:
      "Get the best value for your car with our hassle-free selling process.",
    image: "/images/car-selling.jpg",
    link: "",
  },
  {
    name: "CAR INSURANCE",
    description:
      "Protect your vehicle with comprehensive and affordable insurance plans.",
    image: "/images/CAR-INSURANCE.png",
    link: "",
  },
  {
    name: "CAR INSPECTION",
    description:
      "Ensure your car is in top condition with our professional inspection services.",
    image: "/images/CAR-INSPECTION.jpeg",
    link: "",
  },
  {
    name: "CAR EXPORT",
    description:
      "Export your car globally with our reliable and efficient export services.",
    image: "/images/CAR-EXPORT.jpg",
    link: "",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="rounded-3xl my-5 lg:m-5 py-10">
      <SectionHeading
        title="Services"
        subtitle="CarOn Services"
        description="Discover exciting categories."
        highlight="Discover exciting categories. Find what you’re looking for."
      />

      <div className="Container">
        <div className="flex flex-col md:flex-row ">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.name}
              animation="translateY(0px)"
              delay={(index + 2) * 150}
              threshold={1}
            >
              <div key={service.name}>
                <div className="flex flex-row items-start gap-3 mb-7">
                  <div className="text-2xl font-semibold inline">{`0${
                    index + 1
                  } /`}</div>
                  <div className="h-[110px] w-[180px] overflow-hidden relative">
                    <Image
                      fill
                      src={service.image}
                      alt={service.name}
                      style={{ display: "" }}
                      sizes="(max-width: 768px) 100px, (max-width: 1200px) 180px, 200px"
                      className="object-cover overflow-hidden inline"
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="text-2xl font-semibold">{service.name}</h3>
                  <p className="text-textlight">{service.description}</p>
                  <Link href={"/"} className="text-brandColor">
                    Explore More <GoArrowUpRight className="inline" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="my-[30px] electric-cars p-2 lg:p-9 rounded-2xl">
          <div>
            <Image
              src={"/images/background/eq-logo.jpg"}
              width={80}
              height={80}
              alt="Company logo"
              className="rounded-sm lg:rounded-2xl my-3 w-10 h-10 md:w-20 md:h-20"
              sizes="(max-width: 768px) 35px, 80px"
            />
            <h2 className="text-lg lg:text-5xl text-white">
              Electric crafted by mercedes-benz. <br />
              The all electric range
            </h2>
            <p className="text-textlight font-bold text-sm lg:text-2xl">
              Starting form USD 249,000
            </p>
            <Link
              href={"/"}
              className="text-white text-base  bg-brandColor lg:px-4 lg:py-3 px-2 py-1 font-medium rounded-md lg:my-6 inline-block"
            >
              Call Now!
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-5 gap-3">
          <div className="lg:sticky lg:top-[150px] h-fit col-span-2">
            <AnimateOnScroll>
              <h2
                className='font-caveatRegular text-brandColor font-semibold text-3xl lg:text-5xl'
              >
                Our Latest Articles
              </h2>
              <h3 className="text-4xl lg:text-6xl">
                Discover Our Latest News And Articles
              </h3>
              <p>
                Read our informative blog articles to stay updated with the
                latest trends, technological applications, products, and news.
                Our articles will provide you with tips and insights that can be
                very helpful while traveling.
              </p>
              <Link
                href={"/blogs"}
                className="text-white bg-brandColor px-4 py-3 font-medium rounded-md my-6 inline-block"
              >
                View All Posts
              </Link>
              <Image priority src={cursiveArrow} alt="cursiveArrow svg" />
            </AnimateOnScroll>
          </div>
          <Articles />
          <div className="relative w-0 h-0">
            <div className="absolute bottom-[100px] w-[400px] max-w-60 aspect-square bg-brandColor  -z-0 blur-[200px] opacity-90"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
