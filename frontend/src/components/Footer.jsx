import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600 text-justify">
            "At Shopfusion, we are committed to providing exceptional products
            at unbeatable prices, with customer satisfaction as our top
            priority. Enjoy a seamless shopping experience with secure payments
            and fast shipping. Stay connected for exclusive offers, new
            arrivals, and more. Thank you for choosing us for all your needs!"
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 mt-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 mt-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600">
            <li>+11-987-000-0000</li>
            <li>shopfusion@gmail.com</li>
            <li className="flex flex-row gap-3 items-center ml-5 mt-2 cursor-pointer text-[17px]">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2024 - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
