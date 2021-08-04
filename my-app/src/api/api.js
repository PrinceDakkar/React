import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5d805a9a-b29b-44a3-aabc-0a48077fe3ff"
             }
});

export const usersAPI = {
    getUsers(currentPage, pagesSize){
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
        .then(response => response.data)
    },
    follow(userId){
    return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object')
      return  profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId){
      return  instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return  instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return  instance.put(`profile/status`, {status: status})
    }
}


export const authAPI = {
    me(){
      return  instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false){
      return  instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(email, password, rememberMe=false){
      return  instance.delete('auth/login');
    }
}

