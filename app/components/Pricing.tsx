import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center font-medium text-2xl lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="flex flex-col w-full rounded-[8px] bg-[#f7f7f7] p-6 lg:justify-between items-center">
          <div>
            <h3 className="font-medium text-[18px] lg:text-xl text-[#4328EB]">
              Free Trial
            </h3>
            <p className="pt-[12px] lg:text-[18px] text-[#36485C]">
              Perfect for testing the waters
            </p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$<span className="text-[#5F7896]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] w-[50%] lg:w-[100%] sm:mt-12">
            Start Trial
          </button>
        </div>

        <div className="flex flex-col w-full rounded-[8px] bg-[#4328EB] p-6 lg:justify-between items-center">
          <div>
            <h3 className="font-medium text-[18px] lg:text-xl text-white">
              Business
            </h3>
            <p className="pt-[12px] lg:text-[18px] text-[#F4F8FA]">
              Perfect for small business
            </p>
            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              500$<span className="text-[#F4F8FA]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] w-[50%] lg:w-[100%] sm:mt-12">
            Get started
          </button>
        </div>

        <div className="flex flex-col w-full rounded-[8px] bg-[#f7f7f7] p-6 lg:justify-between items-center">
          <div>
            <h3 className="font-medium text-[18px] lg:text-xl text-[#4328EB]">
              Enterprise
            </h3>
            <p className="pt-[12px] lg:text-[18px] text-[#36485C]">
              Perfect for big companies
            </p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              Custom
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] w-[50%] lg:w-[100%] sm:mt-12">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}
