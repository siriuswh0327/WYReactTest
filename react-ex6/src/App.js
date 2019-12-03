import React, {useState} from 'react';
import InputNumber from './InputNumber'

function App(){
  // eslint-disable-next-line 
  const [value,setValue] = useState('aaa')
  return (
      <div>
        <InputNumber value={value} onChange={e=>{}}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
      </div>
  )
}
export default App;
