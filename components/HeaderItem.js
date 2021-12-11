
/**
 * props from above (Header) are pulled in to be used as an argument in this component
 * use destructuring to by adding curly braces which allow you to select the 'keys' (Icon, title) 
 * from inside the 'props' object rather than putting 'props' as an argument in component
 */
const HeaderItem = ({ Icon, title }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 uppercase tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
