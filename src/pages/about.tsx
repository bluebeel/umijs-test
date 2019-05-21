import React from 'react';

const About: React.FC = () => {

  return (
    <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 xl:max-w-3xl">
      <div
        className="text-center md:text-left my-6 sm:my-8 md:my-16 lg:my-32">
        <div>
          <h1 className="text-5xl lg:text-6xl text-white font-normal whitespace-normal"><span className="text-white sm:whitespace-no-wrap">Designer &amp; developer</span> <span className="text-yellow-500">enthusiasts</span></h1>
          <p
            className="font-light mt-8 text-lg text-gray-400 leading-loose max-w-md md:max-w-full mx-auto md:mx-0">Hello!
            My name is Saïkou Barry. Welcome to my website! I am a computer science student at ECAM and a software developer with a particular focus on the
            web. In my spare time, I learn to design beautiful websites.
            I also run a small online business called <a className="text-gray-200 no-underline hover:underline" target="blank"
                                                         href="https://soldit-dev-4sle5ecax.now.sh/">SOLDIT</a>, an website that lets content creators receive payments for the content they create.</p>
          <a
            className="mt-8 inline-block bg-gray-800 hover:bg-gray-700 antialiased text-gray-200 font-bold text-sm px-8 py-3 no-underline rounded-full leading-none" target="blank"
            href="https://github.com/bluebeel">Github</a>
        </div>
      </div>
    </div>
  );
};

export default About;
