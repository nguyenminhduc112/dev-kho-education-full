import React, { useState } from 'react'
import { Alert } from '@mui/material';
import { registerUser } from 'Libs/fetch/register';

import Validate from '../Validate';
import Image from 'next/image';

const validate = new Validate();
function FormRegister() {
  const [formData, setForm] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [visibleError, setVisibleError] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const rules = {
    fullname: 'required|min:2',
    email: 'required|email',
    username: 'required|min:8',
    password: 'required|min:8|password',
    confirmPassword: 'required|min:8|password|same'
  }

  const message = {
    'fullname.required': 'Fullname không được để trống',
    'fullname.min:2': 'Fullname không được để dưới 2 ký tự',
    'email.required': 'Email không được để trống',
    'email.email': 'Email không đúng định dạng',
    'username.required': 'Username không được để trống',
    'username.min:8': 'Username không được dưới 8 ký tự',
    'password.required': 'Password không được để trống',
    'password.password': 'Password phải có ký tự hoa, có ký tự số và phải ký tự đặt biệt',
    'password.min:8': 'Password không được dưới 8 ký tự',
    'confirmPassword.same': 'Không trùng password bên trên',
    'confirmPassword.required': 'Confirm Password không được để trống',
  }
  const handleValueInput = (e) => {
    // Thuật toán để lấy dữ liệu input ***
    const data = { ...formData }
    data[e.target.name] = e.target.value
    setForm(data)
    console.log(formData)
    validate.run(rules, message)
  }
  const resultRegister = async (e) => {
    const id_role = 2
    e.preventDefault()
    // Validation Form
    validate.run(rules, message)
    if ((validate.getError('fullname') === null) && (validate.getError('email') === null) && (validate.getError('username') === null) && (validate.getError('password') === null) && (validate.getError('confirmPassword') === null)) {
      await registerUser({ formData, id_role })
        .then((res) => {
          if (res.error) {
            setError(res.error)
            setVisibleSuccess(false)
            setVisibleError(true)
            setTimeout(() => {
              setVisibleError(false)
            }, 5000)
          } else {
            var inputs, index;
            inputs = document.getElementsByTagName('input');
            for (index = 0; index < inputs.length; ++index) {
              inputs[index].value = ''
            }
            validate.run(rules, message)
            setVisibleError(true)
            setVisibleSuccess(true)
            setTimeout(() => {
              setVisibleSuccess(false)
            }, 5000)
          }
        })
    } else {
      setVisibleSuccess(false)
      setVisibleError(true)
      setTimeout(() => {
        setVisibleError(false)
      }, 5000)
    }
  }
  return (
    <div className={`formRegister`}>
      <div className='mb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image width={400} height={400} src={'/images/avatart-demo.png'} alt="" />
      </div>
      <h1 className={`title font-bold`}>Sign up student</h1>
      <form action="" className={`formMain`} onSubmit={resultRegister} method="POST">
        {visibleError ? (<Alert severity='error' style={{ marginBottom: 30 }}>{error == '' ? 'Đăng ký không thành công' : error}</Alert>) : ''}
        {visibleSuccess ? (<Alert severity='success' style={{ marginBottom: 30 }}>Đăng ký thành công</Alert>) : ''}
        <label htmlFor="fullname" className={`lableForm`}>Fullname</label>
        <input id='fullname' type="text" name='fullname' className={`inputForm`} onChange={handleValueInput} />
        {validate.getError('fullname') ? (
          <div class="invalid-feedback">
            {validate.getError('fullname')}
          </div>
        ) : ''}
        {validate.getError('fullname') === null && formData.fullname != '' ? (
          <div class="invalid-feedback-succes">
            Dữ liệu nhập của bạn phù hợp
          </div>
        ) : ''}
        <label htmlFor="email" className={`lableForm lableMargin`}>Email</label>
        <input id='email' type="email" name='email' className={`inputForm`} onChange={handleValueInput} />
        {validate.getError('email') ? (
          <div class="invalid-feedback">
            {validate.getError('email')}
          </div>
        ) : ''}
        {validate.getError('email') === null && formData.email != '' ? (
          <div class="invalid-feedback-succes">
            Dữ liệu nhập của bạn phù hợp
          </div>
        ) : ''}
        <label htmlFor="username" className={`lableForm lableMargin`}>Username</label>
        <input id='username' type="text" name='username' className={`inputForm`} onChange={handleValueInput} />
        {validate.getError('username') ? (
          <div class="invalid-feedback">
            {validate.getError('username')}
          </div>
        ) : ''}
        {validate.getError('username') === null && formData.username != '' ? (
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
        {validate.getError('password') === null && formData.password != '' ? (
          <div class="invalid-feedback-succes">
            Dữ liệu nhập của bạn phù hợp
          </div>
        ) : ''}
        <label htmlFor="comfirmPassword" className={`lableForm lableMargin`}>Comfirm Password</label>
        <input id='confirmPassword' type="password" name='confirmPassword' className={`inputForm`} onChange={handleValueInput} />
        {validate.getError('confirmPassword') ? (
          <div class="invalid-feedback">
            {validate.getError('confirmPassword')}
          </div>
        ) : ''}
        {validate.getError('confirmPassword') === null && formData.confirmPassword != '' ? (
          <div class="invalid-feedback-succes">
            Dữ liệu nhập của bạn phù hợp
          </div>
        ) : ''}
        <button className={`btnRegister`}>Register</button>
      </form>
    </div>
  )
}

export default FormRegister