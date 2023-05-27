import React from 'react'
import TextInput from '../../components/textInput/textInput'

function Home() {
    const onInputValueChange = (value:string) => {
        console.log("input values",value);
      }
  return (
    <div>
        <TextInput
        type="text"
        label="input color codes"
        onChange={onInputValueChange}
        />
    </div>
  )
}

export default Home