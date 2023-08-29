export type NewsType = 'general' | 'student' | 'professor';

export interface News {
    _id: string;
    title: string;
    text: string;
    type: NewsType;
    isPublished: boolean;
}
