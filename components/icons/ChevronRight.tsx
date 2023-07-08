import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"svg">;

const ChevronRight = (props: Partial<Props>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 2L11 8L5 14"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
