import React, {useState} from 'react'
import './App.css'
import sound from '/sound.mp3'

const App = () => {
  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [img, setImg] = useState(false)

  const minus = () => {
    if(num > 0) {
      setNum(num - 1)
    }
  }


  const plus = () => {
    if(num < 10) {
      setNum(num + 1)
    }
  }

  const openImgPlaySound = () => {
    setImg(!img)
    const audio = new Audio(sound)
    audio.play()
   }



  return (
    <> 
    <div className="box">
      <h4>{num}</h4>
      <button onClick={plus}>add</button>
      <button onClick={minus}>decrease</button>
      <button onClick={() => setNum(0)}>reset to zero</button>
      {/* <button onClick={() => setNum(num * 2)}>Удвоить число</button> */}
    </div>


    <div className="box">
      <h4>{text}</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>


   <div className="box">
    <button onClick={openImgPlaySound}>click me</button>
    {img && <img onClick={() => setImg(false)} src='https://i.ytimg.com/vi/Iolj4RbG0uM/maxresdefault.jpg'/>}
   </div>
    </>
  )
}

export default App