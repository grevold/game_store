interface Props {
  className?: string;
  onClick?: () => void;
}

export function BurgerIconClose({ className, onClick }: Props) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_201_6047)">
        <path
          d="M2.28528 19.3961L20.0457 1.6357C20.4135 1.26793 20.4133 0.671768 20.0457 0.304228C19.6782 -0.0633119 19.082 -0.0635315 18.7143 0.304235L0.953816 18.0647C0.586029 18.4325 0.58628 19.0286 0.95382 19.3961C1.32136 19.7637 1.91749 19.7639 2.28528 19.3961Z"
          fill="white"
        />
        <path
          d="M0.95341 1.63568L18.7139 19.3961C19.0816 19.7639 19.6778 19.7637 20.0453 19.3961C20.4129 19.0286 20.4131 18.4324 20.0453 18.0647L2.28487 0.304219C1.91708 -0.0635681 1.32095 -0.0633171 0.953407 0.304223C0.585867 0.671763 0.585623 1.26789 0.95341 1.63568Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_201_6047">
          <rect width="21" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
