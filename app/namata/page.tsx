'use client'

import { useState, useEffect } from "react";

const Namata = () => {
    const [number,setNumber] = useState<number>(0)
    const [table,setTable] = useState<string[]>([])

    const generate = () => {
        let result = []
        for (let i = 1; i <= 10; i++){
            // console.log()
            result.push(`${number} x ${i} = ${(number) * i}`);
        }
        setTable(result)
    };
    console.log(table)
    
    return(
        <main>
            <div className="flex justify-center items-center py-2 bg-amber-200">
                <input className="p-2 m-2 border rounded-2xl" onChange={(e)=>setNumber(Number(e.target.value))} required type="number" placeholder="Enter Your Digit"/>
                <button onClick={generate} className="bg-green-600 text-white py-1 px-7 font-bold cursor-pointer hover:bg-green-700 text-xl rounded-xl">Run</button>
            </div>
            <div className="flex flex-col pt-10 items-center">
                <span className="flex flex-col gap-3 border-3 bg-amber-100 rounded-lg">
                    {
                        table.map((item, index)=> <tr className="text-xl font-bold bg-amber-300 py-1 px-15" key={index}>{item}</tr>)
                    }
                </span>
            </div>
        </main>
    )
}
export default Namata;