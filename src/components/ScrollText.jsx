import { FaStarOfLife } from "react-icons/fa";

const ScrollText = () => {
  return (
    // SCROLL TEXT
    <section className="overflow-hidden w-12  block bg-[#b9a0fe] z-10 flex-shrink-0">
      <div className="pl-4 scroll text1 flex w-[100%] gap-4 py-2 rotate-90 ">
        {/* TEXT */}
        <div className="flex items-center text-black text-xl font-semibold whitespace-nowrap animate-loop-scroll  ">
          Events: oasis bus tour, jln Stadium{" "}
          <span className="mx-4">
            <FaStarOfLife />
          </span>
          Collections: Meta Live, oasis bus tour
        </div>
      </div>
    </section>
  );
};

export default ScrollText;
