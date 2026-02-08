// Immediately Invoked Function Expressions (IIFE)

(function db(){
    console.log("Database Connected");
}) ();

( (name) =>  {
    console.log(`${name} Database connected`);
    
})("MYSQL")