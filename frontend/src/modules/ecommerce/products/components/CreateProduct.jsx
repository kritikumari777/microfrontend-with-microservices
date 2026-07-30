import React, { useState } from 'react'
import { Header } from '../../../../shared/ui/Header'
import { FormComp } from '../../../../shared/ui/Form'
import { onChangeObj } from '../../../../shared/action/EventAct'
import { productData } from "../constants/products.contants"
import { useCreateApi } from '../../../../shared/custome-hook/useEcommerseApi'
import FetchProducts from './FetchProducts'
import { useApiMutation } from '../../../../shared/custome-hook/useApiMutation'
import {getAuthHeader} from "../../../../shared/services/api.services.js"

const CreateProduct = () => {

  const [productFields, setProductFields] = useState({ title: "", categoryId: "", price: "", description: "" })
  // const {loading, data, error, createApi, mutate} = useCreateApi("/product", productFields)
  const {data, isLoading, isError, error, mutate} = useApiMutation("/product", "POST", ['product'], getAuthHeader)
  const { header, title, fields, btnFields } = productData
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // createApi()
    mutate(productFields)
    setProductFields("")
  }

  if(isLoading) return <p>Loading....</p>
  if(isError) return <p>Somthing Went Wrong - {error}</p>

  return (
    <div>
      <Header text={header}/>
      <div className='flex'>
        <div className='flex-1 gap-5'>
          <h3>{title}</h3>
          <FormComp data={fields} formData={productFields}
            btnType={btnFields?.btnType} btnText={btnFields?.btnText}
            onChange={(e) => onChangeObj(e, setProductFields)}
            onSubmit={handleSubmit} />
        </div>
        <div className='flex-1'>
          <FetchProducts/>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct