
function Image ({url, id, img}) {
    function findStyle(){
        if( img == id){
            return 'img-active';
        } else if(id == img-1 || img-1<0){
            return 'img-passive'
        } else{
            return '';
        }
    }


    return (
        <div className={`img-default ${findStyle()}`} style={{zIndex: id, backgroundImage: `url(${url})`}}></div>
    )
}
export default Image;