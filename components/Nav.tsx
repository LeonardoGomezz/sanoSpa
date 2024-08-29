import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { SelectLanguage } from './utilsComponents/SelectLanguage'
import { TbMenu2 } from 'react-icons/tb'

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const route = useRouter()
  const currentRoute = route.asPath

  const { t, lang } = useTranslation('layout')

  const handleShowMenu = () =>{
    setShowMenu(!showMenu)
  }

  return (
    <div className={`reltaive font-Poppins ${currentRoute === '/' ? 'text-white' : 'text-black'}`}>
      <div className='bg-[#DECAAB] font-Poppins text-center text-[#7A5D4B] text-base py-2'>Free shipping on all orders</div>
      <nav className={`${currentRoute === '/' ? 'bg-transparent' : 'bg-white'} absolute z-10 top-10 w-full py-4 
      flex justify-between px-8 items-center`}>
        <img src="/images/logo.png" alt="logo" title='logo' />
        <div className='hidden lg:block'>
          <ul className='flex gap-8 text-base'>
            <li>{t('navbar.option1')}</li>
            <li>{t('navbar.option2')}</li>
            <li>{t('navbar.option3')}</li>
            <li>{t('navbar.option4')}</li>
            <li>{t('navbar.option5')}</li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <SelectLanguage lang={lang}/>
        </div>
        <div className='lg:hidden'>
          <button onClick={handleShowMenu}><TbMenu2 size={30} color={`${currentRoute === '/' ? '#fdfdfd' : '#000000'}`}/></button>
        </div>
      </nav>
      <div className={`w-full bg-white text-black flex flex-col gap-4 items-center transition-all duration-700 absolute z-10 top-[135px] lg:hidden
         ${showMenu === true ? 'h-[300px] overflow-hidden py-4 top-10' : 'h-0 overflow-hidden py-0'}`}
      >
        <div className='lg:hidden'>
          <ul className='flex flex-col gap-4 text-base mt-4'>
            <li>{t('navbar.option1')}</li>
            <li>{t('navbar.option2')}</li>
            <li>{t('navbar.option3')}</li>
            <li>{t('navbar.option4')}</li>
            <li>{t('navbar.option5')}</li>
          </ul>
        </div>
        <div className='lg:hidden'>
          <SelectLanguage lang={lang}/>
        </div>
      </div>
    </div>
  )
}
