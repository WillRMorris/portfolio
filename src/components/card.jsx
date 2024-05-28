
//card compontent
function Card( { header, body, image, children}) {



    return (

        <div className={`w-card-wrapper my-3 mx-1 row flex-nowrap ${header.direction== 'center' ? 'align-items-center justify-content-between' : ''}`}>
            {header.direction == 'hang-right' ? (
                <div className= {`col-4`}>
                    {children}
                </div>
            ) : (
                '')
            }
            <div className={`w-card card g-0 shadow ${header.direction == 'full' ? 'col-12' :'col-8' }`}>
                <h4 className={`w-card-header card-header ${header.style ?? ''}`}> {header.content}</h4>
        
                {image ? (
                    <img src={image.source} alt={image.alt} className={` p-1 ${image.style ?? ''}`}></img>
                ) : (
                    <br />
                )}
                <p className={` w-card-body p-3 m-2  ${body.style ?? ''}`}>
                    {body.content ?? ''}
                </p>
            </div>
            {header.direction == 'hang-left' ? (
                <div className= {`col-4`}>
                    {[children]?? ''}
                </div>
            ) : (
                '')
            }
        </div>
    )
}

export default Card;