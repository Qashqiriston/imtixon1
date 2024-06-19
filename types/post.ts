interface Comment {
    id: number
    text: string
}

export interface Post {
    postId: number
    id: number
    name: string
    email?: string
    body: string | string[]
    show?: boolean // true | false
    onChange?: (s: string | number) => string
    comment?: Comment
}

interface Person {
    name: string
    age: number
}

export type PostId = number

type Country = {
    countryName: string
}

export type PersonStatus = 'error' | 'success'

export interface Sanjar extends Person, Country {
    job: "Frontend Developer"
    status: PersonStatus
    workPlace: object
}





