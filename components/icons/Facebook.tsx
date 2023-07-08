import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"svg">;

const Facebook = (props: Props) => {
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
        d="M13.9113 20.0124H15.733V15.0086H17.0996L17.3699 13.4452H15.733V12.3122C15.733 11.947 15.9692 11.5635 16.3067 11.5635H17.237V10H16.0969V10.007C14.3129 10.0718 13.9464 11.1049 13.9146 12.1902H13.9113V13.4452H13V15.0086H13.9113V20.0124Z"
        fill="white"
      />
    </svg>
  );
};

export default Facebook;
