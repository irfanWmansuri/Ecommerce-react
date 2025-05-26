import { useState, useEffect } from "react"

export function Maths() {
    const [isvalue, setIsvalue] = useState('')
    const [text, setText] = useState('')

    const AddText = ()=> {
        setText(isvalue)
    }
    
    useEffect(() => {
        if(isvalue === ''){
            setText('')
            
        }
    }, [isvalue])


  return (
       <>
        <div className="space-y-4 w-1/3 ">
            <div>
                <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Coupen Code </label>
                <input value={isvalue} onChange={e => setIsvalue(e.target.value)} type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
            </div>
            <button type="button" onClick={AddText} className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-400">Apply Code</button>
            <p>{text}</p>
        </div>
       </>
  )
}
