import React, { useEffect } from "react";
import { gsap } from "gsap";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";

const Hero = () => {
  useEffect(() => {
    const animationSettings = {
      duration: 1,
      ease: "power3.out",
    };

    // Animate the heading, paragraph, and button in parallel
    gsap.fromTo(
      ".hero_heading",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ...animationSettings }
    );
    gsap.fromTo(
      ".hero_paragraph",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ...animationSettings }
    );
    gsap.fromTo(
      ".hero_button",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" }
    );

    // Animate the counters in parallel with staggered delay
    gsap.fromTo(
      ".hero_counter",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    // Animate the images in parallel with staggered delay
    gsap.fromTo(
      ".hero_images img",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* ======= Hero section content ================ */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="hero_heading text-[36px] leading-[45px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] font-sans">
                We help patients live a healthy, longer life
              </h1>
              <p className="hero_paragraph text_para">
                A healthcare provider delivers medical care and support to
                maintain or improve health. This includes hospitals, clinics,
                and professionals like doctors and nurses, ensuring
                personalized, high-quality treatment for patients.
              </p>
              <button className="hero_button btn">Request an appointment</button>
            </div>
            {/*========= hero counter ========*/}
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div className="hero_counter">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-6px]"></span>
                <p className="text_para">Years of Experience</p>
              </div>
              <div className="hero_counter">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  15+
                </h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-6px]"></span>
                <p className="text_para">Clinic Location</p>
              </div>
              <div className="hero_counter">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-6px]"></span>
                <p className="text_para">Patient Satisfaction</p>
              </div>
            </div>
          </div>
          {/* ======= Hero section content ================ */}
          <div className="flex gap-[30px] justify-end hero_images">
            <div>
              <img className="w-full" src={heroImg01} alt="Hero 1" />
            </div>
            <div className="mt-[30px]">
              <img src={heroImg02} alt="Hero 2" className="w-full mb-[30px]" />
              <img src={heroImg03} alt="Hero 3" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
