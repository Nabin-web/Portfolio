import React from "react";
import Saathimart from "../assets/logo/sathimart.png";
import Sybazzar from "../assets/logo/sybazzar.png";
import Upakart from "../assets/logo/upakart.png";
import WaftCommerce from "../assets/logo/waftcommerce.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const compArray = [
  {
    id: 0,
    label: "sybazaar",
    img: Sybazzar,
    link: "",
    // detailImg: SybazzarDetail,
    details:
      "SYBazzar is an e-commerce marketplace that started its operation in 2022, serving various categories ranging from FMCG, apparel, and electronics inside Nepal. Sybazzar helps sellers to boost their business by providing them with a user-friendly platform, logistical services, cash handling services, product photography, warehousing, and so on. SYbazzar is focused on providing an excellent customer experience through ease-of-purchase, comprehensive customer care, and hassle-free shopping and returns experience. SYbazzar has the vision to connect local sellers to global consumers and hence impact the eCommerce industry by putting one brick at a time.",
    name: "Sybazzar",
  },
  {
    id: 4,
    label: "upakart",
    img: Upakart,
    link: "",
    // detailImg: UpakartDetail,
    details:
      "UPAKART is one of the most fascinating project that has been facilitated under Digital Shikhar Pvt. Ltd. We are an online marketplace for buying and selling products. The goal is to make local products available to every people through our online marketplace and also provide customers' everyday needs at a lesser cost, with a larger selection, and more convenient services. We are ready to provide a diverse range of products and services to serve Nepal's small and medium businesses.",
    name: "SamsungPlaza",
  },
  {
    id: 2,
    label: "sathimart",
    img: Saathimart,
    link: "",
    // detailImg: SaathimartDetail,
    details:
      "Saathimart's journey started 11 years ago in 2009 from a manufacturing company. After gaining experience for more than 10 years in distributorship, retail and wholesale market in Nepal, we came up with the idea of Saathimart; a retail and online business idea. The company that would enable small as well big entrepreneurs to extend their scope by offering an online platform, enabling young and experienced entrepreneurs through affiliate marketing to earn in Nepal.",
    name: "Saathimart",
  },
  {
    id: 3,
    label: "commerce",
    img: WaftCommerce,
    link: "",
    // detailImg: WaftcommerceDetail,
    details:
      "WaftCommerce is an eCommerce development platform developed by Waft Technology Pvt. Ltd. in 2019. It is an platform based on MERN Stack to develop small to enterprise-level ecommerce applications. We provide all solutions to eCommerce-related problems and guide you to develop/grow your eCommerce business.",
    name: "Waftcommerce",
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleShowAll = (index) => {
    setShowAll({ ...showAll, [index]: !showAll[index] });
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-5 lg:right-10 z-10"
        onClick={onClick}
      >
        <FaChevronRight className="text-white text-4xl lg:text-6xl" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-5 lg:left-10 z-10"
        onClick={onClick}
      >
        <FaChevronLeft className="text-white text-4xl lg:text-6xl" />
      </button>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="grid grid-cols-4 items-center gap-4 justify-center">
        {compArray.map((each) => (
          <div
            key={each.id}
            className="border border-gray-300 grayscale hover:grayscale-0 hover:border-white duration-200 border-opacity-40 mx-auto p-4 px-8 cursor-pointer"
          >
            <img
              src={each.img}
              alt={each.label}
              className="object-contain h-20"
            />
          </div>
        ))}
      </div>

      {/* <section id="recentworks">
        <div className="py-40">
          <div className="flex justify-center gap-2 items-baseline pb-10">
            <span className="text-2xl">Featured</span>
            <span className="text-2xl semi-bold">Projects</span>
          </div>

          <Slider {...settings}>
            {compArray.map((each) => (
              <div className="slider-main" key={each.id}>
                <img src={each.detailImg} alt="details" className="w-60" />
                <div>
                  <div className="lg:text-2xl md:text-xl medium-bold pb-2">
                    {each.name}
                  </div>
                  <div className="lg:text-sm text-xs">
                    {showAll[each.id] === false ? (
                      <div className="flex flex-col gap-1">
                        {each.details.substring(0, 280)}...{" "}
                        <span
                          className="text-zinc-400 cursor-pointer medium-bold hover:text-white duration-100"
                          onClick={() => handleShowAll(each.id)}
                        >
                          Read More...
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1">
                        {each.details}{" "}
                        <span
                          className="text-zinc-400 cursor-pointer medium-bold hover:text-white duration-100"
                          onClick={() => handleShowAll(each.id)}
                        >
                          ...Read Less
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}
    </div>
  );
};

export default Project;
