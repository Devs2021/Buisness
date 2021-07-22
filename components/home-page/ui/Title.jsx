

const Title = ({title = "", question,text}) => {
    return (
        <div className="max-w-screen-md mx-auto text-center mb-8">
            <h2 className="font-secondary text-xl text-primary capitalize mb-4">
                {title}
            </h2>
            <h3 className="font-secondary text-very-dark-blue font-semibold mb-2">
                {question}
            </h3>
            <p className="font-secondary font-light text-sm text-black">
                {text}
            </p>
            
        </div>
    )
}

export default Title
