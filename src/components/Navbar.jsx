import Logo from "../assets/Taskify.png";
export default function Navbar() {
  return (
    <nav className="py-6 sticky top-0 w-full !bg-[#e4e2dd] z-50 px-2.5 sm:px-0">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={Logo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
}
