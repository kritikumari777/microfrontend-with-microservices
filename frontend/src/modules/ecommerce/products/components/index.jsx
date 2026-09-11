import React, { useState } from 'react'
import { Header } from '../../../../shared/ui/Header'
import { productData } from "../constants/products.contants"
import { useCreateApi } from '../../../../shared/custome-hook/useEcommerseApi'
import FetchProducts from './FetchProducts'
import { useApiMutation } from '../../../../shared/custome-hook/useApiMutation'
import { getAuthHeader } from "../../../../shared/services/api.services.js"
import CreateProduct from './CreateProduct.jsx'
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery.js'
import { Button } from '../../../../shared/ui/Button.jsx'

const Product = () => {

    const [productFields, setProductFields] = useState({ title: "", categoryId: "", price: "", description: "" })
    const [isEditId, setIsEditId] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const { isPanding: isCreatePanding, isError: isCreateError, mutate: createMutate } = useApiMutation("/product", "POST", ['product'], getAuthHeader)
    const { isPanding: isEditPanding, isError: isEditError, mutate: editMutate } = useApiMutation("/product", "PUT", ['product'], getAuthHeader)
    const { isPanding: isDeletePanding, isError: isDeleteError, mutate: deleteMutate } = useApiMutation("/product", "DELETE", ['product'], getAuthHeader)
    const { isPanding, data, isError, error, } = useApiQuery(['product'], "/product", getAuthHeader)
    const { header, productBtn } = productData

    // const {loading, data, error, createApi, mutate} = useCreateApi("/product", productFields)
    // const { loading, data, error, getApi } = useGetApi("/category", "header")

    // useEffect(() => {
    //   getApi()
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        // createApi()
        if (isEditId) {
            editMutate({ body: productFields, urlParams: `/${isEditId}` })
        } else {
            if (productFields?.title?.trim()) {
                createMutate({ body: productFields })
            }
        }
        setProductFields("")
    }

    const onEdit = (row) => {
        const [id, title, description, price, category, categoryId] = row
        setIsEditId(id)
        setIsOpen(prev => !prev)
        setProductFields({ title: title, categoryId: categoryId, category: category, price: price, description: description })
    }

    const onDelete = (row) => {
        const id = row[0]
        deleteMutate({
            urlParams: `/${id}`
        })
    }

    const onCancle = () => {
        setProductFields({ title: "", categoryId: "", price: "", description: "" })
        setIsEditId(null)
        setIsOpen(prev => !prev)
    }

    return (
        <div>
            <div className='flex justify-around'>
                <Header text={header} />
                <Button type={productBtn?.btnType} text={productBtn?.btnText} onClick={() => setIsOpen(prev => !prev)} className="btn btn-success" />
            </div>
            <CreateProduct
                productFields={productFields}
                setProductFields={setProductFields}
                onSubmit={handleSubmit}
                isCreatePanding={isCreatePanding}
                isError={isEditId ? isEditError : isCreateError}
                isEditId={isEditId}
                isEditPanding={isEditPanding}
                onCancle={onCancle}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <FetchProducts
                data={data}
                isPanding={isPanding}
                isError={error}
                isDeletePanding={isDeletePanding}
                onEdit={onEdit}
                onDelete={onDelete}
                error={error}
            />
        </div>
    )
}

export default Product