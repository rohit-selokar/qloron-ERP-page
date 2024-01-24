import React from "react";

function Card() {
  return (
    <div className="grid gap-5 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] font-sans mx-3 mb-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="shadow-xl mx-9 xl:mx-3 lg:mx-3 md:mx-5 p-5 py-10">
        <p className="font-bold">
          Create innovative business models at global scale
        </p>
        <p className="mb-4 mt-3">Drive top-line growth</p>
        <div className="ml-5">
          <ul className="list-disc">
            <li className="mb-3">
              Open new sources of growth by transitioning from product- to
              service- based businesses with ease
            </li>
            <li>
              Adapt to changes dynamically based on real-time usage and customer
              experience data​
            </li>
          </ul>
        </div>
      </div>

      <div className="shadow-xl  mx-9 xl:mx-3 lg:mx-3 md:mx-5 p-5 py-10">
        <p className="font-bold">
          Benefit from proven business processes for your industry
        </p>
        <p className="mb-4 mt-3">Achieve bottom-line growth</p>
        <div className="ml-5">
          <ul className="list-disc">
            <li className="mb-3">
              Work better together with instant and personalized business
              insight available from anywhere.
            </li>
            <li>
              Improve margin continuously with intelligent automation across
              your end-to-end operational processes
            </li>
          </ul>
        </div>
      </div>

      <div className="shadow-xl mx-9 xl:mx-3 lg:mx-3 md:mx-5 p-5 py-10">
        <p className="font-bold">
          Build sustainability directly into your business
        </p>
        <p className="mb-4 mt-3">Deliver green-line growth</p>
        <div className="ml-5">
          <ul className="list-disc">
            <li className="mb-3">
              Adapt operations and processes to consistently reduce emissions,
              waste, and environmental impact​
            </li>
            <li>
              Manage regulatory requirements proactively with company-wide
              controls and in-depth reporting​
            </li>
          </ul>
        </div>
      </div>

      <div className="shadow-xl mx-9 xl:mx-3 lg:mx-3 md:mx-5 p-5 py-10">
        <p className="font-bold">Bring your business wherever it needs to go</p>
        <p className="mb-4 mt-3">Grow without limits</p>
        <div className="ml-5">
          <ul className="list-disc">
            <li className="mb-3">
              Stay on top of compliance and security with global standards
              built-in and always up to date​
            </li>
            <li>
              Keep innovating with a scalable platform and network of partners,
              continuously bringing new value
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
