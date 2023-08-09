/* VALIDATIONS */

export interface LoginForm {
    email: string;
    password: string;
}

export interface NewsActionsForm {
    email: string;
    password: string;
}

export interface User {
    _id: string;
    fName: string;
    lName: string;
    email: string;
    imgSrc: string;
    role: string;
}

export type NewsType = 'general' | 'student' | 'professor';
export interface News {
    _id: string;
    title: string;
    text: string;
    type: NewsType;
    isPublished: boolean;
}
