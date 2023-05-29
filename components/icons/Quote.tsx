import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"svg">;

const Quote = ({ className }: Props) => {
  return (
    <svg
      width="96"
      height="64"
      viewBox="0 0 96 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 42.6706C0 19.1391 19.672 0 43.8603 0C45.5891 0 47 1.35353 47 3.03419C47 4.73381 45.5891 6.08734 43.8603 6.08734C28.7781 6.08734 15.7449 14.7822 9.75652 27.284C12.8473 25.4421 16.4785 24.3778 20.3615 24.3778C31.5901 24.3778 40.7255 33.2646 40.7255 44.1877C40.7255 55.1132 31.5901 64 20.3615 64C9.13298 64 0 55.1132 0 44.1877C0 43.8013 0.0146713 43.4173 0.0366821 43.0333C0.0220032 42.9148 0 42.7939 0 42.6706ZM92.8628 0C94.6087 0 96 1.35353 96 3.03419C96 4.73381 94.6087 6.08734 92.8628 6.08734C77.7854 6.08734 64.762 14.7774 58.7785 27.2721C61.8644 25.4374 65.4883 24.3778 69.364 24.3778C80.5925 24.3778 89.7426 33.2646 89.7426 44.1877C89.7426 55.1132 80.5925 64 69.364 64C58.133 64 49 55.1132 49 44.1877C49 43.8013 49.0147 43.4149 49.0367 43.0309C49.022 42.91 49 42.7939 49 42.6706C49 19.1391 68.6744 0 92.8628 0Z"
        fill="#FF6846"
      />
    </svg>
  );
};

export default Quote;