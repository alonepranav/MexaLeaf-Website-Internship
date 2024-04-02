import { useState } from "react"

export default function Navbar() {

    const [hide, setHide] = useState<boolean>(false)

    return (
        <nav className="flex justify-between relative items-center px-5 md:px-20 py-3 bg-[#e0f4ff]" >

            <img className="h-10 w-40" src="/logo.png" alt="" />

            <ul className="hidden md:flex gap-14 items-center text-xl font-semibold">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Internship</a>
                <a href="#">Contact</a>
                <a href="#">Login</a>
            </ul>

            {
                hide &&
                <ul className="flex md:hidden gap-14 flex-col absolute top-16 py-7 shadow-md shadow-slate-300 bg-[#e0f4ff] left-0 pl-7 w-full text-lg font-semibold">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Internship</a>
                    <a href="#">Contact</a>
                    <a href="#">Login</a>
                </ul>
            }

            <div className="text-3xl md:hidden" onClick={() => setHide(!hide)}>
                {hide ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
            </div>

        </nav>
    )
}
