import React from "react";
import Example from "../utils/Example";

const AboutSection = () => {
  return (
    <section className=" mt-10 ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center place-self lg:py-16  py-4 px-4">
        <Example />
        {/* <div className='bg-[#181818] w-[300px] h-[350px]'>

            </div> */}
        <div>
          <h2 className="text-2xl md:text-4xl my-2">About me</h2>
          <p className="text-sm text-[#6a6b6c] md:text-lg">
            Lorem Lorem ipsum dolor suid consequuntur autem culpa, accusantium
            praesentium architecto omnis, sint nobis placeat, minima nam tenetur
            neque perferendis sed minus! Excepturi repellendus ea asperiores!
            ipsum dolor, sit amet consectetur adipisicing elit. Quisquam maxime
            illum modi expedita quae corporis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
