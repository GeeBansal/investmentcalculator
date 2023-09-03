import React,{useState} from 'react'


const Form = (props) => {
    const [currentSaving,setCurrentSaving]=useState(0);
  const [yearlySaving,setYearlySaving]=useState(0);
  const [expectedInterest,setExpectedInterest]=useState(0);
  const [duration,setDuration]=useState(0);

  const inputHandler=(x,value)=>{
    if(x==='current-savings'){
      setCurrentSaving(value);
    }
    else if(x==='yearly-contribution'){
      setYearlySaving(value);
    }
    else if(x==='expected-return'){
      setExpectedInterest(value);
    }else{
      setDuration(value);
    }
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    props.submitHandler({currentSaving,yearlySaving,expectedInterest,duration})
  }
  return (
    <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(e)=>inputHandler('current-savings',e.target.value)} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(e)=>inputHandler('yearly-contribution',e.target.value)} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(e)=>inputHandler('expected-return',e.target.value)} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(e)=>inputHandler('duration',e.target.value)} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  )
}

export default Form