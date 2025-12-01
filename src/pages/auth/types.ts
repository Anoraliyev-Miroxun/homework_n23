 export  interface LoginT{
    username:string,
    password:string,
    role:string
} 

export interface LotinResponse{
    data:{
        token:string,
        user:{
            createdAt:string,
            updatedAt:string,
            fullName:string,
            id:string,
            role:string,
            username:string
        }
    },
    message:{
        en:string,
        ru:string,
        uz:string
    }

}