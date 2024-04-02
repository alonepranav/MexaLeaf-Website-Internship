
export default function Period() {
  return (
    <div>

      <p className="text-center font-semibold text-3xl">Virtual Internship Period</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center gap-32 items-center">
        <div className="relative flex justify-center items-center h-40 w-40">
          <p className="text-white text-3xl text-center leading-snug">1
            <br />Month</p>
          <div className="h-40 w-40 -z-10 absolute rotate-45 bg-black"></div>
        </div>
        <div className="relative flex justify-center items-center h-40 w-40">
          <p className="text-white text-3xl text-center leading-snug">3
            <br />Month</p>
          <div className="h-40 w-40 -z-10 absolute rotate-45 bg-[#7ed957]"></div>
        </div>
        <div className="relative flex justify-center items-center h-40 w-40">
          <p className="text-white text-3xl text-center leading-snug">6
            <br />Month</p>
          <div className="h-40 w-40 -z-10 absolute rotate-45 bg-black"></div>
        </div>
        <div className="relative flex justify-center items-center h-40 w-40">
          <p className="text-white text-3xl text-center leading-snug">1
            <br />Year</p>
          <div className="h-40 w-40 -z-10 absolute rotate-45 bg-[#7ed957]"></div>
        </div>
      </div>

    </div>
  )
}
