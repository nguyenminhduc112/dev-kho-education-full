import md5 from "md5"
const BASE_URL = "http://localhost:3000"
export const registerUser = async ({formData, id_role = 2}) => {
    const date = new Date()
    const dateNow = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    const data = {
        username: formData.username,
        password: md5(formData.password),
        id_role: id_role,
        token: "",
        fullname: formData.fullname,
        email: formData.email,
        creacte_time: dateNow,
        updated_time: ""
    }
    const Option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response =  fetch(`${BASE_URL}/api/users/register`, Option)
    const json = await (await response).json()
    return json
}