import { Alert } from '@mui/material';
import { getUseByEmail } from 'Libs/fetch/user';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Validate from '../Validate'

const validate = new Validate();
function Form() {
  const { data: session } = useSession()
  const [user, setUser] = useState()
  const router = useRouter()
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [visibleError, setVisibleError] = useState(false)
  const rules = {
    username: 'required|min:8',
    password: 'required|min:8|password'
  }
  const message = {
    'username.required': 'Username không được để trống',
    'username.min:8': 'Username không được dưới 8 ký tự',
    'password.required': 'Password không được để trống',
    'password.password': 'Password phải có ký tự hoa, có ký tự số và phải ký tự đặt biệt',
    'password.min:8': 'Password không được dưới 8 ký tự'
  }
  const handleValueInput = (e) => {
    // Thuật toán để lấy dữ liệu input ***
    const data = { ...form }
    data[e.target.name] = e.target.value
    setForm(data)
    validate.run(rules, message)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Validation Form
    validate.run(rules, message)
    if (validate.getError('username') === null && validate.getError('password') === null) {
      signIn('credentials', {
        ...form,
        redirect: false
      }).then(response => {
        if (response.ok) {
          // const {data: session} = useSession()
          // console.log(session)
          // router.push('/')
          getUseByEmail(session.user.email)
            .then((res) => {
              setUser(res)
            })

          if (user.id_role == 1 || user.id_role == 3 || user.id_role == 4) {
            router.push('/dashboard')
          } else {
            router.push('/')
          }
        } else {
          setVisibleError(true)
          setTimeout(() => {
            setVisibleError(false)
          }, 5000)
        }
      }).catch(error => {
        console.log(error)
      })
    } else {
      setVisibleError(true)
      setTimeout(() => {
        setVisibleError(false)
      }, 5000)
    }
  }
  return (
    <div className={`formLogin`}>
      <img src={'/images/avatart-demo.png'} alt="" />
      <h1 className={`title`}>Login To Dev Khờ</h1>

      <form action="" className={`formMain`} onSubmit={handleSubmit}>
        {visibleError ? (<Alert severity='error' style={{ marginBottom: 30 }}>Đăng nhập không thành công</Alert>) : ''}
        <label htmlFor="username" className={`lableForm`}>Username</label>
        <input id='username' type="text" name='username' className={`inputForm`} onChange={handleValueInput} />
        {validate.getError('username') ? (
          <div class="invalid-feedback">
            {validate.getError('username')}
          </div>
        ) : ''}
        {validate.getError('username') === null && form.username != '' ? (
          <div class="invalid-feedback-succes">
            Dữ liệu nhập của bạn phù hợp
          </div>
        ) : ''}
        <label htmlFor="password" className={`lableForm lableMargin`}>Password</label>
        <input id='password' type="password" name='password' className={`inputForm`} onChange={handleValueInput} />
        {validate.getError('password') ? (
          <div class="invalid-feedback">
            {validate.getError('password')}
          </div>
        ) : ''}
        {validate.getError('password') === null && form.username != '' ? (
          <div class="invalid-feedback-succes">
            Dữ liệu nhập của bạn phù hợp
          </div>
        ) : ''}
        <a href="#" className='textForgotPassword'>Forgot Password?</a>
        <button className={`btnLogin`} >LOGIN</button>
      </form>
    </div>
  )
}

export default Form