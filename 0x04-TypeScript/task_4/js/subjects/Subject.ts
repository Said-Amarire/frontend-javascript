
namespace Subjects {

    export interface Teacher {
        name: string;
        subject: string;
    }

    export interface Subject {
        teacher?: Teacher;
        setTeacher(teacher: Teacher): void;
    }

    export class SubjectImpl implements Subject {
        teacher?: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }

}
