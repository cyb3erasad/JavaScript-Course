const subjects = ["PF", "ICT", "Calculus", "Database System", "DLD"]

// subjects.forEach( function (sub){
//     console.log(sub);
    
// } )

// subjects.forEach( (sub) => {console.log(sub);} )

function printMe(item){
    console.log(item);
    
}
// subjects.forEach(printMe)

subjects.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach ( (item) => {
    console.log(`${item.languageFileName} is the file of ${item.languageName}`);
    
})