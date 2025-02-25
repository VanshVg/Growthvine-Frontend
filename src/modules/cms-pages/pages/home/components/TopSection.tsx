import { topSectionData } from "../types/constants";

const TopSection = () => {
  return (
    <section>
      <h1 className="font-semibold text-[40px] max-w-[700px] mx-auto">
        {topSectionData.header}
      </h1>
      <p className="max-w-[600px] text-[18px] mx-auto mt-3">
        {topSectionData.subHeader}
      </p>
      <div className="grid grid-cols-5">
        <div>
          <div className="rounded-3xl relative w-[200px]">
            <img
              src="/images/topSectionBg_1.jpg"
              className="rounded-3xl w-[200px] h-[250px]"
            />
            <h2 className="absolute top-[25%] text-left leading-[40px] max-w-[170px] ml-3 text-white font-semibold text-[36px]">
              Be the reason a child smiles
            </h2>
          </div>
          <div className="bg-[#458369] w-[200px] rounded-3xl h-[120px] mt-[20px]">
            <h2 className="text-center max-w-[170px] ml-3 text-white font-bold text-[36px]">
              85 %
            </h2>
            <p className="text-white max-w-[130px] text-left mx-auto leading-[18px] text-[13px]">
              increase in literacy rate in the regions we serve
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 ">
            <img
              src="/images/topSectionBg_4.jpg"
              className="rounded-3xl w-[200px] h-[300px]"
            />
            <h2 className="absolute top-[35%] text-left leading-[40px] max-w-[170px] ml-3 text-white font-semibold text-[36px]">
              Bring joy to the child's face
            </h2>
          </div>
        </div>
        <div className="relative ">
          <div className="absolute bottom-0 h-[250px] p-2 bg-[#7f8ab0] rounded-3xl">
            <h2 className="text-left mt-[20px] leading-[40px] max-w-[170px] ml-3 text-white text-[23px]">
              Join our community for for building a better tomorrow.
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 ">
            <img
              src="/images/topSectionBg_3.jpg"
              className="rounded-3xl w-[200px] h-[300px]"
            />
            <h2 className="absolute bottom-10 text-left leading-[40px] ml-3 text-white font-semibold text-[20px]">
              Inspire Change,
            </h2>
            <h2 className="absolute bottom-4 text-left leading-[40px] ml-3 text-white font-semibold text-[20px]">
              Inspire Education
            </h2>
          </div>
        </div>
        <div>
          <div className="rounded-3xl relative w-[200px]">
            <img
              src="/images/topSectionBg_2.jpg"
              className="rounded-3xl w-[200px] h-[250px]"
            />
          </div>
          <div className="bg-[#073e2e] w-[200px] rounded-3xl h-[120px] mt-[20px] pt-[30px]">
            <h2 className="text-left max-w-[170px] ml-3 text-white font-semibold text-[25px]">
              Give the gift of learning
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
