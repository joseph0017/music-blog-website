import React from "react";

const Hero = () => {
  return (
    <>
  <section class="mb-40">

<div class="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
  <div class="container mx-auto xl:px-32">
    <div class="grid lg:grid-cols-2 gap-12 flex items-center">
      <div class="mt-12 lg:mt-0">
        <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Check out our Gallery and <br />
        <span class="text-green-300">Music Page</span></h1>
      </div>
      <div class="mb-12 lg:mb-0">
        <img
          src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
          class="w-full rounded-lg shadow-lg"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
</section>
    </>
  );
};

export default Hero;

