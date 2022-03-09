
interface ButtonProps{
    color?: string
    className?: string
    children: any
}


export default function Button(props: ButtonProps){

    const colorBtn = props.color?? 'blue'

    return(
        <button className={`
            bg-gradient-to-r from-${colorBtn}-400 to-${colorBtn}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}