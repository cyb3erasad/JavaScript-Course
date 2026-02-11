// for in loop

const languages = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for (const key in languages) {
    // console.log(`${key} shortcut is for ${languages[key]}`);
    
}

const subjects = ["PF", "ICT", "Calculus", "Database System", "DLD"]

for (const key in subjects) {
    // console.log(subjects[key]);
    
}

const map = new Map()
map.set("PAK", "Pakistan")
map.set("TRK", "Turkey")
map.set("GER", "Germany")

for (const key in map) {
    console.log(key);
    
}