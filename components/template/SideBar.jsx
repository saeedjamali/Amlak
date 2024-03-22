import React from 'react'
import { TiThMenu } from 'react-icons/ti'

function SideBar() {
    return (
        <div>
            <div className="sidebar h-[100vh] w-20 bg-amber-500 fixed top-0 right-0 flex items-start justify-center z-40 ">
                <span className="mt-8 cursor-pointer"><TiThMenu /></span>
            </div>

        </div>
    )
}

export default SideBar