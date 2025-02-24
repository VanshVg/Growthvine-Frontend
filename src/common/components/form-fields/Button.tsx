import { btnShowType, IButtonProps } from "@/common/types";

const Button = ({
  btnName,
  type,
  showType,
  btnClass,
  onClickHandler,
  isLoading,
  loaderClass,
  disabled,
  BtnIconLeft,
  btnEndIcon,
}: IButtonProps) => {
  let btnType = "";
  switch (showType) {
    case btnShowType.Black:
      btnType = `bg-black font-semibold text-lightGray hover:bg-white hover:text-black py-2 px-4 border-black border-[1px] rounded-md transition-colors duration-300 ${btnClass}`;
      break;
    case btnShowType.Black:
      btnType = `bg-lightGray font-semibold text-black hover:bg-black hover:text-lightGray py-2 px-4 rounded-md transition-colors duration-300 ${btnClass}`;
      break;
    default:
      btnType = ` py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${
        btnClass ?? ""
      }`;
  }

  return (
    <button
      className={btnType}
      type={type ? type : "button"}
      onClick={onClickHandler}
      disabled={isLoading ? true : disabled}
    >
      {BtnIconLeft}
      {btnName}
      {isLoading && (
        <span className={`inline-flex ml-3 mt-1.5 ${loaderClass ?? ""} `}>
          <div className="spinnerW"></div>
        </span>
      )}
      {btnEndIcon && btnEndIcon}
    </button>
  );
};

export default Button;
