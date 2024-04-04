import { Checkbox } from "@/components/ui/checkbox";
import Nav from "../../components/nav";
export default function Practice() {
  return (
    <div>
      <Nav />
      <div className="flex justify-center mt-16 mb-4">
        <div className="w-8 h-8 border-4 mr-4 text-center">1</div>
        <div className="w-[800px] h-8 border-4 text-center font-medium mr-4 cursor-pointer">
          PROBLEM 1
        </div>
        <div className="w-8 h-8 border-4 flex justify-center">
          <Checkbox className="absolute my-[4px]" />
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="w-8 h-8 border-4 mr-4 text-center">2</div>
        <div className="w-[800px] h-8 border-4 text-center font-medium mr-4">
          PROBLEM 2
        </div>
        <div className="w-8 h-8 border-4 flex justify-center">
          <Checkbox className="absolute my-[4px]" />
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="w-8 h-8 border-4 mr-4 text-center">3</div>
        <div className="w-[800px] h-8 border-4 text-center font-medium mr-4">
          PROBLEM 3
        </div>
        <div className="w-8 h-8 border-4 flex justify-center">
          <Checkbox className="absolute my-[4px]" />
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="w-8 h-8 border-4 mr-4 text-center">4</div>
        <div className="w-[800px] h-8 border-4 text-center font-medium mr-4">
          PROBLEM 4
        </div>
        <div className="w-8 h-8 border-4 flex justify-center">
          <Checkbox className="absolute my-[4px]" />
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="w-8 h-8 border-4 mr-4 text-center">5</div>
        <div className="w-[800px] h-8 border-4 text-center font-medium mr-4">
          PROBLEM 5
        </div>
        <div className="w-8 h-8 border-4 flex justify-center">
          <Checkbox className="absolute my-[4px]" />
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="w-8 h-8 border-4 mr-4 text-center">6</div>
        <div className="w-[800px] h-8 border-4 text-center font-medium mr-4">
          PROBLEM 6
        </div>
        <div className="w-8 h-8 border-4 flex justify-center">
          <Checkbox className="absolute my-[4px]" />
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="w-8 h-8 border-4 mr-4 text-center">7</div>
        <div className="w-[800px] h-8 border-4 text-center font-medium mr-4">
          PROBLEM 7
        </div>
        <div className="w-8 h-8 border-4 flex justify-center">
          <Checkbox className="absolute my-[4px]" />
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="w-8 h-8 border-4 mr-4 text-center">8</div>
        <div className="w-[800px] h-8 border-4 text-center font-medium mr-4">
          PROBLEM 8
        </div>
        <div className="w-8 h-8 border-4 flex justify-center">
          <Checkbox className="absolute my-[4px]" />
        </div>
      </div>
    </div>
  );
}
