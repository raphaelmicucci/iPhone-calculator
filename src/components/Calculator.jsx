import './Calculator.css';

const Calculator = () => {
  return(
    <div className='container'>
      <div className='visor'>Visor</div>
        <button className='light-grey'>AC</button>
        <button className='light-grey'>+/-</button>
        <button className='light-grey'>%</button>
        <button className='orange'>/</button>
        <button className='dark-grey'>7</button>
        <button className='dark-grey'>8</button>
        <button className='dark-grey'>9</button>
        <button className='orange'>X</button>
        <button className='dark-grey'>4</button>
        <button className='dark-grey'>5</button>
        <button className='dark-grey'>6</button>
        <button className='orange'>-</button>
        <button className='dark-grey'>1</button>
        <button className='dark-grey'>2</button>
        <button className='dark-grey'>3</button>
        <button className='orange'>+</button>
        <span>
          <button className='dark-grey zero'>0</button>
        </span>
        <button className='dark-grey'>,</button>
        <button className='orange'>=</button>
    </div>
  )
}

export default Calculator;