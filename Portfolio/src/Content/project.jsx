import React from "react";
import Saathimart from "../assets/logo/sathimart.png";
import Sybazzar from "../assets/logo/sybazzar.png";
import Upakart from "../assets/logo/upakart.png";
import NepMeds from "../assets/logo/nepmed_logo.png";
import AIML from "../assets/logo/aiml.png";
import IOFund from "../assets/logo/iofund.png";
import WaftCommerce from "../assets/logo/waftcommerce.svg";
import TiggApp from "../assets/logo/tigg.svg";
import TiggBg from "../assets/tiggbg.png"

const compArray = [
  {
    id: 1,
    label: "Tigg App",
    img: TiggApp,
    link: "https://www.tiggapp.com/",
    details:"Tigg is a cloud-based business management software designed to help small and medium-sized enterprises (SMEs) in Nepal streamline their operations, manage finances, and enhance productivity. It provides a comprehensive set of tools for accounting, inventory management, sales, and purchase cycles. Developed by BIC Technology Pvt. Ltd., Tigg is tailored to meet the specific needs of Nepali businesses, offering features like electronic billing, bank reconciliation, and real-time business intelligence.",
    name: "Tigg App- Accounting Software",
  },
  {
    id: 0,
    label: "sybazaar",
    img: Sybazzar,
    link: "https://www.sybazzar.com/?srsltid=AfmBOoomiK-VCvV50sJh0xItWnULrVPBZ3YRTA6KCduRKIekqdD6cQ5f",
    // detailImg: SybazzarDetail,
    details:
      "SYBazzar is an e-commerce marketplace that started its operation in 2022, serving various categories ranging from FMCG, apparel, and electronics inside Nepal. Sybazzar helps sellers to boost their business by providing them with a user-friendly platform, logistical services, cash handling services, product photography, warehousing, and so on. SYbazzar is focused on providing an excellent customer experience through ease-of-purchase, comprehensive customer care, and hassle-free shopping and returns experience. SYbazzar has the vision to connect local sellers to global consumers and hence impact the eCommerce industry by putting one brick at a time.",
    name: "Sybazzar",
  },
  {
    id: 5,
    label: "IO-Fund",
    img: IOFund,
    link: "https://io-fund.com/",
    // detailImg: SybazzarDetail,
    details:
      "I/O Fund runs one of the highest-performing tech-focused stock portfolios in the world. Our approach to tech stocks provides serious tech investors with premium services that will give them a competitive edge on growth tech stocks.",
    name: "Sybazzar",
  },
  {
    id: 6,
    label: "Open Data Fabric",
    img: AIML,
    link: "https://www.opendatafabric.com/",
    details:
      "Open Data Fabric is the company's static website showcasing comprehensive information about the company's services with cutting edge AI solution.",
    name: "Sybazzar",
  },
  {
    id: 7,
    label: "NepMeds",
    img: NepMeds,
    link: "https://www.nepmeds.com.np/",
    details:
      "NepMeds offers a convenient solution to the challenges of obtaining essential medicines and healthcare services. With online ordering, automated refill reminders, and doorstep delivery, it eliminates the need for waiting in queues or navigating through traffic. Enjoy a wide range of healthcare services from the comfort of your home, ensuring seamless access to quality medications and support for your wellness needs",
    name: "Sybazzar",
  },
  {
    id: 4,
    label: "upakart",
    img: Upakart,
    link: null,
    details:
      "UPAKART is one of the most fascinating project that has been facilitated under Digital Shikhar Pvt. Ltd. We are an online marketplace for buying and selling products. The goal is to make local products available to every people through our online marketplace and also provide customers' everyday needs at a lesser cost, with a larger selection, and more convenient services. We are ready to provide a diverse range of products and services to serve Nepal's small and medium businesses.",
    name: "SamsungPlaza",
  },
  {
    id: 2,
    label: "sathimart",
    img: Saathimart,
    link: "https://www.saathimart.com/",
    // detailImg: SaathimartDetail,
    details:
      "Saathimart's journey started 11 years ago in 2009 from a manufacturing company. After gaining experience for more than 10 years in distributorship, retail and wholesale market in Nepal, we came up with the idea of Saathimart; a retail and online business idea. The company that would enable small as well big entrepreneurs to extend their scope by offering an online platform, enabling young and experienced entrepreneurs through affiliate marketing to earn in Nepal.",
    name: "Saathimart",
  },
  {
    id: 3,
    label: "commerce",
    img: WaftCommerce,
    link: "https://www.waftcommerce.com/",
    // detailImg: WaftcommerceDetail,
    details:
      "WaftCommerce is an eCommerce development platform developed by Waft Technology Pvt. Ltd. in 2019. It is an platform based on MERN Stack to develop small to enterprise-level ecommerce applications. We provide all solutions to eCommerce-related problems and guide you to develop/grow your eCommerce business.",
    name: "Waftcommerce",
  },
];

const Project = () => {
  return (
    <div className="mt-8 mb-16">
      <div className="text-center mb-8 text-2xl font-bold text-white">
        Featured Projects
      </div>
      {/* <div className="grid md:grid-cols-4 grid-cols-2 mb-8 items-center gap-4 justify-center mx-auto">
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
      </div> */}
      <div className="grid md:grid-cols-4 grid-cols-2 mb-8 items-center gap-4 justify-center mx-auto">
        {compArray.map((each) => (
          <div
            key={each.id}
            className=" h-40 relative flex items-center justify-center rounded shadow-lg cursor-pointer group border-black"
            style={{
            backgroundSize: "cover", // Makes the image cover the entire div
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            background:"#FFFFFF"
          }}
          >
            <img
              src={each.img}
              alt={each.label}
              className=" object-contain h-20 inset-0 group-hover:opacity-30 transition-opacity duration-300"

            />
             <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col gap-4 pt-4 items-center text-6xl text-white font-semibold">
              
              <div className=" text-xs text-black h-20 p-4 line-clamp-4">{each.details}</div>
              <a 
                href={each?.link}
                target="_blank"
                style={{
                  boxShadow:"0px 0px 4px #ff005a"
                }}
                disabled={!each.link}
                className="w-1/8 text-xs border border-[#ff005a] rounded-full px-4 py-2 hover:bg-white text-black transition duration-500 shadow-2xl"
              >
                Visit Webiste
              </a>

             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
