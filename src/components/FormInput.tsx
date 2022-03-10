
interface FormInputProps {
    text: string
    inputType?: 'text' | 'number'
    inputValue: any
    inputReadyOnly?: boolean
    inputOnChange?: (value: any) => void
    className?: string
}

export default function FormInput(props: FormInputProps) {




    return (
        <div className={`
        flex flex-col ${props.className}
        `}>
            <label htmlFor="" className="mb-2">
                {props.text}
            </label>

            <input type={props.inputType ?? 'text'}
                value={props.inputValue}
                readOnly={props.inputReadyOnly ?? false}
                onChange={e => props.inputOnChange?.(e.target.value)}
                className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-50
                px-4 py-2 
                ${props.inputReadyOnly ? '' : 'focus:bg-white'}
            `} />

        </div>
    )
}