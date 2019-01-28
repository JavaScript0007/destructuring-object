// object destructuring
const basicInfo = ({firstName, lastName, profession, projects}) => {
  console.log(firstName + ' ' + lastName + ' ' + profession + ' pro in ' +  projects.wifi)
}

const person = {
  firstName: 'Josh',
  lastName: 'Jonson',
  age: 33,
  children: 3,
  profession: 'coder',
  projects: {
    wifi: 'wideareas',
    JavaScript: 'cron job'
  }
}

basicInfo(person)

// default values

let a;
let b;

[a = 4, b = 8] = [1];

console.log('Default destructuring  a = ' + a + ' b = ' + b)

// parsing an array returned from a function

const arrayReturn = () => [1, 2, 3, 4]

let c;
let d;
let e;
let f;

[c, d, e, f] = arrayReturn()

console.log(c, d, e, f)

// ignoring some values

const ignoredValues = () => [10, 20, 30, 40]

let [g, , , h] = ignoredValues()

console.log(g, h)

// destructuring with rest pattern


let [j, ...k] = [1, 2, 3, 4, 5]

console.log(j, k)

// Assign to new variable names

let l = {m: 70, n: 7}

let { m: newM, n: newN} = l

console.log(newM, newN)

let obj = {
  name: 'Vladimir',
  role: 'developer',
  culture: 'hip'
}

let { name: nickName, role: life, culture: style} = obj

console.log(nickName, life, style)

// default value with object assignment
let o = { p: 7}
let { p = 4, r = 5} = o

console.log(p, r)

// Assigning to new variables names and providing default values
let { p: pp = 77, r: rr = 77} = o

console.log(pp, rr)
