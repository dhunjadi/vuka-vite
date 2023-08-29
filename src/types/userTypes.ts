export type StudyProgram = 'hospitality' | 'mechatronics';

type AdminRole = {
    role: 'admin';
};

type StudentRole = {
    role: 'student';
    studyProgram: StudyProgram;
};

type ProfessorRole = {
    role: 'professor';
};

type UserRoleType = AdminRole | StudentRole | ProfessorRole;

export type User = {
    _id: string;
    fName: string;
    lName: string;
    email: string;
    imgSrc: string;
} & UserRoleType;
