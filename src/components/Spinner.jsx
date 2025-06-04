import { Loader } from "lucide-react";

const Spinner = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className="size-16 text-[#0d90c1] animate-spin" />
    </div>
  );
};

export default Spinner;
