import React, { useState } from 'react'
import CreateCategory from './CreateCategory'
import { Header } from '../../../../shared/ui/Header'
import FetchCategory from './FetchCategory'
import { useApiMutation } from '../../../../shared/custome-hook/useApiMutation'
import { getAuthHeader } from "../../../../shared/services/api.services"
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { categoryData } from '../contstant/category.constant'

const Category = () => {

    const [categoryFields, setCategoryFields] = useState({ name: "", icon: "" })
    const [isEditId, setIsEditId] = useState(null)

    // using reactTankStack
    const { isPending: isCreatePanding, error: createError, mutate: createMutate } = useApiMutation("/category", "POST", ["category"], getAuthHeader)
    const { isPanding, data, error } = useApiQuery(["category"], "/category", getAuthHeader)
    const { isPanding: isEditPending, error: editError, mutate: editMutate } = useApiMutation(`/category`, "PUT", ["category"], getAuthHeader)
    const { isPanding: isDeletPending, error: deleteError, mutate: deleteMutate } = useApiMutation(`/category`, "DELETE", ["category"], getAuthHeader)

    const { header, title, fields, btnFields, listOfCategory } = categoryData
    // const { listOfCategory } = categoryData

    // using custome hook
    // const {loading, data, error, creatApi} = useCreateApi("/category", categoryFields)
    // const {loading, data, error, getApi} = useGetApi("/category", "")

    // useEffect(() => {
    //   getApi()
    // }, [categoryFields])

    const handleSubmit = (e) => {
        e.preventDefault()
        // creatApi()
        if (isEditId !== null) {
            editMutate({ body: categoryFields, urlParams: `/${isEditId}` })
        } else {
            if(categoryFields?.name?.trim()){
                createMutate({ body: categoryFields })
            }
        }
        setCategoryFields("")
    }

    const onCancle = () => {
        setCategoryFields({ name: "", icon: "" })
        setIsEditId(null)
    }

    const onEdit = (row) => {
        const [id, name, icon] = row
        setIsEditId(id)
        setCategoryFields({ name: name, icon: icon })

    }

    const onDelete = (row) => {
        const id = row[0]
        deleteMutate({
            urlParams: `/${id}`
        })

    }

    return (
        <div>
            <Header text={header} />
            <div className='flex gap-5'>
                <div className='flex-1'>
                    <CreateCategory
                        categoryFields={categoryFields}
                        setCategoryFields={setCategoryFields}
                        isCreatePanding={isCreatePanding}
                        onSubmit={handleSubmit}
                        onCancle={onCancle}
                        isEditId={isEditId}
                        isEditPending={isEditPending}
                        createError={createError}
                    />
                </div>
                <div className='flex-1'>
                    <FetchCategory
                        categoryFields={categoryFields}
                        isPanding={isPanding}
                        data={data}
                        error={error}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        isEditId={isEditId}
                        isDeletPending={isDeletPending}
                    />
                </div>
            </div>
        </div>
    )
}

export default Category