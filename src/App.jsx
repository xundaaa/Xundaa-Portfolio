import React from 'react'
import video from "./videos/Video1.mp4"
import video1 from "./videos/Video2.mp4"
import video2 from "./videos/Video3.mp4"
import video3 from "./videos/Video4.mp4"
import video4 from "./videos/Video5.mp4"
function App() {
  const handleCopy = (e, text) => {
    e.preventDefault();
    navigator.clipboard.writeText(text)
    .then(() => alert("Username copied!"))
    .catch(err => console.error(err));
  };
  return (
    <div className='p-0 m-0'>
      <nav className='px-7 flex justify-between items-center bg-stone-900 h-20'>
        <button className='cursor-pointer' onClick={(e) => handleCopy(e,"xundaa")}><img src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="" className='w-10 h-10'/></button>
        <ul className='flex gap-5 text-white font-bold '>
          <a href=""><li className='hover:text-blue-900'>Soon</li></a>
          <a href=""><li className='hover:text-blue-900'>Soon</li></a>
        </ul>
         <a href="https://x.com/Xundaadev"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" alt="" className='w-10 h-10'/></a>
      </nav>
      <div className='h-[15vh] font-extrabold text-5xl items-center justify-center flex'>
        <h1>Past Work</h1>
      </div>
        <section className='grid grid-cols-3'>
          <video src={video} className='h-[500px] w-[500px] px-8' controls></video>
          <video src={video1} className='h-[500px] w-[500px] px-8' controls></video>
          <video src={video2} className='h-[500px] w-[500px] px-8' controls></video>
          <video src={video3} className='h-[500px] w-[500px] px-8' controls></video>
          <video src={video4} className='h-[500px] w-[500px] px-8' controls></video>
        </section>
    </div>
  )
}

export default App
