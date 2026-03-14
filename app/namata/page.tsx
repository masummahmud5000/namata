'use client'

import { useState, useEffect } from "react";
function toBanglaNumber(num: number | string){
    const en = '0123456789'
    const bn = '০১২৩৪৫৬৭৮৯'

    return num
    .toString()
    .split('')
    .map(d=> en.includes(d) ? bn[en.indexOf(d)]:d)
    .join('');
}

const Namata = () => {
    const [number,setNumber] = useState<number>(0)
    const [table,setTable] = useState<string[]>([])

    const generate = () => {
        let result = []
        for (let i = 1; i <= 10; i++){
            // console.log()
            result.push(`${toBanglaNumber(number)} x ${toBanglaNumber(i)} = ${toBanglaNumber((number) * i)}`);
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
                        table.map((item, index)=> <h1 className="text-xl font-bold bg-amber-300 hover:bg-blue-500 py-1 hover:px-5 hover:text-3xl px-15" key={index}>{item}</h1>)
                    }
                </span>
            </div>
        </main>
    )
}
export default Namata;