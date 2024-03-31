export default function Navbar(){
  return (
      <>
      <FirstNav/> 
      <SecondNav/>
  </>
  )
}

function FirstNav(){
  return (
  <div className="font-medium lg:border-5 border-black  bg-white navbar h-24 pt-0 flex flex-row-reverse justify-between lg:flex-row w-full">  
      
      <div className="avatar">
        <div className="w-12 rounded-xl border-r-6  border-red-950 border-b-6  ">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      
      

      <div className="hidden lg:block basis-2/3 justify-center">
        <a className="lg:mx-6">Home</a>
        <div className="indicator mx-6">
            <span className=" indicator-item badge badge-secondary">soon</span> 
            <button className=" btn">Quiz</button>
        </div>
      </div>
      <div className="hidden md:visible basis-1/4 justify-end">
      <button className=" px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
Sketch
</button>
      </div>
      <div className="avatar lg:hidden ">
        <div className="w-12 text-3xl bg-slate-400 rounded-xl border-r-6  border-red-950 border-b-6 p-2 ">
          <img src="/home.svg"/>
        </div>
      </div>
      
</div>
)
}


function SecondNav(){
  return (
    <div className=" h-80 lg:h-64  flex flex-col lg:flex-row px-3 lg:px-12 mt-9 lg:mt-0 border-5 border-black  m-7 lg:m-0 rounded-2xl lg:rounded-none border-b-4 border-b-black border-r-4 border-r-black bg-primary lg:bg-secondary "> 
      <a className="font-mono  basis-1/2 shrink-1 text-4xl  text-center  lg:text-6xl lg:text-[128px]    p-4 "> 
        Daily Word <span className="lg:hidden sm:inline-block ">🎂</span>
      </a>           
        <p className="font-medium  text-pretty h-full p-6 lg:p-16 text-justify shrink-1 lg:text-clip  overflow-hidden  text-1xl lg:text-1xl line-clamp-3 lg:line-clamp-none ">
          
        "Fluent in English but craving more words? Dive into our daily curated picks, tailored for intermediate speakers like you. Elevate your language skills with ease. Join now and level up your English!"
        </p>
      
      
    </div>
)
}