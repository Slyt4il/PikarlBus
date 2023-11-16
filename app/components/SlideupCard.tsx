"use client";
import { CardProps } from "@/types/propTypes";

const SlideupCard = ({ isOpen, onClose }: CardProps) => {
  return (
    <>
      <div
        className={`z-50 fixed -bottom-4 left-[10%] w-4/5 lg:w-2/4 lg:left-1/4 h-[45%] bg-slate-100 opacity-90 rounded-2xl transition-transform duration-500 transform flex justify-center items-center ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="text-lg font-bold text-center">
          <p>Sign up today to receive free PikarlBus coupons.</p>
        </div>
      </div>
    </>
  );
};

export default SlideupCard;
