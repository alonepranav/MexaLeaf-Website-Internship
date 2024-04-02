
export default function Form() {
    return (

        <>

            <div className="bg-[url(/wave2.svg)] py-40 bg-no-repeat bg-cover bg-center flex justify-center items-center">
                <p className="bg-[#7ed957] text-white px-3 md:px-10 py-2 md:py-3 md:text-lg rounded-md font-semibold">Apply for Java Internship Program</p>
            </div>

            <div className="py-1">
                <div className="flex justify-center items-center">
                    <form action="" className="bg-sky-200 p-5 px-3 md:px-7 rounded-xl w-full mx-2 md:w-[40rem]">
                        <input
                            placeholder="Enter userid"
                            type="text"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />
                        <input
                            placeholder=" Enter name"
                            type="text"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />
                        <textarea name="" rows={3}
                            placeholder="Enter Address"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black"
                        ></textarea>
                        <input
                            placeholder="Enter Email"
                            type="email"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />
                        <input
                            placeholder="Enter Mobile number"
                            type="number"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />
                        <input
                            placeholder="Enter Highest Qualification"
                            type="text"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />
                        <input
                            placeholder="Score in % in highest qualification"
                            type="number"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />
                        <input
                            placeholder="Skills "
                            type="text"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />
                        <input
                            placeholder="Experience"
                            type="text"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />
                        <input
                            placeholder="Upload Resume "
                            type="file"
                            className="py-2 placeholder:text-white mb-5 placeholder:font-semibold placeholder:text-lg text-white text-lg bg-[#7ed957] rounded-md outline-none w-full focus:ring-1 px-3 focus:ring-black" />


                        <div className="flex justify-center items-center">
                            <input
                                type="submit"
                                value="Submit"
                                className="py-2 px-7 rounded-md bg-black font-semibold text-white" />
                        </div>

                    </form>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}
