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
          <a className="mx-6">Quiz</a>
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
      <div className="h-64 flex flex-row  px-12 border-5 border-black bg-secondary "> 
        <a className="basis-1/2 shrink text-[128px] h-full  p-4"> 
          SmallSteps
        </a>           
          <p className="font-medium h-full p-16 text-justify  text-clip overflow-hidden hover:overflow-auto  text-1xl">
            
"Are you fluent in everyday English but eager to broaden your vocabulary? Our platform offers daily curated words to help intermediate speakers like you enhance their language skills effortlessly. Join us and take your English proficiency to the next level!"
          </p>
        
        
      </div>
  )
}