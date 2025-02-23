import LoopMoreLogo from "../assets/LoopMoreLogo.svg";

export default function Header() {
  return (
    <div className="flex justify-center items-center w-full p-4">
      <div className="flex items-center space-x-2">
        <img src={LoopMoreLogo} alt="LoopMore Logo" className="w-20 h-20" />
        <h1 className="text-3xl font-bold text-[#481818]">
          Loop<span className="text-[#ECB72C]">More</span>
        </h1>
      </div>
    </div>
  );
}
