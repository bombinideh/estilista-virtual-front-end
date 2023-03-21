export const InputRadio = ({ id, name, label, checked, onChange, ...rest }) => {
  return (
    <div className="flex gap-1">
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={name} className="text-base font-medium text-neutral-900">
        {label}
      </label>
    </div>
  );
};
