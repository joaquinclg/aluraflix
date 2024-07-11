import { cn } from "../../lib/utils";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  required,
}: InputProps) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={cn(
        "rounded-sm bg-muted px-2 py-1 focus:outline-border",
        className,
      )}
    />
  );
};

export default Input;
