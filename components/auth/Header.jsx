import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Header = ({ heading, paragraph, linkName,linkUrl="#" }) => {
  return (
    <div className="mb-10">
    <div className="flex justify-center">
        <Image  alt="gambar" width={56} height={56} src="vercel.svg"/>
    </div>
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600">
    {paragraph} {' '}
    <Link href={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
        {linkName}
    </Link>
    </p>
</div>
  )
}

export default Header