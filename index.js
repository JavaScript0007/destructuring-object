// Object destructuring
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
