import classNames from "classnames";

export const Select = ({
  id,
  label,
  options,
  value,
  onChange,
  className,
  selectClassName,
  ...rest
}) => {
  return (
    <div className={classNames("flex flex-col", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-base font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={classNames(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          selectClassName
        )}
        {...rest}
      >
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
