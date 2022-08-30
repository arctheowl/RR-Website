interface IButton {
  href: string;
  children: any;
}

const Button = ({ href, children }: IButton) => {
  return href ? (
    <button
      className={
        "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
      }
    >
      <a href={href}>{children}</a>
    </button>
  ) : (
    <button
      className={
        "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
      }
    >
      {children}
    </button>
  );
};

export default Button;
