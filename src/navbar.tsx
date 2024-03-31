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
  <div className="font-medium border-5 border-black  bg-secondary navbar  pt-0">         
      
      <a className="basis-1/4 font-medium ">WordOFTheDay</a>
      <div className="basis-2/3 justify-center">
        <a className="mx-6">Home</a>
        <div className="indicator mx-6">
  <span className="indicator-item badge badge-secondary">soon</span> 
  <button className="btn">Quiz</button>
</div>
      </div>
      <div className="basis-1/4 justify-end">
      <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
Sketch
</button>
      </div>
      
</div>
)
}


function SecondNav(){
  return (
    <div className=" lg:h-64   h-min	flex flex-col lg:flex-row px-1 lg:px-12 border-5 border-black bg-secondary "> 
      <a className="basis-1/2 shrink-1 text-8xl lg:text-[128px]    p-4"> 
        Small Steps
      </a>           
        <p className="font-medium  text-pretty h-full p-6 lg:p-16 text-justify shrink-1 lg:text-clip  overflow-hidden  text-1xl lg:text-1xl line-clamp-3 lg:line-clamp-none ">
          
"Are you fluent in everyday English but eager to broaden your vocabulary? Our platform offers daily curated words to help intermediate speakers like you enhance their language skills effortlessly. Join us and take your English proficiency to the next level!"
        </p>
      
      
    </div>
)
}