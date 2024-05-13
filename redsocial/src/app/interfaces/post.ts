export interface PostSeg{
    idUsuarioSeguido: number,
    idPost: number,
    contenido: string,
    fechaPublicacion: string,
    likes: number,
    dislikes: number,
    idUserSeguidor: number,
    nombreUserSeguido: string,
    nombreUserSeguidor: string
}

export interface PostPropio{
    idPost: number,
    contenido: string,
    fechaPublicacion: string,
    likes: number,
    dislikes: number,
    // imgUsuario: string
}
export interface TotalPosts{
    totalPosts: number
}