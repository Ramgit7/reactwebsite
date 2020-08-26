import React, { useState } from 'react';


function Background (){
    const [change , setChange]=useState(false);
    const back = {
        backgroundColor:"red"
    }
    const fun = () =>
            setChange(true);
    
    return(
        <>
        <div className="back" style= {(change == true) ? {backgroundColor:"green"} : back }>
        
        </div>
        <input type="button" className="button" value="Press" onClick={fun} />
        {(change == true) ? " Button clicked " : "" }

        </>
    )


}
export default Background;