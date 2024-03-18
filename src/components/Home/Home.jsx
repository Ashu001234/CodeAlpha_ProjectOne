import React from 'react'
import {Link  } from "react-router-dom";

export default function Home() {
    return (
        <div className=" w-full  bg-gray-700">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
             

          

            <div className="  place-items-center flex justify-center items-center  ">
                <img className="sm:w-96 w-48" src="https://as1.ftcdn.net/v2/jpg/02/22/47/36/1000_F_222473602_aiXZ5sPIYrFJAWdKPUwNQ8owq8kgRQOs.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-orange-600">Ashish Girpunje</h1>
            </aside>
        </div>
    );
}
