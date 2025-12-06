// task_4/js/subjects/Subject.ts

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    /**
     * Set the teacher for the subject
     * @param teacher - object implementing Teacher interface
     */
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
