import LoopMoreLogo from "../assets/LoopMoreLogo.svg";

export default function Header() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center space-y-4  w-full p-4">
          <img src={LoopMoreLogo} alt="LoopMore Logo" className="w-50 h-50" />
          <h1 className="text-3xl font-cedarville font-bold text-white">
            LoopMore
          </h1>
        </div>
      </div>
    </div>
  );
}
