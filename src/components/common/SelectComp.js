import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectComp = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div
      className={`flex flex-col gap-1 min-w-[110px] bg-[#fff] text-xs ${
        className || "max-w-[180px]"
      }`}
    >
      {label && (
        <label
          className="worksans font-normal text-[12px] text-[#2F2B3DE5]"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <Select
        value={value}
        onValueChange={onChange}
        className="bg-[#fff] text-xs"
      >
        <SelectTrigger className=" w-full text-xs ">
          <SelectValue placeholder={placeholder || "Select"} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComp;
