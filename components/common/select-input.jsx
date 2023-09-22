export const SelectInput = ({
  options,
  selected,
  label,
  register,
  name,
  className,
  ...props
}) => {
  return (
    <>
      <p className="text-xs font-medium mb-2">{label}</p>
      <select
        class={['py-1', className].join(' ')}
        {...register(name)}
        {...props}
      >
        {options.map((item) => (
          <option value={item} defaultValue={selected} key={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
