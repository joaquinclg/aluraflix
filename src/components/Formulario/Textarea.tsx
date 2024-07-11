import { cn } from "../../lib/utils";

interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
}

const Textarea = ({ value, onChange, className, required }: TextareaProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      required={required}
      className={cn("rounded-sm bg-muted px-2 focus:outline-border", className)}
    />
  );
};

export default Textarea;
