import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div>
            <div className="header flex items-center justify-around">
                <div className="w-full md:w-2/3 h-[100vh] flex flex-col space-y-8  ">
                    <div className="flex flex-col justify-around space-y-24 h-full  ">
                        <div className="logo flex items-center justify-center mt-8 ">
                            <span className="text-amber-700  "><img className="w-64" src="/img/logo.png" /></span>
                        </div>
                        <div className="flex flex-col  items-start justify-center space-y-8 flex-1">
                            <span className="text-amber-400 text-4xl">خانه خودتان : </span>
                            <span className="text-white  font-semibold text-5xl">با خرید خانه نهایت آزادی را احساس کنید...</span>
                        </div>

                        <div >
                            <Link className="text-white bg-amber-600 py-1 px-2 font-light text-xl" href={"/houses"}>املاک ما را مشاهده کنید</Link>
                        </div>
                    </div>
                    <div className="text-white w-full flex flex-col items-center px-4 relative">

                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <span className="absolute px-3 text-sm text-gray-100 -translate-x-1/2 bg-black left-1/2">دیده می شود در </span>
                        </div>
                        <div className="flex items-center justify-around w-full py-8">
                            <span className="w-1/4"><img className="w-36 " src="/img/logo-bbc.png" /></span>
                            <span className="w-1/4"><img className="w-36 " src="/img/logo-bi.png" /></span>
                            <span className="w-1/4"><img className="w-36 " src="/img/logo-forbes.png" /></span>
                            <span className="w-1/4"><img className="w-36 " src="/img/logo-techcrunch.png" /></span>

                        </div>
                    </div>
                </div>
                <div className="real-tors h-[100vh] p-8  hidden md:w-1/3 md:flex flex-col items-center justify-center ">

                    <span className="text-orange-300 text-xl">سه مالک برتر</span>
                    <div className="mt-8 w-full space-y-4">
                        <div className="w-full flex items-center ">
                            <img className="w-24 h-24  rounded-full" src="/img/realtor-1.jpeg" />
                            <div className="flex flex-col flex-1 h-full mr-4 justify-around">
                                <span className="font-bold text-xl text-white">مهدی ایلخانی نسب</span>
                                <span className="text-lg text-gray-400">فروش خانه</span>
                            </div>
                        </div>
                        <div className="w-full flex items-center ">
                            <img className="w-24 h-24  rounded-full" src="/img/realtor-2.jpeg" />
                            <div className="flex flex-col flex-1 h-full mr-4 justify-around">
                                <span className="font-bold text-xl text-white">مهدی ایلخانی نسب</span>
                                <span className="text-lg text-gray-400">فروش خانه</span>
                            </div>
                        </div>
                        <div className="w-full flex items-center ">
                            <img className="w-24 h-24  rounded-full" src="/img/realtor-3.jpeg" />
                            <div className="flex flex-col flex-1 h-full mr-4 justify-around">
                                <span className="font-bold text-xl text-white">مهدی ایلخانی نسب</span>
                                <span className="text-lg text-gray-400">فروش خانه</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header