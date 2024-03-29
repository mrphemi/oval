import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"svg">;

const Linkedin = (props: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle opacity="0.24" cx="15" cy="15" r="14" stroke="#E8E7E8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2327 13.1354C11.9131 13.1354 12.4647 12.6579 12.4647 12.0683C12.4647 11.4781 11.9131 11 11.2327 11C10.5516 11 10 11.4781 10 12.0683C10 12.6579 10.5516 13.1354 11.2327 13.1354ZM10.2824 20H12.493V13.9484H10.2824V20ZM16.7687 15.2616C15.9416 15.2616 15.5957 15.9402 15.5957 16.6342V19.9227H13.3887V13.8711H15.5957V14.6858C16.1764 13.9741 16.681 13.6804 17.5959 13.6804C18.5115 13.6804 20 14.0924 20 16.4825V19.9227H17.7993V16.6176C17.7993 15.9402 17.5959 15.2616 16.7687 15.2616Z"
        fill="white"
      />
    </svg>
  );
};

export default Linkedin;
