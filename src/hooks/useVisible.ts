import { useState } from "react";

export default function useVisible(){
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const setTable = () => setVisible('table')
    const setForm = () => setVisible('form')

    return {
        visibleForm: visible === 'form', 
        visibleTable: visible === 'table',
        setTable,
        setForm
    }
}