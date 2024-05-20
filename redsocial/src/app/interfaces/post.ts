export interface PostSeg{
    idUsuarioSeguido: number,
    idPost: number,
    contenido: string,
    fechaPublicacion: string,
    likes: number,
    dislikes: number,
    imgPerfil: string
    idUserSeguidor: number,
    nombreUserSeguido: string,
    nombreUserSeguidor: string,
}

export interface PostPropio{
    id: number,
    contenido: string,
    fechaPublicacion: string,
    likes: number,
    dislikes: number,
    // imgUsuario: string
}
export interface TotalPosts{
    totalPosts: number
}

export interface postCreado{
    contenido: string,
    userId: number
}
export interface PostLiked{
    id: number,
    likes: number,
}
export interface PostDisliked{
    id: number,
    dislikes: number,
    userId: number,
}