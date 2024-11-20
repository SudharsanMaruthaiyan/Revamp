import { BadgeCheck, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkedinCard = ({image,name,desc,cdimage,domain}) => {
  return (
    <>
        <Link>
            <div className=' rounded-md p-3' id='shadow'>
                <div className=' flex items-center justify-between' >
                    <div className=' flex items-center gap-2'>
                        <img className=' w-12 rounded-full' src={image} alt="" />
                        <div className=' flex flex-col'>
                            <h1 className='flex gap-2 items-center font-bold font-[poppins] '>{name}<BadgeCheck className=' w-4 stroke-[#3DACE6]'  /></h1>
                            <p className=' font-[poppins] text-slate-600 text-sm'>{domain}</p>
                        </div>
                    </div>
                    <Twitter className=' stroke-[#3DACE6] fill-[#3DACE6] w-5'/>
                </div>
                <p className=' font-[poppins] text-sm py-3'>{desc}</p>
                <img className=' rounded-lg' src={cdimage} alt="" />

            </div>
        </Link>
    </>
  )
}

export default LinkedinCard