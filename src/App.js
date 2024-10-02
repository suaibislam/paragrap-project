
import React,{useState} from 'react'
import data from './data'
const App = () => {
  const [count , setCount] = useState(0)
  const [textdata, settextdata] = useState([])
  const handleClick=(e)=>{
    e.preventDefault();
    let amount = parseInt(count);
    if(count < 0){
       amount=1
    }else if(count > data.length){
      amount = data.length;
    }
    settextdata(data.slice(0,amount))
  }
  
  return (
  <>
   <main>
     <h1 className=' mt-10 text-center font-bold  text-2xl'>Create the Paragrap</h1>
    <div className=' mt-32 flex justify-center items-center flex-col  gap-8'>
      <form onSubmit={handleClick}>
        <label htmlFor="amount">Input the paragrap count : </label>
        <input 
         type='number'
         name='amount'
         id='amount'
         value={count}
         onChange={(e) => setCount(e.target.value)}
        
        />
        <button >Submit</button>
      </form>
      {textdata.map((e, k) => {
        return <div className=' text-justify w-3/5 '>

          <h1 key={k}>{e}</h1>

        </div>
      })}
    </div>
    </main>
    </>
  )
}

export default App