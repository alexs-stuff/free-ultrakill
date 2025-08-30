"use client";
export default function NotFound() {
    return (
        <>
            <div className="h-[100vh] flex flex-col justify-center items-center">
                <h1 className="text-6xl text-red-600">Page not found</h1>
                <a href="/"  className="border-2 border-red-600 text-red-600 py-3 px-3 w-72 text-2xl hover:bg-red-600 hover:text-black">Return back</a>
            </div>
        </>
    )
}