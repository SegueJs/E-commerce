import { ChangeEvent, useState } from "react"

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState)

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFormValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  return {
    formValues,
    handleInputChange
  }
}

export default useForm
