

const BASE_URL = "http://localhost:3000"

export const getUsers = async ()=>{
    const response = fetch(`${BASE_URL}/api/users`)
    const json = await (await response).json()
    return json
}
// get user
export const getUser = async (userID)=>{
    const response = fetch(`${BASE_URL}/api/users/?userID=${userID}`)
    const json = await (await response).json()
    if(json) return json
    return {}
}

export const updateUser = async ({formData,userID}) => {
    const date = new Date()
    const dateNow = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    const data = {
        username: formData.username,
        password: formData.password,
        id_role: formData.role,
        fullname: formData.fullname,
        email: formData.email,
        updated_time: dateNow
    }
    const Option = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response =  fetch(`${BASE_URL}/api/users/?userID=${userID}`, Option)
    const json = await (await response).json()
    return json
}
// delete user
export const deleteUser = async (userID)=>{
    const Option = {
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
    }
    const response = fetch(`${BASE_URL}/api/users/?userID=${userID}`,Option)
    const json = await (await response).json()
    return json
}