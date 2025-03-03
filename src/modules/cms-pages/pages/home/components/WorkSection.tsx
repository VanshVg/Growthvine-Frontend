const WorkSection = () => {
  return (
    <section className="mt-14 text-white bg-[#3e5529] max-w-[95%] mx-auto p-6 rounded-3xl">
      <h1 className="font-bold text-[32px] mt-8">How We Make A Difference ?</h1>
      <p className="mt-2">
        Everything you need to know about suporting education
      </p>
      <div className="flex mt-[65px] gap-[40px]">
        <div className="w-[33%]">
          <h1 className="font-semibold text-[26px]">What makes us unique?</h1>
          <p className="text-[15px] w-[80%] mx-auto mt-2 opacity-85">
            Unlike traditional education platforms that focus on a single niche,
            Growthvine is an all-in-one survival kit for self-improvement.
          </p>
        </div>
        <div className="w-[33%] mt-[60px]">
          <h1 className="font-semibold text-[26px]">Why choose GrowthVine?</h1>
          <p className="text-[15px] w-[80%] mx-auto mt-2 opacity-85">
            Our organization is structured around clubs, each dedicated to a
            different area of self-improvement. These clubs are led by
            passionate and knowledgeable speakers who create educational
            content.
          </p>
        </div>
        <div className="w-[33%]">
          <h1 className="font-semibold text-[26px]">What is Our Vision?</h1>
          <p className="text-[15px] w-[80%] mx-auto mt-2 opacity-85">
            Our vision is to create a world where knowledge is universal,
            practical, inclusive, empowering, transformative, accessible,
            engaging, and shared by all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
