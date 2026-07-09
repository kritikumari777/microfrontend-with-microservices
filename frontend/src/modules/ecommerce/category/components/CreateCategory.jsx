import React, { useState } from 'react'
import { FormComp } from '../../../../shared/ui/Form'
import { categoryData } from '../contstant/category.constant'
import { onChangeObj } from '../../../../shared/action/EventAct'
import { Header } from '../../../../shared/ui/Header'
import { useCreateApi } from '../../../../shared/custome-hook/useEcommerseApi'
import FetchCategory from './FetchCategory'
import { Table } from '../../../../shared/ui/Table'
import { useApiMutation } from '../../../../shared/custome-hook/useApiMutation'
import {ToastContainer} from "react-toastify"


const CreateCategory = () => {

  const [categoryFields, setCategoryFields] = useState({ name: "", icon: "" })
  // const {loading, data, error, creatApi} = useCreateApi("/category", categoryFields)
  const { data, isLoading, isError, error, mutate } = useApiMutation("/category", "POST", ["category"])


  const { header, title, fields, btnFields } = categoryData

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Sucessfull")
    // creatApi()
    mutate(categoryFields)
    setCategoryFields("")
  }

  if(isLoading) return <p>Loading ...</p>

  return (
    <div>
      <Header text={header} />
      <div className='flex gap-5'>
        <div className='flex-1'>
          <h5>{title}</h5>
          <FormComp data={fields} formData={categoryFields}
            btnType={btnFields?.btnType} btnText={btnFields?.btnText}
            onChange={(e) => onChangeObj(e, setCategoryFields)}
            onSubmit={handleSubmit} />
            <ToastContainer position="top-right" autoClose={3000} />
        </div>

        <div className='flex-1'>
          <FetchCategory categoryFields={categoryFields} />
        </div>
      </div>
    </div>
  )
}

export default CreateCategory