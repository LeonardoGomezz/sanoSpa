import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface Props {
  lang: string
}

export const SelectLanguage = ({lang}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)
  // const [selectedLanguage, setSelectedLanguage] = useState('')
  const router = useRouter()
  const { pathname, asPath, query } = router

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale })
    setIsOpen(false) 
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative inline-block text-left">
      <div className="" ref={divRef}>
        <div className={' transition-colors hover:bg-[#b4b4b4] text-white hover:text-black  px-4 xl:px-8 py-2'} onClick={toggleDropdown} style={{cursor: 'pointer'}}>
          <p className={'flex gap-1 text-base font-medium items-center  underline-offset-8 '}>
            {
              lang === 'es' ? 'Español' : 'Ingles' 
            }
            {!isOpen ?
              <IoIosArrowDown />
              :
              <IoIosArrowUp />
            }
          </p>
        </div>
        {isOpen && (
          <div className="absolute left-[-10px] z-[999] w-32 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg">
            <div className="py-1">
              {lang === 'es' ?
                <a
                  onClick={() => changeLanguage('en')}
                  // href="#"
                  className="block px-4 py-2 text-base text-black hover:bg-gray-100 cursor-pointer"
                  title='english'
                >
                  Ingles
                </a>
                :
                <a
                  onClick={() => changeLanguage('es')}
                  // href="#"
                  className="block px-4 py-2 text-base  text-black hover:bg-gray-100 cursor-pointer"
                  title='spanish'
                >
                  Español
                </a>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
