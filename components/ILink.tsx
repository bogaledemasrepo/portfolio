import Link from 'next/link'
import React from 'react'

const ILink = ({name,link,className}:{name:string,link:string,className:string}) => {
  return (
    <li className={`py-2 border-1 text-sky-500 ${className} hover:bg-slate-500`}>
      <Link href={link}>{name}</Link>
    </li>
  )
}

export default ILink
