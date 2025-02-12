function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if (this.hasOwnProperty('marks') && this.marks.length > 0) {
    for (let value of this.marks) {
        sum += value;
    }
    sum = sum / this.marks.length;
  }
  return sum;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
