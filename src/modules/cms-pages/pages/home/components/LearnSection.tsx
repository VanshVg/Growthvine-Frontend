const LearnSection = () => {
  return (
    <section className="mt-20">
      <div className="flex gap-10">
        <div className="w-[50%]">
          <p className="text-[#458369] text-left">
            Non Governmental Organisations
          </p>
          <h1 className="font-semibold text-[38px] text-left">
            Learn About Us
          </h1>
          <p className="text-justify mt-6">
            We envision a world where every child, regardless of their
            background, has access to quality education and the opportunity to
            reach their full potential. By building schools, providing essential
            resources, and offering scholarships, we strive to create a future
            where education bridges gaps and transforms lives. Together, we can
            turn this vision into reality and unlock brighter futures
            for all children.
          </p>
        </div>
        <div>
          <div>
            <div className="border-[1px] rounded-xl flex gap-5 p-6 w-[560px]">
              <div className="px-6 py-4 h-fit rounded-full bg-[#484b89] font-bold text-white">
                1
              </div>
              <div>
                <h2 className="font-semibold text-[20px] text-left">
                  Mission & Vision
                </h2>
                <p className="text-left text-[14px]">
                  We envision a world where every child, regardless of their
                  background, has access to quality education
                </p>
              </div>
            </div>
            <div className="border-[1px] mt-[20px] rounded-xl flex gap-5 p-6 w-[530px] ml-auto">
              <div className="px-6 py-4 h-fit rounded-full bg-[#f0c451] font-bold text-white">
                2
              </div>
              <div>
                <h2 className="font-semibold text-[20px] text-left">
                  About NGO
                </h2>
                <p className="text-left text-[14px]">
                  We envision a world where every child, regardless of their
                  background, has access to quality education
                </p>
              </div>
            </div>
            <div className="border-[1px] mt-[20px] rounded-xl flex gap-5 p-6 w-[500px] ml-auto">
              <div className="px-6 py-4 h-fit rounded-full bg-[#e55e3f] font-bold text-white">
                3
              </div>
              <div>
                <h2 className="font-semibold text-[20px] text-left">
                  Board Members
                </h2>
                <p className="text-left text-[14px]">
                  We envision a world where every child, regardless of their
                  background, has access to quality education
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
