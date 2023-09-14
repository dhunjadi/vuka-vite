import {News} from './newsTypes';

export interface Task extends News {
    subject: string;
    year: number;
}
