import { useState } from 'react'

const useSelect = () => {
    const [category, setCategory] = useState("Most votes");

    const handleClickCategory = (e) => {
        setCategory(e.target.id)
    }

  return {
    category,
    handleClickCategory,
  }
}

export default useSelect