//Immediately Invoked Function Expressions (IIFE)

(function connectDB() {
  //named IIFE
  console.log(`DB Connected`);
})();

(() => {
  console.log(`DB Connected 2`);
})();

((name) => {
  console.log(`DB Connected 3 for ${name}`);
})("John Doe");
// To avoid global scope pollution we use IIFE

/*  From Chat gpt */

/* 
    Encapsulation: It encapsulates variables and functions within a local scope, preventing them from polluting the global scope. This helps avoid naming collisions and unintended interactions with other parts of the code.

    Avoiding Global Namespace Pollution: By encapsulating code within an IIFE, you can prevent variables and functions from being added to the global namespace. This is especially important in larger projects or when working with third-party libraries to minimize conflicts.

    Isolation: It provides a way to isolate variables and functions within a specific context, allowing you to create private variables and functions that are inaccessible from the outside.

    Closure: Since an IIFE creates its own scope, it allows you to create closures, which can be useful for maintaining state or creating private data that persists across function calls.

    Initialization: It can be used to initialize code immediately after its definition, ensuring that it runs once and only once when the script is loaded. This is particularly useful for setting up configurations, initializing variables, or defining utility functions.
*/
