// task_4/js/subjects/Subject.ts

namespace Subjects {
  export interface Subject {
    setTeacher(teacher: Teacher): void;
  }

  export class SubjectClass implements Subject {
    teacher: Teacher | undefined;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
