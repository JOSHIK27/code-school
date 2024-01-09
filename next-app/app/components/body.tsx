import iiii from "../../Hand-coding-bro.png";
import { AccordionDemo } from "../shadcn/accordion";
import img2 from "../../college-campus-cuate.png";
import img3 from "../../exam.png";
import img4 from "../../Teaching-amico.png";
import img5 from "../../mentorship.png";
export default function Body() {
  return (
    <div>
      <div className="flex justify-around mt-4 flex-wrap">
        <div className="pt-28">
          <span className="font-outfit font-[300] text-4xl">WANNA LEARN</span>
          <br /> <br />
          <span className="font-outfit font-[600] text-4xl">
            DATA STRUCTURES
          </span>
          <br /> <br />
          <span className="font-outfit font-[600] text-4xl">ALGORITHMS</span>
          <span className="font-outfit text-4xl"> ?????</span>
          <br />
          <br />
          <span className="text-[#696969] font-outfit">
            At TLE, you get access to live classes, daily practice problems,{" "}
            <br></br>
            progress tracking, and a community of like-minded programmers.{" "}
            <br /> With 24/7 doubt support from top competitive programmers,{" "}
            <br /> post-contest discussions, and profile review sessions, <br />{" "}
            you'll get the guidance you need to achieve all your goals <br />{" "}
            and a clearer path towards success.
          </span>
          <br />
          <br />
          <button className="font-outfit font-semibold bg-[#0052C4] text-white h-[40px] w-[144px] rounded-full">
            Explore
          </button>
        </div>
        <img className="mt-12" src={iiii.src} width={500} height={500}></img>
      </div>
      <div className="flex justify-around flex-wrap">
        <img src={img2.src} width={500} height={500} />
        <div className="pt-40">
          <span className="font-outfit text-4xl">
            JOIN OUR AMAZING COMMUNITY
          </span>
          <br />
          <br />
          <span className="font-outfit text-[#696969] font-[500] text-lg">
            Join our thriving community of 4700+ competitive programmers <br />{" "}
            who have successfully completed our courses. With 27+ months of{" "}
            <br />
            experience and a 1:20 mentor to student ratio, we have cleared{" "}
            <br />
            35000+ doubts and helped our students achieve their goals. Get{" "}
            <br />
            top-notch guidance from our experts and become part of our <br />
            supportive community
          </span>
        </div>
      </div>
      <div className="w-[500px] mx-auto mt-8 mb-16">
        <span className="text-4xl font-outfit">PERKS OF JOINING US</span>
      </div>
      <div className="flex justify-around flex-wrap mb-12">
        <div className="ml-8 pt-12">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/external-dualtone-zulfa-mahendra/48/external-exam-online-study-dualtone-zulfa-mahendra.png"
            alt="external-exam-online-study-dualtone-zulfa-mahendra"
            className="mb-8"
          />
          <span className="font-outfit font-[700] text-2xl">
            WEEKLY CONTESTS
          </span>
          <br />
          <br />
          <span className="font-outfit text-[#696969] font-[500] text-lg">
            Join our thriving community of 4700+ competitive programmers <br />{" "}
            who have successfully completed our courses. With 27+ months of{" "}
            <br />
            experience and a 1:20 mentor to student ratio, we have cleared{" "}
            <br />
            35000+ doubts and helped our students achieve their goals. Get{" "}
            <br />
            top-notch guidance from our experts and become part of our <br />
            supportive community
          </span>
        </div>
        <img src={img3.src} height={500} width={500}></img>
      </div>
      <div className="flex flex-wrap justify-around mb-12">
        <img src={img4.src} height={500} width={500}></img>
        <div className="ml-8 pt-12">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/external-solid-adri-ansyah/64/228BE6/external-social-social-media-interface-solid-adri-ansyah-30.png"
            alt="external-social-social-media-interface-solid-adri-ansyah-30"
            className="mb-8"
          />
          <span className="font-outfit font-[700] text-2xl">
            INSTANT DOUBT SUPPORT
          </span>
          <br />
          <br />
          <span className="font-outfit text-[#696969] font-[500] text-lg">
            Join our thriving community of 4700+ competitive programmers <br />{" "}
            who have successfully completed our courses. With 27+ months of{" "}
            <br />
            experience and a 1:20 mentor to student ratio, we have cleared{" "}
            <br />
            35000+ doubts and helped our students achieve their goals. Get{" "}
            <br />
            top-notch guidance from our experts and become part of our <br />
            supportive community
          </span>
        </div>
      </div>
      <div className="flex justify-around flex-wrap mb-12">
        <div className="ml-8 pt-12">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/glyph-neue/64/228BE6/meeting.png"
            alt="meeting"
          />
          <span className="font-outfit font-[700] text-2xl">
            ONE TO ONE MENTORSHIP
          </span>
          <br />
          <br />
          <span className="font-outfit text-[#696969] font-[500] text-lg">
            Join our thriving community of 4700+ competitive programmers <br />{" "}
            who have successfully completed our courses. With 27+ months of{" "}
            <br />
            experience and a 1:20 mentor to student ratio, we have cleared{" "}
            <br />
            35000+ doubts and helped our students achieve their goals. Get{" "}
            <br />
            top-notch guidance from our experts and become part of our <br />
            supportive community
          </span>
        </div>
        <img src={img5.src} height={500} width={500}></img>
      </div>
      <AccordionDemo />
    </div>
  );
}
