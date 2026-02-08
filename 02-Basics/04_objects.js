// const darazUser = new Object()
const temuUser = {}

temuUser.id = 1
temuUser.name = "Asad"
temuUser.email = "asad@gmail.com"

// console.log(temuUser);

const amazonuser = {
    email: "asad@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Asad",
            lastname: "Nadeem"
        }
    }
}
// console.log(amazonuser.fullname.userfullname.firstname);


obj1 = {1: "a", 2: "b"}
obj2 = {3: "c", 4: "d"}
obj3 = {5: "e", 6: "f"}

// const newObj = Object.assign({}, obj1, obj2, obj3)
const newObj = {...obj1, ...obj2, ...obj3}
// console.log(newObj);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(Object.keys(temuUser));
// console.log(Object.values(temuUser));
// console.log(Object.entries(temuUser));

// console.log(temuUser.hasOwnProperty('id'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);