import classNames from "classnames";

export const Button = ({ onClick, children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={classNames(
        "flex mx-auto text-white bg-red-600 hover:bg-red-700 disabled:opacity-70 font-medium rounded-full text-base px-10 py-4 text-center uppercase",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
7;
