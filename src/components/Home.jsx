import { useState } from "react"
import '../styles/style.css'

export default function Home() {
    const [number, setNumber] = useState(0);
    const [numberOfQuarters, setNumberOfQuarters] = useState(0);
    const [numberOfDimes, setNumberOfDimes] = useState(0);
    const [numberOfNickels, setNumberOfNickels] = useState(0);
    const [numberOfPennies, setNumberOfPennies] = useState(0);


    const convert = (event) => {
        event.preventDefault();
        setNumberOfQuarters(0)
        setNumberOfDimes(0)
        setNumberOfNickels(0)
        setNumberOfPennies(0)

        const num = Math.floor(number * 100);
        console.log(num);
        let remainingCents = num;

        //check if number is divisble by 25
        if (remainingCents % 25 !== remainingCents) {
            let numQuarters = Math.floor(remainingCents / 25);
            remainingCents = remainingCents - (numQuarters * 25);
            setNumberOfQuarters(numQuarters);

            if (remainingCents === 0) {
                return;
            }
        }

        if (remainingCents % 10 !== remainingCents) {
            //number of quarters have been found
            let numDimes = Math.floor(remainingCents / 10);
            remainingCents = remainingCents - (numDimes * 10);
            setNumberOfDimes(numDimes);

            if (remainingCents === 0) {
                return;
            }
        }

        if (remainingCents % 5 !== remainingCents) {
            //number of quarters have been found
            let numNickels = Math.floor(remainingCents / 5);
            remainingCents = remainingCents - (numNickels * 5);
            setNumberOfNickels(numNickels);

            if (remainingCents === 0) {
                return;
            }
        }

        if (remainingCents % 1 !== remainingCents) {
            //number of quarters have been found
            let numPennies = Math.round(remainingCents / 1);
            remainingCents = remainingCents - (numPennies * 1);
            setNumberOfPennies(numPennies);

            if (remainingCents === 0) {
                return;
            }
        }

    }


    return (
        <>
            <div className="container">
                <header>
                    <h1>Dollar to Cents</h1>
                </header>
                <main>
                    <div className="form-container">
                        <form onSubmit={convert}>
                            <div className="input-container">
                                <label htmlFor="number">Dollar:</label>
                                <input min="0.01"step="any" name="number" value= {number} type="number" onChange={(event) => setNumber(event.target.value)} />
                            </div>
                            <div className="input-container">
                                <label>Number Of Quarters:</label>
                                <input value={numberOfQuarters} type="number" disabled />
                            </div>
                            <div className="input-container">
                                <label>Number Of Dimes:</label>
                                <input value={numberOfDimes} type="number" disabled />
                            </div>
                            <div className="input-container">
                                <label>Number Of Nickels:</label>
                                <input value={numberOfNickels} type="number" disabled />
                            </div>
                            <div className="input-container">
                                <label>Number Of Pennies:</label>
                                <input value={numberOfPennies} type="number" disabled />
                            </div>
                            <button type="submit">Convert</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}