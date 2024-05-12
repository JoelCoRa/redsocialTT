export interface User{
    nombre: string, 
    apellido: string,
    correo: string, 
    nombreUsuario: string,
    password: string
}
export interface UserLogin{
    nombreUsuario: string,
    password: string
}

export interface UserPerfil{
    id: number;
    nombre: string,
    apellido: string,
    nombreUsuario: string,
    // imgperfil:string,
    descripcion: string,
    cuentasSeguidas: number,
    seguidores: number,
    totalPosts: number
}