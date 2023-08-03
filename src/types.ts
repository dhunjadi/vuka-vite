export interface User {
    _id: string;
    fName: string;
    lName: string;
    email: string;
    password: string;
    imgSrc: string;
    role: string;
}

export interface News {
    _id: string;
    title: string;
    text: string;
    type: string;
    isPublished: boolean;
}
