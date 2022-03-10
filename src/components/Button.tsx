
interface ButtonProps{
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    buttonOnclick?: () => void
}


export default function Button(props: ButtonProps){

    const buttonColor = props.color ?? 'gray'

    return(
        <button 
        onClick={props.buttonOnclick}
        className={`
            bg-gradient-to-r from-${buttonColor}-400 to-${buttonColor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}