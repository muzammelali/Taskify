import BannerImage from "../assets/bannerImage.png";
export default function Banner() {
  return (
    <section className="pb-[100px] pt-16 md:mt-[100px] px-2.5 sm:px-0">
      <div className="container mx-auto">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center order-2">
            <img
              className="max-md:w-full"
              src={BannerImage}
              width="326"
              height="290"
              alt="frame"
            />
          </div>
          <div>
            <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#db4a2b] lg:text-[80px] font-['League_Spartan'] tracking-[-5.5px]">
              Taskify
            </h1>
            <p className="text-lg my-2 opacity-60">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
