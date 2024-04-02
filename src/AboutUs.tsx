export default function AboutUs() {
    return (
        <div className="flex justify-center items-center gap-5 md:gap-20 py-20 px-3 md:px-40 flex-col md:flex-row">
            <div className="">
                <img src="/image1.png" className="h-80 w-80 md:h-96" alt="" />
            </div> 

            <div className="w-full md:w-1/2">
                <p className="text-xl text-stone-500">Short names can be catchy and memorable, making them effective for branding and marketing purposes. Make sure to choose a name that aligns with your company's identity and goals.</p>
                <br />
                <button className="py-2 px-7 bg-black font-semibold text-white rounded">More About us</button>
            </div>
        </div>
    )
}
