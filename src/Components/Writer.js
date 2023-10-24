import React from 'react'
import persion from "../Components/R.jpg"
const Writer = () => {
  return (
    <div className='smallCard-containeer'>
    <div className='smallcard-parent'>
     <div>
     <div className='smallcard-persion-img bg' style={{backgroundImage:`url(${persion})`}}>

</div>
     </div>
     <div className='smallcard-userdata write-data '>
     <div className='write-name'>WRITTEN BY </div>
      <div className='h5'>Upasana Asati</div>
    <div>22 October 2023</div>
    
     </div>
    </div>
  
  </div>
  )
}

export default Writer
