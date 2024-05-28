

function List( {content}){
    return(
        <div className={`row justify-content-center my-1 mx-2`}>
        <div className={`card shadow rounded w-card skill-card`}>
        <h2 className={`card-header`}> {content}</h2>
    </div>
        </div>
    )
}

export default List;