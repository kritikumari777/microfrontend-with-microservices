import React, { useState } from 'react'
import { Header } from '../../../../shared/ui/Header'
import { FormComp } from '../../../../shared/ui/Form'
import { onChangeObj } from '../../../../shared/action/EventAct'
import { productData } from "../constants/products.contants"
import { useCreateApi } from '../../../../shared/custome-hook/useEcommerseApi'
import FetchProducts from './FetchProducts'

const CreateProduct = () => {

  const [productFields, setProductFields] = useState({ name: "", type: "", price: "", discraption: "" })
  const {loading, data, error, createApi} = useCreateApi("/product", productFields)
  const { header, title, fields, btnFields } = productData
  
  const handleSubmit = () => {
    console.log("Sucessfull")
    // createApi()
  }
  return (
    <div>
      <Header text={header}/>
      <div className='flex'>
        <div className='flex-1 gap-5'>
          <h3>{title}</h3>
          <FormComp data={fields} value={productFields?.[fields?.name]}
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