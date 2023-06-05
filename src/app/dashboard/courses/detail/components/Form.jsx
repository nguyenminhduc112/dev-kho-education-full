import React, { useEffect, useState } from 'react'
// Material UI
import { Grid, MenuItem, Select } from '@material-ui/core'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
// React Querys
import { useMutation, useQuery, useQueryClient } from 'react-query'
// React Form Hook
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material';
// Libs Fetch
import { getCourse, getCourses, updateCourse } from 'Libs/fetch/course';
import { getCategoryCourses } from 'Libs/fetch/category';
import Image from 'next/image';

function Form() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    var courseID = params.courseID
    const [urlImage, setUrlImage] = useState('')
    const categoryCourses = useQuery('categoryCourses', getCategoryCourses)
    const course = useQuery(['course', courseID], () => getCourse(courseID))
    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm()
    // status add course
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    // Addmutation user
    const queryClient = useQueryClient()
    const updateMutation = useMutation(updateCourse, {
        onSuccess: () => {
            queryClient.prefetchQuery('courses', getCourses)
        }
    })
    // Cover to base64 images
    const covertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    // Custon amimation thumbnail
    const onChangeImages = async (e) => {
        if (e.target.files.length == 1) {
            const file = e.target.files[0]
            const base64 = await covertToBase64(file)
            console.log(base64)
            setUrlImage(base64)
        } else {
            setUrlImage('')
        }
    }
    // End custon amimation thumbnail

    // HandleSubmit
    const handleSubmitUppdateCourse = (data) => {
        try {
            const formData = {
                title: data.title,
                thumbnail: urlImage == '' ? course.data?.thumbnail : urlImage,
                benefit: data.benefit,
                request: data.request,
                id_cat_cour: data.category,
                status: data.status
            }
            const updatedCourse = updateMutation.mutateAsync({ formData, courseID })
            // Xử lý sau khi submit
            updatedCourse.then((res) => {
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

    if (!courseID) {
        return (
            <></>
        )
    }
    if (course.isLoading) {
        return (<div>...Loading</div>)
    }
    return (
        <form className='form' method='POST' onSubmit={handleSubmit(handleSubmitUppdateCourse)}>
            <Grid container spacing={10}>
                <Grid item md={6} className="groupInput">
                    <lable htmlFor='title' className="lableForm">
                        Title
                    </lable>
                    <input id='title' type="text" name='title' {...register('title', { required: "Title không được để trống" })} className="inputForm" defaultValue={course.data?.title} />
                    {!isValid && errors.title ? (<p className='error'>{errors.title?.message}</p>) : ''}
                </Grid>
                <Grid item md={6} className="groupInput">
                    <lable className="lableForm">
                        Thumbnail
                    </lable>
                    <div class="image-input">
                        <input type="file" accept="image/*" id="imageInput" onChange={onChangeImages} />
                        <label for="imageInput" class="image-button"><CropOriginalIcon className='iconImage' /> Choose image</label>
                        <Image width={500} height={200} src={urlImage == '' ? course.data?.thumbnail : urlImage} class="image-preview" />
                    </div>
                </Grid>
                <Grid item md={6} className="groupInput">
                    <lable htmlFor="benefit" className="lableForm">
                        Benefit
                    </lable>
                    <textarea id='benefit' className="inputForm textareaForm" {...register('benefit', {
                        required: "Benefit không được để trống", minLength: {
                            value: 8,
                            message: 'Benefit phải trên 8 ký tự'
                        }
                    })} name='benefit' rows={20} defaultValue={course.data?.benefit} />
                    {!isValid && errors.benefit ? (<p className='error'>{errors.benefit?.message}</p>) : ''}
                </Grid>
                <Grid item md={6} className="groupInput">
                    <lable className="lableForm">
                        Request
                    </lable>
                    <textarea wrap className="inputForm textareaForm" {...register('request', {
                        required: "Request không được để trống", minLength: {
                            value: 8,
                            message: 'Request phải trên 8 ký tự'
                        }
                    })} rows={20} defaultValue={course.data?.request} />
                    {!isValid && errors.request ? (<p className='error'>{errors.request?.message}</p>) : ''}
                </Grid>
                <Grid item md={6} className="groupInput">
                    <lable className="lableForm">
                        Status
                    </lable>
                    <Select
                        labelId="status"
                        id="status"
                        className='inputForm'
                        {...register("status", {
                            required: "Hãy chọn trạng thái khóa học"
                        })}
                        defaultValue={course.data?.status}
                    >
                        <MenuItem value={0}>Inactive</MenuItem>
                        <MenuItem value={1}>Active</MenuItem>
                    </Select>
                    {!isValid && errors.status ? (<p className='error'>{errors.status?.message}</p>) : ''}
                </Grid>
                <Grid item md={6} className="groupInput">
                    <lable className="lableForm">
                        Category
                    </lable>
                    <Select
                        labelId="category"
                        id="category"
                        className='inputForm'
                        {...register("category", {
                            required: "Hãy chọn category khóa học"
                        })}
                        defaultValue={course.data?.id_cat_cour}
                    >
                        {categoryCourses.data?.map((categoryCoruse, index) => {
                            return (
                                <MenuItem key={index} value={categoryCoruse._id}>{categoryCoruse.name}</MenuItem>
                            )
                        })}


                    </Select>
                    {!isValid && errors.category ? (<p className='error'>{errors.category?.message}</p>) : ''}
                </Grid>
            </Grid>
            {isSuccess && !isError ? (<Alert severity="success" style={{ marginTop: "20px" }}>Cập nhật khóa học thành công</Alert>) : ""}
            {isError ? (<Alert severity='error' style={{ marginTop: '20px' }}>{error}</Alert>) : ''}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className='btnSubmit submitUpdatedCourse'>Uppdate</button>
            </div>
        </form>
    )
}

export default Form