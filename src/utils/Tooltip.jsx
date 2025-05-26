
export default function Tooltip({children, text}) {
    return (
        <>
            <div className="relative group cursor-pointer w-full">
                {children}
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap px-2 py-1 text-xs rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-md pointer-events-none">
                    {text}
                     <span className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-gray-700 z-[-1]"></span>
                </span>
            </div>
        </>
    )
}
