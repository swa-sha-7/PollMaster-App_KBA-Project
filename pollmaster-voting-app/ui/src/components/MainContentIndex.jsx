import React from 'react'
import BackgroundImage from '../assets/img/background.jpg'


const MainContentIndex = () => {
  return (
    <>
    <div className="grid grid-cols-3">
      <div className="bg-gray-200 col-span-3 h-[536px] rounded-md" >
        <div className="grid grid-cols-2 gap-2 content-center rounded-md w-[70%] mx-auto my-auto">
          
          <div className="w-[95%] mx-auto my-auto">
            <img src={BackgroundImage} alt="image goes here" />
          </div>

          <div className="grid grid-rows-3 justify-items-center text-center gap-2 font-[600] mt-[100px]">

              <div className="w-52  h-[80px]  rounded-md flex items-center justify-center">
                  <h2 className="text-[#172B4D] text-[10px] text-[20px]">LOGIN AS</h2>
              </div>
              <div className="bg-[#87CEFA] w-52  h-[80px]  rounded-md flex items-center justify-center">
                  <a href="/forCandidates" className="text-[#172B4D] text-[10px] text-[20px]">Candidates</a>
              </div>
              <div className="bg-[#87CEFA] w-52 h-[80px] rounded-md flex items-center justify-center ">
                  <a href="/forVoters" className="text-[#172B4D] text-[10px]  text-[20px]">Voters</a>
              </div>
              <div className="bg-[#87CEFA] w-52 h-[80px] rounded-md flex items-center justify-center">
                  <a href="/officials" className="text-[#172B4D] text-[10px]  text-[20px]">Officials</a>
              </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainContentIndex
