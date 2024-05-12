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
    idUser: number,
    idPost: number,
    contenido: string,
    fechaPublicacion: string,
    likes: number,
    dislikes: number,
    nombreUsuario: string,
    // imgUsuario: string
}