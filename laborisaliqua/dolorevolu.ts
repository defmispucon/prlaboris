class StudentClass {
  private _students: string[] = [];

  public get students(): string[] {
    return this._students;
  }

  public set students(value: string[]) {
    this._students = value;
  }
}

// Usage
const studentClassInstance = new StudentClass();
studentClassInstance.students = ['Alice', 'Bob', 'Charlie'];
console.log(studentClassInstance.students);
