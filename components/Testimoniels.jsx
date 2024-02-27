import React from "react";
import { FaStar } from "react-icons/fa6";

function Testimoniels() {
  return (
    <div className="md:p-20 p-10 ">
      {/* <h1 className="text-4xl text-background mb-10 font-bold ">
        Des clients satisfaits
      </h1> */}
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
        </div>
        <h1 className=" text-center">
          Vos créations pâtissières sont absolument extraordinaires ! <br />{" "}
          Nous ne pouvons jamais en avoir assez.
        </h1>
        <div className="flex items-center justify-center gap-4">
          <img
            src="/person.jpg"
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="flex flex-col ">
            <h1 className="font-bold text-black text-base">Edna Kim</h1>
            <p className="text-gray-800 text-sm font-light">Kika client</p>
          </div>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.453622859522!2d3.211183774693072!3d36.71166537268717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e51ab5a767bdb%3A0xfbd470b2449eb7c0!2sKika%20p%C3%A2tisserie%20Dar%20El%20Beida!5e0!3m2!1sen!2sdz!4v1708730089821!5m2!1sen!2sdz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
}

export default Testimoniels;
