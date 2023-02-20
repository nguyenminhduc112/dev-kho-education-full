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

// get user
export const getUseByEmail = async (email)=>{
    const response = fetch(`${BASE_URL}/api/users/?email=${email}`)
    const json = await (await response).json()
    if(json) return json
    return {}
}