import React, {useState} from 'react'

function Forms() {

    const [text, setText] = useState('')

    function textChange(e){
        setText(e.target.value)
    }


  return (
    <div>
        <form>
            <input onChange={textChange} type = "text" value={text}/>
        </form>
    </div>
  )
}

export default Forms