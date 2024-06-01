

function List( {cardStyle, content, children}){
    return(
        <div className={`row justify-content-center my-1 mx-2 list-row`}>
        <div className={`card shadow rounded w-card skill-card ${cardStyle}`}>
        <h2 className={`card-header`}> {content}</h2>
        {children}
    </div>
        </div>
    )
}

export default List;