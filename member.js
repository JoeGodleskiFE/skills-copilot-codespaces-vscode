function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 25,
    skills: ['JavaScript', 'React', 'Node'],
    greet: function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
  }
  return member;
}