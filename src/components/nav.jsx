export default function Nav() {
  return (
    <nav className="py-6  text-white ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 ">
        {/* Logo */}
        <a href="/">
          <svg
            className="h-[40px]"
            src="../assets/lws-logo-en.svg"
            alt="LWS"
          ></svg>
        </a>
        {/*Logo Ends */}
        <a className="px-5 py-2 bg-[#172227] rounded-2xl ">Get Admission</a>
      </div>
    </nav>
  );
}
