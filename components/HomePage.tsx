export default function HomePage() {
    return (
      <footer className="flex bg-gray-50 h-screen">
        <div className="flex items-center pl-8 pr-8 pt-8 w-full flex-col lg:pt-10">
          <h1 className="flex text-xl font-medium pb-4 xl:text-3x1 2xl:text-3xl 2xl:pb-6 transition ease-in-out duration-800 hover:scale-[1.05] text-neutral-800">Not just a Frontend UI Engineer</h1>
          <h1 className="flex text-lg font-light pb-8 xl:text-3x1 2xl:text-2xl transition ease-in-out duration-800 hover:scale-[1.05] text-neutral-800 2xl:pb-10">An expert in user experience development.</h1>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.youtube.com/embed/tvTRZJ-4EyI?controls=0&modestbranding=1&rel=0&showinfo=0"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[315px] sm:h-[400px]"
              />
            </div>
        </div>
        <div className="">
        
        </div>
      </footer>
    )
  }
  