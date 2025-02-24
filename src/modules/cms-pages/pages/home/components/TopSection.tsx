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
    </section>
  );
};

export default TopSection;
