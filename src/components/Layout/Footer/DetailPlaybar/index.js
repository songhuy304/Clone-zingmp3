import React from 'react'
import { Favourite , More} from '~/assets'

export default function DetailPlaybar() {
  return (
    <div className="flex items-center gap-3">
          <div className="cursor-pointer w-16 h-16 overflow-hidden items-center justify-center rounded bg-white px-1 py-1 lg:flex">
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/fe50/5ec2/65f25ddb42b02ff5f197dbf96fc564dd?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OmuKbWOMY-A7Um36-SL~c2pNbyTawG-qrCi-hj1al~3~iualod503HFWPfpK8q-BX5ASTKaRwzz1HGjAOYNTSmR67EAkfFFuQgJE~u~LJRmQAzrV6er1TiyaAB6j1wcZX~V0plZjW5jjzvRiz4F9-G~XYOBbj1Jp2xV4sOIepHOBHPMjfz20i-~j9QWuKck0MYEnpzzhHMBZA~Oba9Mk~fKvqIBfVzL~yswnn-uQwTDoouBORygxS29KHb96TUfmM1Oj3ev-FbSUTL~9j1HWk0LXcLTs4YLhfdAh0d5oYkIHqc658SejUd4ivw27VL02DivDrYbFank~kLAInS6vsA__"
              }
              alt="123"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-[1px] md:gap-[3px] w-[190px]">
            <span className="line-clamp-1 cursor-pointer  text-sm font-semibold text-[#EBEBEB] hover:underline md:line-clamp-2">
              Toán từ kim cương
            </span>
            <a href='/' className="line-clamp-1 cursor-pointer text-gray-600 text-xs font-semibold hover:underline hover:opacity-100">
              Anna Joncie & Adam Suboi
            </a>
          </div>
          <div className='flex items-center justify-center'>
          <Favourite />
          <More />
          </div>
        </div>
  )
}
