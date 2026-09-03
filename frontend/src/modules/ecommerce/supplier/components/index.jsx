import React, { useState } from 'react'
import { Header } from '../../../../shared/ui/Header'
import { useApiMutation } from '../../../../shared/custome-hook/useApiMutation'
import { getAuthHeader } from "../../../../shared/services/api.services"
import { useApiQuery } from '../../../../shared/custome-hook/useApiQuery'
import { supplierData } from '../constant/supplier.contants'
import CreateSupplier from './CreateSupplier'
import FetchSupplier from './FetchSupplier'
import { Button } from '../../../../shared/ui/Button'

const Supplier = () => {

    const [suppilerFields, setSuppilerFields] = useState({ name: "", email: "", phone: "", address: "" })
    const [isEditId, setIsEditId] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    // using reactTankStack
    const { isPending: isCreatePanding, error: createError, mutate: createMutate } = useApiMutation("/supplier", "POST", ["supplier"], getAuthHeader)
    const { isPanding, data, error } = useApiQuery(["supplier"], "/supplier", getAuthHeader)
    const { isPanding: isEditPending, error: editError, mutate: editMutate } = useApiMutation(`/supplier`, "PUT", ["supplier"], getAuthHeader)
    const { isPanding: isDeletPending, error: deleteError, mutate: deleteMutate } = useApiMutation(`/supplier`, "DELETE", ["supplier"], getAuthHeader)

    const { header, supplierBtn, title, fields, btnFields, listOfCategory } = supplierData
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
            editMutate({ body: suppilerFields, urlParams: `/${isEditId}` })
        } else {
            if(suppilerFields?.name?.trim()){
                createMutate({ body: suppilerFields }) 
            }
        }
        setSuppilerFields("")
    }

    const onCancle = () => {
        setSuppilerFields({ name: "", email: "", phone: "", address: "" })
        setIsEditId(null)
        setIsOpen(false)
    }

    const onEdit = (row) => {
        const [id, name, email, phone, address] = row
        setIsEditId(id)
        setIsOpen(true)
        setSuppilerFields({ name: name, email: email, phone: phone, address: address })

    }

    const onDelete = (row) => {
        const id = row[0]
        deleteMutate({
            urlParams: `/${id}`
        })

    }

    return (
        <div className='relative justify-center items-center h-screen'>
            <div className='flex justify-around'>
                <Header text={header} />
                <Button type={supplierBtn?.btnType} text={supplierBtn?.btnText} onClick={() => setIsOpen(prev => !prev)} className="btn btn-success" />
            </div>
            <CreateSupplier
                suppilerFields={suppilerFields}
                setSuppilerFields={setSuppilerFields}
                isCreatePanding={isCreatePanding}
                onSubmit={handleSubmit}
                onCancle={onCancle}
                isEditId={isEditId}
                isEditPending={isEditPending}
                createError={createError}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <FetchSupplier
                suppilerFields={suppilerFields}
                isPanding={isPanding}
                data={data}
                error={error}
                onDelete={onDelete}
                onEdit={onEdit}
                isEditId={isEditId}
                isDeletPending={isDeletPending}
            />
        </div>
    )
}

export default Supplier