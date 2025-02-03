import classNames from "classnames";

export default function BaseButton({
    children,
    id,
    styling,
    onClick,
    type,
    disabled,
}) {
const classes = classNames("px-6 py-2 rounded-lg text-sm sm:text-lg transition-colors duration-200",{
    "bg-customcolor1 text-white hover:bg-hover":styling==="primary",
    "bg-white text-customcolor1 mt-2 mb-4 hover:bg-hover hover:text-white":styling==="second",
    "text-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-customcolor1 hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-1/3 mx-auto": styling === "tree",
    "px-4 py-1 bg-customcolor1 text-white rounded hover:bg-green-700":styling==="send",
    "px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400":styling==="delete"
});

  return (
    <button 
    id={id}
    className={classes}
    onClick={onClick}
    type={type}
    disabled={disabled}
    >
      {children}
    </button>
  );
}
