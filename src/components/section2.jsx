import React from "react";
import CustomButton from "./button";

const Section2 = ({
  bgImage,
  topTitle = "About Us",
  mainTitle = "We Believe in Working Accredited Farmers",
  description = "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  features = [
    {
      icon: null,
      title: "Organic Foods Only",
      text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      icon: null,
      title: "Quality Standards",
      text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ],
  buttonText = "Shop Now",
  onButtonClick = () => {},
}) => {
  return (
    <section>
      <div
        className="mb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto px-4 ">
          <div className="py-20 lg:py-40 max-w-[700px] w-full lg:ml-auto">

            {/* Title */}
            <div>
              <p className="font-third-family mb-2 text-2xl md:text-4xl font-normal text-yashil">
                {topTitle}
              </p>

              <h3 className="font-font-family text-3xl md:text-5xl font-extrabold text-qoraroq leading-tight">
                {mainTitle}
              </h3>

              <p className="font-second-family leading-relaxed mt-4 text-base md:text-lg text-qoraroq">
                {description}
              </p>
            </div>

            {/* Features / Icons */}
            <div className="mt-10 max-w-[564px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 ${index !== features.length - 1 ? "mb-6" : ""}`}
                >
                  {feature.icon && <div>{feature.icon}</div>}
                  <div>
                    <h3 className="font-font-family font-extrabold text-xl md:text-2xl text-qoraroq">
                      {feature.title}
                    </h3>
                    <p className="font-second-family leading-relaxed mt-[7px] text-base md:text-lg text-qoraroq">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}

              <CustomButton className="mt-[46px]">{buttonText}</CustomButton>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
