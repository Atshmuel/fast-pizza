export default function Inputs({
  customStyles = "",
  type = "text",
  name = "",
  placeholder = "",
  value = "",
  id = "",
  required = false,
  focus = false,
  onChange = () => {},
}) {
  return (
    <input
      className={`text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder:opacity-1
      w-full  border-b border-blue-200 bg-transparent pb-1.5 pl-2 pt-4 font-sans text-sm font-normal outline outline-0 transition-all duration-200 focus:border-gray-500 focus:outline-0 focus:placeholder:m-6
      disabled:border-0 ${customStyles}`}
      type={`${type}`}
      name={`${name}`}
      id={`${id}`}
      placeholder={`${placeholder}`}
      required={required}
      value={value}
      onChange={onChange}
      autoFocus={focus}
    />
  );
}
