export interface TextSubstringProps {
  str: string;
  limit: number;
  className?: string;
}
export default function TextSubstring({ str, limit, className }: TextSubstringProps) {
  return (
    <div className={className ? className : ""}>
      {str.length > limit ? str.substring(0, limit) + "..." : str}
    </div>
  );
}
