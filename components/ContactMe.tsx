import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:wuj890312@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
    ${formData.email}`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
  max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Lets grab a coffee and work together!!
          <span className="decoration-[#f7ab0a]/50 underline">Lets talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">+34 695 135 544</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">wuj890312@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">Seville, Spain 41006</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput resize-none"
            placeholder="Message"
          ></textarea>
          <input
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
