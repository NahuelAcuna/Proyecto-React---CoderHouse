import './texts.css'


function Text ( {firstText, secondText, firstTitle, secondTitle} ) {
    return (
        <div>
            <h1 className="firstTitle">{firstTitle}</h1>
            <h1 className="secondTitle">{secondTitle}</h1>
            <p className="firstText">{firstText}</p>
            <p className="secondText">{secondText}</p>
        </div>
    )
    
}

export default Text