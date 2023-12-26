import { FaChevronDown } from "react-icons/fa6";

const Widget1 = () => {
  return (
    <section>
      <div className=" h-full rounded-xl">
        <div className="flex h-64 justify-between rounded-xl bg-[#F64E60] p-6">
          <p className="font-semibold text-white">Categories</p>
          <button className="flex cursor-pointer gap-2 bg-red-400 px-4 py-2 rounded-lg text-white h-fit">
            <p className="text-xs font-semibold">Export</p>
            <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Widget1;
