function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

user.forEach(name => {
    console.log(greeter(name));
});
//or

function greeterArray(people: string[]): string[]{
    return people.map(person => "Hello, " + person);
}
console.log(greeterArray(user));