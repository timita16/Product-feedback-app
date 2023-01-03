import { useEffect, useState } from 'react'

const useMenuMobile = (category) => {
    const [menu, setMenu] = useState(false);
    
    //cade vez que category cambie, cerra el menu
    useEffect(() => {
      setMenu(false)
    }, [category])
    
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