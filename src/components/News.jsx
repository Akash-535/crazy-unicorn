import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Heading from "../common/Heading";
import Description from "../common/Description";
import { EmailIcon } from "../utils/icons";

const News = () => {
  const formList = {
    email: "",
  };
  const [value, setValue] = useState(formList);
  const [error, setError] = useState(false);
  const form = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    setError(true);

    if (value.email) {
      setValue(formList);
      setError(false);
      Swal.fire({
        title: "Success",
        text: "Your message has been sent!",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_225sbpv", "template_mfgmjof", form.current, {
        publicKey: "yMfLmnJOVdFosmZqu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div id="team" className="bg-team-bg-img bg-no-repeat bg-cover bg-center">
        <div className="container max-w-[1358px] xl:pt-[137px] lg:pt-24 sm:pt-20 xl:pb-[103px] md:pb-16 pb-12 mx-auto max-xl:px-4">
          <Heading
            text="Sign up for the latest news"
            myClass=" text-center mx-auto max-[400px]:max-w-[300px] "
          />
          <Description
            text="Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed aenean egestas ut sit."
            myClass=" text-center max-w-[659px] font-comic mx-auto"
          />
          <form
            className="pt-8 max-md:pt-5"
            ref={form}
            onSubmit={(e) => {
              formHandler(e);
              sendEmail(e);
            }}
          >
            <div className="bg-gradient-to-r from-[#B62AFF80] to-[#FF0DF280] p-[1px] rounded-[10px] max-w-[521px] mx-auto">
              <div className="w-full flex bg-white max-w-[521px] mx-auto justify-between px-2.5 pt-[11.35px] pb-2 rounded-[10px]">
                <div className="flex items-center sm:justify-center gap-2">
                  <EmailIcon />
                  <input
                    className="bg-transparent sm:w-[250px] max-sm:pr-2 outline-none w-full text-base text-black placeholder:text-black placeholder:opacity-70 font-comic"
                    type="email"
                    placeholder="Your email"
                    name="email"
                    onChange={(e) =>
                      setValue({ ...value, email: e.target.value })
                    }
                    value={value.email}
                  />
                </div>
                <div className="bg-gradient-to-l from-pink-dark to-neon-pink max-w-[234px] rounded-xl">
                  <button
                    type="submit"
                    className="bg-white sm:text-[25px] text-xl border-[1px] border-black rounded-xl -translate-x-[3.5px] -translate-y-[3.5px] hover:translate-x-0 hover:translate-y-0 duration-300 ease-linear py-[10px] px-7"
                  >
                    <span className="bg-gradient-to-r from-pink-dark to-neon-pink bg-clip-text text-transparent font-normal ">
                      Subscribe
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-red-500 pl-5 font-semibold max-w-[521px] mx-auto max-sm:hidden">
              {error && !value.email ? "Field is required" : ""}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default News;
