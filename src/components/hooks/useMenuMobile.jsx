import { useState } from 'react'

const useMenuMobile = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        if(!menu) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

  return {
    handleClick,
    menu
  }
}

export default useMenuMobile