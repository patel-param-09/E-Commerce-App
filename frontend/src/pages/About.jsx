import React from "react";
import Title from "../components/Title";
import NewsLatterBox from "../components/NewsLatterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-justify">
            "Your satisfaction is our priority. From the moment you visit our
            site to the moment your order arrives at your door, we're dedicated
            to providing exceptional service and an unmatched shopping
            experience."
          </p>
          <p className="text-justify">
            "Every product in our store is carefully selected to meet our high
            standards of quality, durability, and style. We partner with trusted
            brands and artisans to bring you the best, no matter what you’re
            shopping for."
          </p>
          <b className="text-gray-700">Our Mission</b>
          <p className="text-justify">
            "At the heart of our mission is a passion for excellence. We strive
            to bring you the best products, the best service, and the best
            shopping experience. We believe that every customer deserves to shop
            with confidence and joy."
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            “Quality is our promise to you. Each product in our collection is
            meticulously selected and tested to ensure it meets our high
            standards of craftsmanship, durability, and performance.”
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            "We know your time is valuable, which is why we’ve designed our
            shopping experience to be as effortless as possible. From easy
            navigation to secure checkout, we make convenience our priority."
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            "Your satisfaction is our top priority. From personalized assistance
            to prompt responses, we are here to ensure that your shopping
            experience is smooth, enjoyable, and hassle-free."
          </p>
        </div>
      </div>

      <NewsLatterBox />
    </div>
  );
};

export default About;
