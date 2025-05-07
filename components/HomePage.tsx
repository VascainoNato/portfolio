import Image from "next/image"
import icon from "../public/icon-vasco.png"

export default function HomePage() {
  return (
    <div className="flex bg-gray-50 h-screen flex-col">
      <div className="flex w-full items-center pl-8 pr-8 pt-8 flex-col lg:pt-10 md:pl-10 md:pr-10 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16 2xl:pl-20 2xl:pr-20 ">

        <div className="flex w-full flex-col justify-center align-center gap-4 2xl:gap-2 pb-6 lg:pb-12">
          <h1 className="flex text-xl font-medium text-center xl:text-3x1 2xl:text-4xl 2xl:pb-4 transition ease-in-out duration-800 hover:scale-[1.05] text-neutral-800 justify-center">Not just a Frontend UI Engineer...</h1>
          <h1 className="flex text-lg font-medium text-center xl:text-3x1 2xl:text-3xl transition ease-in-out duration-800 hover:scale-[1.05] text-gray-600 2xl:pb-4 justify-center">An expert in user interface development.</h1>
          <span className="flex justify-center text-center text-xl text-gray-600 transition ease-in-out duration-800 hover:scale-[1.05]">Learn a little more about my skills, knowledge, history and what I can add to your project or company.</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:justify-between lg:w-full">
          <div className="hidden w-full flex-col gap-4 lg:flex justify-center">
            <h1 className="flex text-xl font-medium text-center xl:text-3x1 2xl:text-3xl 2xl:pb-4 transition ease-in-out duration-800 hover:scale-[1.05] text-neutral-800 justify-center">Welcome to my private environment.</h1>
            <h1 className="flex text-lg font-light text-center xl:text-2x1 2xl:text-2xl transition ease-in-out duration-800 hover:scale-[1.05] text-gray-600 2xl:pb-4 justify-center">Here I have put in a specific effort to show what I can add to your project, regardless of what it is.</h1>
            <span className="flex justify-center text-center xl:text-lg 2xl:text-lg transition ease-in-out duration-800 hover:scale-[1.05] text-gray-600 md:pb-2 xl:pb-3 2xl:pb-4">Feel free, enjoy the background music, learn about what I've built in the past, what I'm currently building, and if you're interested, follow me on social media as I'm always sharing updates or knowledge about the UI Engineering area.</span>
            <div className="flex w-full justify-center items-center">
              <button className="flex bg-neutral-900 text-white rounded p-2 lg:w-[35%] xl:w-[30%] 2xl:w-[20%] text-md items-center justify-center transition ease-in-out duration-800 hover:scale-[1.05] cursor-pointer">Learn more</button>
            </div>
           
          </div>
          <div className="flex w-full flex-col justify-center items-center">
            <Image
              src={icon}
              alt="Icon"
              className="flex w-140 md:w-110 lg:w-100 2xl:w-150 transition ease-in-out duration-800 hover:scale-[1.01]"
            >
            </Image>
          </div>
        </div>


      </div>
    </div>
  )
}
  