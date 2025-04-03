import { cookies } from 'next/headers';
import { jwtDecode as decode } from 'jwt-decode'

interface User {
    sub: string
    name: string
    avatarUrl: string
}

export async function getUser(): Promise<User> {
    const cookieGet = await cookies()
    const token = cookieGet.get('token')?.value

    if (!token) {
        throw new Error('Unauthenticated.')
    }

    const user: User = decode(token)

    return user
}