namespace Subjects {
    export class Subject {
        private teacher: Teacher | undefined;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
