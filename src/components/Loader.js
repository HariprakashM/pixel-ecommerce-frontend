// import React from "react";

// export default function Loader() {
//   return (
//     <div className='mt-5'>
//       <div className="spinner-border mt-5" role="status" style={{width:'100px' , height:'100px'}}>
//         <span className="sr-only">Loading...</span>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react'
import SyncLoader from "react-spinners/SyncLoader";
function Loader() {
    let [loading, setLoading] = useState(true);

    return (
        <div className='loader'>
        <div className="sweet-loading">


            <SyncLoader color='#000' loading={loading} css='' size={30}/>
        </div></div>
    )
}

export default Loader