import hero from "../assets/hero-graphics.svg";
export default function Hero() {
  return (
    <section className="">
      <div className=" container mx-auto">
        <div className="md:flex items-center w-10/12 mx-auto">
          <img
            className="md:order-2 object-cover ml-auto animate-updown"
            src={hero}
            width="500px"
            height="500px"
            alt="Banner"
          />
          <div>
            <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
              The Future of Learning starts with students at the center
            </h1>
            <a className="px-5 py-2.5  bg-[#038C61] rounded-[44px]" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
