import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './reducers/counterSlice';
import { useState } from 'react';

function App() {
  const { value } = useSelector((state) => state.counter);
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="App">
      {value}
      <button
        type='button'
        onClick={ () => dispatch(increment()) }
      >
        Add
      </button>
      <button
        type='button'
        onClick={ () => dispatch(decrement()) }
      >
        Decrement
      </button>
      <label htmlFor='amount-input'>
        Amount: 
        <input
          id='amount-input'
          type='number'
          onChange={ ({target}) => setAmount(target.value) }
          value={ amount }
        />
      </label>
      <button
        type='button'
        onClick={ () => dispatch(incrementByAmount(+amount)) }
      >
        Add amount
      </button>
    </div>
  );
}

export default App;
