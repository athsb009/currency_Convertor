

import { useState } from 'react';
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
    const[amount,setAmount]=useState(0);
    const[from,setFrom]=useState("usd");
    const [to, setTo] = useState('eur');  
    const[convertedamt,setConvertAmt]=useState(0);
    const currInfo=useCurrencyInfo(from)

    const options=Object.keys(currInfo);

    const convert=()=>{
      setConvertAmt(amount*currInfo[to])
      console.log(options)
    }
const swap=()=>{
  setFrom(to);
  setTo(from);
  setAmount(convertedamt);
  setConvertAmt(amount);
}
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-600"
          
      >
      <h1
      className="text-center mt-5 text-primary text-9xl text-gray-50">Currency Converter</h1>
          <div className="w-full">
              <div className="w-full max-w-3xl mx-auto border border-gray-60 mb-40 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange={(amt)=>{setAmount(amt)}}
                              currencyOptions={options}
                              selectCurrency={from}
                              onCurrencyChange={(curr)=>setFrom(curr)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedamt}
                             
                              currencyOptions={options}
                              selectCurrency={to}
                              onCurrencyChange={(curr)=>setTo(curr)}

                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
                    }

export default App
