export default function Footer() {
  return (
    <div className="mt-28">
      <div className="h-[400px] bg-[#0051C3]">
        <div className="flex flex-wrap justify-evenly">
          <div className="pt-20">
            <h1 className="text-white font-outfit text-lg mb-[4px]">COURSES</h1>
            <h1 className="text-[#C4D3F0] font-outfit mb-[3px]">Part-1</h1>
            <h1 className="text-[#C4D3F0] font-outfit mb-[3px]">Part-2</h1>
            <h1 className="text-[#C4D3F0] font-outfit mb-[3px]">Part-3</h1>
            <h1 className="text-[#C4D3F0] font-outfit mb-[3px]">Part-4</h1>
          </div>
          <div className="mt-28">
            <h1 className="text-white font-outfit text-lg mb-[4px]">FAQs</h1>
            <h1 className="text-white font-outfit text-lg mb-[4px]">
              About Us
            </h1>
            <h1 className="text-white font-outfit text-lg mb-[4px]">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="bg-white h-[1px] mx-auto w-[800px] mt-8"></div>
        <div className="w-[200px] mx-auto mt-8">
          <h1 className="text-[16px] pt-[13px] text-white ml-4 font-outfit font-bold mb-4">
            CODE SCHOOL
          </h1>
          <div className="flex">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/discord-logo.png"
              alt="discord-logo"
              className="m-[7px]"
            />
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/telegram.png"
              alt="telegram"
              className="m-[7px]"
            />
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png"
              alt="github"
              className="m-[7px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
