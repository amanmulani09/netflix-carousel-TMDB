const Loader = ()=>{
    // alert('loader')
    const loaderStyle = {
        position: 'absolute',
        top:'50%',
         left :'48%' ,
         transform:"translate(-50%,-50%) scale(1)"
    }
    return(
       <img alt="loader" src="/loader.gif" width={250} height={250} style={loaderStyle}/>
    )
}

export default Loader;