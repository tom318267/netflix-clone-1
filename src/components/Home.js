import React from "react";
import home from "../assets/home.jpg";
import watchtv from "../assets/watchtv.jpg";
import download from "../assets/download.jpeg";
import kids from "../assets/kids.png";

const Home = () => {
  return (
    <div
      className="Home w-screen h-screen relative"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="overlay h-auto pb-40 w-screen">
        <div
          className="heading-container w-4/5 pt-40 md:pt-60 px-7 my-0 mx-auto text-center flex flex-col items-center"
          style={{ fontFamily: "font-family: 'Open Sans', sans-serif" }}
        >
          <h2 className="heading text-xl md:text-3xl mb-3 text-white font-bold">
            Unlimited movies, TV shows, and more.
          </h2>
          <p className="sub-heading text-white md:text-xl font-extralight mb-5">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="sub-heading-2 text-white md:text-xl font-semibold mb-5">
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div className="w-full lg:inline-flex">
            <input className="w-full h-8 lg:h-10" type="text" />
            <button className="get-started lg:w-1/4 leading-loose bg-primary hover:bg-darkRed p-2.5 lg:p-0 text-sm md:text-lg mt-5 lg:mt-0 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <hr className="h-2 bg-grey border-none" />
      <div className="enjoy-section flex flex-col md:flex-row px-7 text-center items-center w-screen text-white bg-black py-20 md:py-0">
        <div className="heading-content md:text-left md:pr-10">
          <h1 className="text-3xl md:text-5xl mb-4">Enjoy on your TV.</h1>
          <p className="mb-5 md:text-xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>

        <img className="md:py-20 md:w-2/4" src={watchtv} alt="watching_tv" />
      </div>
      <hr className="h-2 bg-grey border-none" />
      <div className="download-section flex flex-col md:flex-row-reverse px-7 text-center items-center bg-black text-white py-20">
        <div className="heading-content md:text-left md:pl-10">
          <h1 className="text-3xl md:text-5xl mb-4">
            Download your shows to watch offline.
          </h1>
          <p className="md:text-xl">
            Save your favorites easily and always have something to watch.
          </p>
        </div>

        <img className="md:w-2/4" src={download} alt="download" />
      </div>
      <hr className="h-2 bg-grey border-none" />
      <div className="kids-section flex flex-col md:flex-row px-7 text-center items-center bg-black text-white py-20">
        <div className="heading-content">
          <h1 className="text-3xl md:text-5xl mb-4">
            Create profiles for kids.
          </h1>
          <p className="md:text-xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>

        <img className="md:w-2/4" src={kids} alt="kids" />
      </div>
      <hr className="h-2 bg-grey border-none" />
    </div>
  );
};

export default Home;
