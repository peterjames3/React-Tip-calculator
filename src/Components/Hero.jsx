import React, { useState, useId } from "react";
import DollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const Hero = () => {
  const [error, setError] = useState("");
  const [billError, setBillError] = useState("");
  const [bill, setBill] = useState(145.55);
  const [tipPercent, setTipPercent] = useState(0);
  const [numPeople, setNumPeople] = useState(5); 
  const [customTip, setCustomTip] = useState("Custom");

  const id = useId();
  let timer;

  const handleBillInput = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value <= 0) {
      setBillError("Can't be zero");
      setBill(0);
    } else {
      setBill(value);
      setBillError("");
    }
  };

  const handleCustomTipFocus = (e) => {
    if (e.target.value === "Custom") {
      setCustomTip("");
    }
  };

  const handleCustomTipBlur = (e) => {
    if (e.target.value.trim() === "") {
      setCustomTip("Custom");
      setTipPercent(0); 
    }
  };

  const handleCustomTipChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value <= 0) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setCustomTip("Custom");
      }, 300);
    } else {
      setCustomTip(value.toString());
      setTipPercent(value); 
    }
  };

  const handleTipClick = (percent) => {
    setTipPercent(percent);
    setCustomTip(""); 
  };

  const handlePersonInput = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
      setError("Can't be zero");
      setNumPeople(5); 
    } else {
      setNumPeople(value);
      setError("");
    }
  };

  const calculateTipPerPerson = () => {
    if (numPeople > 0 && bill > 0) {
      const tipAmount = (bill * (tipPercent / 100)) / numPeople;
      return tipAmount.toFixed(2);
    }
    return "0.00";
  };

  const calculateTotalPerPerson = () => {
    if (numPeople > 0 && bill > 0) {
      const tipAmount = parseFloat(calculateTipPerPerson());
      const total = (bill / numPeople) + tipAmount;
      return total.toFixed(2);
    }
    return "0.00";
  };

  const tipPerPerson = calculateTipPerPerson();
  const totalPerPerson = calculateTotalPerPerson();

  const reset = () => {
    setBill(0);
    setTipPercent(0);
    setNumPeople(0);
    setCustomTip("Custom");
    setError("");
    setBillError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full h-dvh sm:h-screen bg-LightGrayishCyab flex flex-col items-center justify-center font-SpaceMono space-y-9">
      <h1 className=" uppercase  tracking-[0.09em] text-Base text-center font-[700] text-GrayishCyan">
        Spli <br></br>tter
      </h1>
      <div className="container max-w-[900px] bg-white flex flex-col p-[1.6rem] xs:flex-row gap-3 rounded-3xl shadow-sm shadow-GrayishCyan">
        <div className=" w-full ss:full sm:w-1/2 flex flex-col space-y-4 py-4 px-2">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <nav className="flex justify-between items-center">
              <label htmlFor="bill" className="font-medium text-xl">
                Bill
              </label>
              <p className="text-red-500 font-semibold font-SpaceMono">
                {billError}
              </p>
            </nav>

            <div className="flex items-center justify-between bg-veryLightGrayishCyan  font-SpaceMono py-2 px-2 rounded-[0.3rem] hover:border hover:border-Strongcyan hover:cursor-pointer transition-all delay-300">
              <img src={DollarIcon} alt="dollar img" className="size-4" />
              <input
                type="number"
                name="billinput"
                id="bill"
                onInput={handleBillInput}
                value={bill ?? ""}
                min="0"
                className="outline-none w-full text-right pr-2 font-SpaceMono text-Base bg-veryLightGrayishCyan "
              />
            </div>
            <label
              htmlFor="tips"
              className="font-SpaceMono text-Base font-medium py-3"
            >
              Select Tip %
            </label>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <>
                {[5, 10, 15, 25, 50].map((percent) => (
                  <button
                    key={percent}
                    className="rounded-lg text-center text-2xl font-bold bg-VerydarkCyan text-white py-3 hover:text-DarkGrayishCyan hover:cursor-pointer hover:bg-LightGrayishCyan transition-all delay-300"
                    onClick={() => handleTipClick(percent)}
                  >
                    {percent}%
                  </button>
                ))}

                <input
                  type="text"
                  value={customTip}
                  onChange={handleCustomTipChange}
                  onFocus={handleCustomTipFocus}
                  onBlur={handleCustomTipBlur}
                  name="customTip"
                  id={id + "customTip"}
                  className="bg-transparent font-semibold pr-2 outline-none text-DarkGrayishCyan text-end bg-veryLightGrayishCyan text-2xl font-SpaceMono hover:border hover:border-Strongcyan transition-all delay-300 rounded-lg"
                 
                  
                />
              </>
            </div>

            <nav className="flex justify-between items-center">
              <label
                htmlFor="noindividual"
                className="font-medium text-xl py-2"
              >
                Number of People
              </label>
              <p className="text-red-500 font-semibold font-SpaceMono">
                {error}
              </p>
            </nav>

            <div className="flex items-center justify-between bg-veryLightGrayishCyan  font-SpaceMono py-2 px-2 rounded-[0.3rem] hover:border hover:border-Strongcyan hover:cursor-pointer transition-all delay-300">
              <img src={personIcon} alt="dollar img" className="size-4" />
              <input
                type="number"
                name="noindividual"
                id="noindividual"
                onInput={handlePersonInput}
                value={numPeople ?? ""}
                className="outline-none w-full text-right pr-2 font-SpaceMono text-Base bg-veryLightGrayishCyan "
              />
            </div>
          </form>
        </div>

        <div className="w-full ss:full sm:w-1/2 rounded-[.9rem]  py-12 px-6 space-y-4 bg-VerydarkCyan">
          <div className="flex justify-between px-2 items-center">
            <h3 className="font-semibold text-xl text-LightGrayishCyab">
              Tip Amount <br></br>{" "}
              <span className="tracking-[0.07em] text-[0.9rem] font-bold text-GrayishCyan">
                /person
              </span>
            </h3>
            <h4 className="text-4xl font-bold tracking-[0.2em] text-Strongcyan">
              {tipPerPerson}
            </h4>
          </div>
          <div className="flex justify-between px-2 items-center pb-[7rem]">
            <h3 className="font-semibold text-xl text-LightGrayishCyab">
              Total <br></br>{" "}
              <span className="tracking-[0.07em] text-[0.9rem] text-GrayishCyan font-bold">
                /person
              </span>
            </h3>
            <h4 className="text-4xl font-bold tracking-[0.2em] text-Strongcyan">
              {totalPerPerson}
            </h4>
          </div>
          <button
            className="mb-3 w-full rounded-[0.2rem] font-[700] py-2 text-Base cursor-pointer bg-Strongcyan hover:bg-LightGrayishCyab transition-all delay-300"
            type="button"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
