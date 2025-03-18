import React from 'react'

const AnnounceCard = ({header,text,date}) => {
  return (
    <div className='w-full py-[30px]'>
      <p className='sm:text-[16px] md:text-[20px] font-[rale-semibold] mb-[11px] '>{header}</p>
      <p style={{letterSpacing:"1px"}} className='sm:text-[12px] md:text-[16px] font-[rale-regular] mb-[11px] text-[#5996C5] '>{date}</p>
      <p className='sm:text-[14px] md:text-[16px] font-[rale-regular] text-[#8A8A8A] line-clamp-2'>{text}</p>
    </div>
  )
}

export default AnnounceCard
