import React, { useState } from 'react'
// Material UI
import { Alert } from '@mui/material'
// Libs Frtch
import { createCategoryQuestion, getCategoryQuestions } from 'Libs/fetch/category'
// React Form Hook
import { useForm } from 'react-hook-form'
// React Query
import { useMutation, useQueryClient } from 'react-query'
function CategoriesQuestion() {
  const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm({
    defaultValues: {
      name: ''
    }
  })
  // Addmutation category
  const queryClient = useQueryClient()
  const addMutation = useMutation(createCategoryQuestion, {
    onSuccess: () => {
      queryClient.prefetchQuery('categoryQuestions', getCategoryQuestions)
    }
  })
  // status create category
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState("")
  // handle submit
  const handleCreateCategory = (formData) => {
    try {
      const createCategory = addMutation.mutateAsync(formData)
      // Xử lý sau khi submit
      createCategory.then((res) => {
        if (res.error) {
          setError(res.error)
          setIsError(true)
          setTimeout(() => {
            setIsError(false)
          }, 5000)
        } else {
          reset()
          setIsSuccess(true)
          setTimeout(() => {
            setIsSuccess(false)
          }, 5000)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h2 className='titleCategory'>Categories Questions</h2>
      <form action="" className='formMain' onSubmit={handleSubmit(handleCreateCategory)} method='POST'>
        {isSuccess && !isError ? (<Alert severity="success" style={{ marginBottom: "20px" }}>Tạo mục lục thành công</Alert>) : ""}
        {isError ? (<Alert severity='error' style={{ marginBottom: 30 }}>{error}</Alert>) : ''}
        <label htmlFor="" className='lableForm'>Name</label>
        <input type="text" {...register('name', { required: "Tên mục lục không được để trống" })} name='name' className='inputForm' />
        {!isValid && errors.name ? (<p className='error'>{errors.name?.message}</p>) : ''}
        <div style={{ textAlign: 'center' }}>
          <button className='btnSubmitCategory'>Add</button>
        </div>
      </form>
    </>
  )
}

export default CategoriesQuestion