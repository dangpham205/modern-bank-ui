import React from 'react'
import {logo} from '../assets'
import styles from '../style'
import {footerLinks, socialMedia} from '../constants'

const Footer = () => {
  return (
    <section className={` ${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
          <p className={` ${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-rol justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((item,index) => {
            return (
              <div key={index} className="flex flex-col ss:my-0 my-4 min-4-[150px]">
                <h4
                  className={`
                    font-poppins
                    font-medium
                    text-[18px]
                    leading-[27px]
                    text-white
                  `} 
                >
                  {item.title}
                </h4>
                <ul className='list-none mt-4'>
                  {item.links.map((link, index) => {
                    return ( 
                      <li 
                        key={index} 
                        className={`
                          font-poppins
                          font-normal
                          text-[16px]
                          leading-[24px]
                          text-dimWhite
                          hover:text-secondary
                          cursor-pointer
                          ${index !== item.links.length -1 ? 'mb-4' : 'mb-0'}
                        `}
                      >
                       {link.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

      </div>


      <div className='flex justify-between w-full pt-[30px] border-t-solid border-t border-t-sky-500'>
        <p
          className={`
            font-poppins
            font-normal
            text-center
            text-[18px]
            leading-[27px]
            text-white
          `} 
        >
          2021 HooBank. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6 gap-x-[36px]'>
          {socialMedia.map((item, index) => {
            return (
              <img
                key={index}
                src={item.icon}
                alt=""
                className={`w-[21px] h-[21px]`} 
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer