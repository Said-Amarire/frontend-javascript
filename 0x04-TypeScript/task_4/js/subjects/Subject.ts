namespace Subjects {
  export interface Subject {
    teacher?: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  export class BaseSubject implements Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
