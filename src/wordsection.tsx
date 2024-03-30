import {WordnikAPI} from "wordnik-api";


const api = new WordnikAPI("9fhrqx4vgdxepxdqbiev8wfmxg07a69koryearjgwdkx9ibd2");
const prenup = api + 'a84645sdsbsovbihsav65446'
console.log(prenup.slice(52,56))
import  { useState } from 'react';

function WordOfDay() {    
    const [word, setWord] = useState('Lorem Ipsum');
    const [definitionTexts, setDefinitionTexts] = useState(['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,']);
    const [exampleTexts, setExampleTexts] = useState(['quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur','quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur']);  
    setWord('Lorem Ipsem');
    setDefinitionTexts(['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,']);
    setExampleTexts(['quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur','quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur']);

    // useEffect(() => {
    //     api.getWordOfTheDay().then((response) => {
    //         console.log(response)
    //         const { word, definitions, examples } = response;
    //         setWord(word);
    //         setDefinitionTexts(definitions.slice(0,2).map(def => <p>{def.text}</p>));
    //         setExampleTexts(examples.slice(0,2).map(ex => ex.text));
    //         console.log(exampleTexts)
    //     });
    // }, []);

    return <TodayWord word={word} meaning={definitionTexts} examples={exampleTexts}/>
}

function TodayWord({word, meaning, examples}: {word: string, meaning: string[], examples: string[]}) {
    return (
        
<div className="border-5 border-black h-screen  grid grid-cols-6 grid-rows-4 gap-4">
    
        <div className="m-12 bg-white border-6 rounded-2xl  border-blue-800 border-b-4 border-b-black border-r-4 border-r-black col-span-4 row-span-3 ">
            <div className="grid grid-cols-6 grid-rows-6">
                <div className="border-r-4 my-6 col-span-1 row-span-7">

                </div>
                <div className="gap-4 p-6 col-span-5 row-span-4 ">
                    <h1 className='text-2xl text-left pt-2 pl-4 grow row-span-2 '>
                            <span> {word}</span> <br></br>
                        <p className="pt-5"> {meaning}</p>
                    </h1>
                
                </div>
            </div>
        </div>

    <div className="p-12 text-1xl text-left  pl-4 grow  col-span-2 row-span-5 col-start-5 lg:border-l-2 lg:border-l-black">
        <span className="text-2xl ">Examples</span>
         <ChatBubble examples={examples}></ChatBubble>
    </div>
</div>
    
    )
}

function ChatBubble({examples}:{ examples:string[]}){
    return (
        <>
        <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">1. {examples[0]}</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">2. {examples[1]}</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
        </>
    )
}

export default WordOfDay;