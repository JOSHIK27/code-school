import img1 from "../../images/download.png";
import img2 from "../../images/download2.png";
import img3 from "../../images/download3.png";
import img4 from "../../images/download4.png";
import Nav from "../../components/nav";
export default function Courses() {
  return (
    <div>
      <Nav />
      <div className="flex justify-evenly mt-16 flex-wrap">
        <div className="w-[280px] rounded-lg m-4 shadow-md">
          <div className="h-[230px] w-[280px]">
            <div className="w-[148px] mx-auto">
              <img src={img1.src}></img>
            </div>
            <div className="mx-auto w-[30px] mb-[4px] mt-4">50£</div>
            <div className="mx-auto w-[150px] mb-[20px]">
              Validity - 2months
            </div>
            <div className="w-[144px] mx-auto">
              <button className="font-outfit font-semibold bg-[#0052C4] text-white h-[40px] w-[144px] rounded-full">
                Buy Now
              </button>
            </div>
          </div>
          <div className="h-[80px] w-[280px] bg-[#D9D9D9] text-center">
            Level 1 is for beginners
          </div>
        </div>
        <div className="w-[280px] rounded-lg m-4 shadow-md">
          <div className="h-[230px] w-[280px]">
            <div className="w-[148px] mx-auto">
              <img src={img2.src}></img>
            </div>
            <div className="mx-auto w-[30px] mb-[4px] mt-4">50£</div>
            <div className="mx-auto w-[150px] mb-[20px]">
              Validity - 2months
            </div>
            <div className="w-[144px] mx-auto">
              <button className="font-outfit font-semibold bg-[#0052C4] text-white h-[40px] w-[144px] rounded-full">
                Buy Now
              </button>
            </div>
          </div>
          <div className="h-[80px] w-[280px] bg-[#D9D9D9] text-center">
            Level 2 is for intermediate
          </div>
        </div>
        <div className="w-[280px] rounded-lg m-4 shadow-md">
          <div className="h-[230px] w-[280px]">
            <div className="w-[148px] mx-auto">
              <img src={img3.src}></img>
            </div>
            <div className="mx-auto w-[30px] mb-[4px] mt-4">50£</div>
            <div className="mx-auto w-[150px] mb-[20px]">
              Validity - 2months
            </div>
            <div className="w-[144px] mx-auto">
              <button className="font-outfit font-semibold bg-[#0052C4] text-white h-[40px] w-[144px] rounded-full">
                Buy Now
              </button>
            </div>
          </div>
          <div className="h-[80px] w-[280px] bg-[#D9D9D9] text-center">
            Level 3 is for advanced
          </div>
        </div>
        <div className="w-[280px] rounded-lg m-4 shadow-md">
          <div className="h-[230px] w-[280px]">
            <div className="w-[148px] mx-auto">
              <img src={img4.src}></img>
            </div>
            <div className="mx-auto w-[30px] mb-[4px] mt-4">50£</div>
            <div className="mx-auto w-[150px] mb-[20px]">
              Validity - 2months
            </div>
            <div className="w-[144px] mx-auto">
              <button className="font-outfit font-semibold bg-[#0052C4] text-white h-[40px] w-[144px] rounded-full">
                Buy Now
              </button>
            </div>
          </div>
          <div className="h-[80px] w-[280px] bg-[#D9D9D9] text-center">
            Level 4 is for pro's
          </div>
        </div>
      </div>
    </div>
  );
}
