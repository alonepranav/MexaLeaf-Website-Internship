export default function Navbar() {
    return (
        <nav className="flex justify-between relative items-center px-20 py-3 bg-[#e0f4ff]" >

            <img className="h-12 w-44" src="/logo.png" alt="" />

            <ul className="flex gap-14 items-center text-xl font-semibold">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Internship</a>
                <a href="#">Contact</a>
                <a href="#">Login</a>
            </ul>

{/* 
            <ul className="flex gap-14 flex-col absolute top-16 py-7 bg-slate-200 left-0 pl-10 w-full text-lg font-semibold">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Internship</a>
                <a href="#">Contact</a>
                <a href="#">Login</a>
            </ul> */}

        </nav>
    )
}
