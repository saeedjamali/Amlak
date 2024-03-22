import React from 'react'

function SingleHouse({id,price,roomCount,meterage,title,img,desc,code}) {
  return ( 
    <div>
           <div className="single_house w-full  bg-white flex  mt-8 ">
            <div className="container mx-auto  w-full p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 w-full ">
                <div className="col-span-1 p-2 rounded-md">
                  <img src={img} className="rounded-md" />
                </div>
                <div className="col-span-1 md:col-span-2 flex flex-col justify-around  p-4 space-y-8">
                  <div className="flex items-center justify-between text-4xl font-bold">
                    <span>فروشگاه مجازی ماکسیما</span>
                    <span>{price?.toLocaleString()} تومان</span>
                  </div>
                  <div className="text-sm"><span className="bg-green-400 px-2 text-white">ویژه</span> <span className="px-2 bg-stone-600 text-white">{title}</span></div>

                  <div className="flex items-center justify-between text-2xl font-bold">
                    <span>مرور کلی</span>
                    <span>کد ملک : {code}</span>
                  </div>

                  <hr />
                  <div className="flex items-center justify-between text-xl font-light">
                    <span>نوع : مغازه</span>
                    <span>اتاق : {roomCount}</span>
                    <span>متراژ : {meterage} متر</span>
                    <span>سال ساخت : 1402</span>
                  </div>
                </div>

              </div>
              <div className="description w-full mt-12">
                <span className="font-bold mb-4">توضیحات</span>
                <hr />
                <p className="text-justify mt-4 ">
                 {desc}
                </p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SingleHouse