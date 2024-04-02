
export default function HeroSection() {
    return (
        <div className="bg-[#e0f4ff]">

            <div className="flex gap-20 items-center px-5 md:px-40 pt-10 md:pt-32 pb-10 flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <p className="text-4xl md:text-5xl font-semibold leading-snug">Looking for chance to kick start your career ?</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/logo.png" alt="" />
                </div>
            </div>

            <img src="/wave.svg" alt="" />

            <div className="bg-[#7ed957] px-3">
                <p className="text-center text-4xl font-semibold pt-10 md:pt-0">We provide internship for ?</p>

                <div className="flex justify-center items-center flex-wrap text-2xl gap-5 md:gap-10 mt-20 md:px-40">
                    <p className="md:mx-10 px-8 py-2 bg-amber-400 rounded-md">Java</p>
                    <p className="md:mx-10 px-8 py-2 bg-black text-white rounded-md">PHP</p>
                    <p className="md:mx-10 px-8 py-2 bg-amber-400 rounded-md">ReactJS</p>
                    <p className="md:mx-10 px-8 py-2 bg-black text-white rounded-md">Django</p>
                    <p className="md:mx-10 px-8 py-2 bg-amber-400 rounded-md">HTML</p>
                    <p className="md:mx-10 px-8 py-2 bg-black text-white rounded-md">CSS</p>
                    <p className="md:mx-10 px-8 py-2 bg-amber-400 rounded-md">Python</p>
                </div>
                <div className="flex justify-center mt-10">
                    <button className="mx-10 px-14 text-lg py-2.5 rounded-md bg-black text-white">Learn More</button>
                </div>
                <br />
                <br />
            </div>

        </div>
    )
}
