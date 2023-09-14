import {StudyProgram} from './userTypes';

export type NewsType = 'general' | 'all' | StudyProgram;

export interface News {
    _id: string;
    title: string;
    text: string;
    type: NewsType;
    isPublished: boolean;
}
