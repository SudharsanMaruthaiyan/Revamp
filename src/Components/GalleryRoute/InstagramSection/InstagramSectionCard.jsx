import React from 'react'

const InstagramSectionCard = (props) => {
  return (
    <div className='w-[100%] grid grid-cols-1'>
      <div className='flex justify-between'>
        <div>
            <div>
                <p>{props.posttitle}</p>
            </div>
            <div>
                <p>{props.instaid}</p>
            </div>
        </div>
        <div>
            
        </div>

      </div>
    </div>
  )
}

export default InstagramSectionCard
