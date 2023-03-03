interface IButton {
  href: string;
  target: string;
  children: any;
}

const Button = ({ href, children, target }: IButton) => {
  return href ? (
    <button
      className={
        "group inline-flex items-center justify-center rounded-full bg-blue-600 py-2 px-4 text-sm text-white ring-1 hover:bg-blue-500 hover:text-slate-100 focus:outline-none focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
      }
    >
      <a target={target ? target : ""} href={href}>
        {children}
      </a>
    </button>
  ) : (
    <button
      className={
        "group inline-flex items-center justify-center rounded-full bg-blue-600 py-2 px-4 text-sm text-white ring-1 hover:bg-blue-500 hover:text-slate-100 focus:outline-none focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
      }
    >
      {children}
    </button>
  );
};

export default Button;
