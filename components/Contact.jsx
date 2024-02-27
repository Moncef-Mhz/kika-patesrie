import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className="flex flex-col md:p-20 p-10 space-y-10">
      <div className="flex md:flex-row flex-col space-y-4 justify-start md:justify-center md:items-center items-start md:space-x-64">
        <div>
          <h1 className="md:text-4xl text-2xl capitalize text-black  font-bold">
            Contact information
          </h1>
          <p className="md:text-base text-sm">
            {" "}
            Si vous avez des commandes ou des demandes de renseignements,
            {/* <br /> */}
            n'hésitez pas à nous contacter
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex item-center gap-2">
            <div className="mt-1">
              <AiOutlineMail size={20} />
            </div>
            <div>
              <h1 className="font-bold  ">Email</h1>
              <p>moncefmeharzi@gmail.com</p>
            </div>
          </div>
          <div className="flex item-center gap-2">
            <div className="mt-1">
              <AiOutlinePhone size={20} />
            </div>
            <div>
              <h1 className="font-bold ">Telephone</h1>
              <p>+213 553948279</p>
            </div>
          </div>
          <div className="flex item-center gap-2">
            <div className="mt-1">
              <MdOutlinePlace size={20} />
            </div>
            <div>
              <h1 className="font-bold">Office</h1>
              <p>Soufflerie lot num 1, Dar El Beïda</p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.4562120738246!2d3.2111110746930827!3d36.711603172690694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e51ab5a767bdb%3A0xfbd470b2449eb7c0!2sKika%20p%C3%A2tisserie%20Dar%20El%20Beida!5e0!3m2!1sen!2sdz!4v1708771986517!5m2!1sen!2sdz"
        // width="800"
        height="600"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contact;
