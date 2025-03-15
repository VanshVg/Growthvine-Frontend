import { LightLogo, ProjectTitle } from "@/common/types/constants";
import { CmsRoutesPath } from "../routes";
import { useNavigate } from "react-router-dom";
import { DiscordIcon, GmailIcon, InstagramIcon } from "@/assets/Svg";

const CmsFooter = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-[50px] bg-[#182815] w-full px-16 py-12 flex justify-center">
      <div className="w-full max-w-[1280px]">
        <div className="flex justify-between">
          <div>
            <div className="flex justify-center">
              <img
                src={LightLogo}
                className="h-16 w-20 cursor-pointer"
                alt="Logo"
                onClick={() => {
                  navigate(CmsRoutesPath.Home);
                }}
              />
              <h1
                className="text-[#d8f4c5] font-bold text-[28px] mt-[15px] cursor-pointer"
                onClick={() => {
                  navigate(CmsRoutesPath.Home);
                }}
              >
                {ProjectTitle}
              </h1>
            </div>
            <p className="text-center text-[#d8f4c5] mt-3">
              Knowledge for All, Growth for Everyone.
            </p>
          </div>
          <div className="w-[1px] bg-[#d8f4c5]"></div>
          <div className="text-[#d8f4c5]">
            <h2 className="text-center font-semibold text-[23px]">
              Connect with us
            </h2>
            <div className="mt-[30px] flex justify-center gap-14">
              <div
                className="flex justify-between cursor-pointer gap-2"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/projectgrowthvine?igsh=azF3ZHEyOXAxbmRv",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <InstagramIcon />
                <p className="-mt-[2px]">projectgrowthvine</p>
              </div>
              <div
                className="flex justify-between cursor-pointer gap-2"
                onClick={() =>
                  window.open(
                    "https://discord.gg/hdymU5pf",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <DiscordIcon />
                <p className="-mt-[2px]">Growthvine</p>
              </div>
              <div
                className="flex justify-between cursor-pointer gap-2"
                onClick={() =>
                  window.open(
                    "https://discord.gg/hdymU5pf",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <GmailIcon />
                <p className="-mt-[2px]">abc@xyz.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-16 text-[#d8f4c5] -mb-8 ">
          Copyrights Growthvine 2025
        </p>
      </div>
    </section>
  );
};

export default CmsFooter;
