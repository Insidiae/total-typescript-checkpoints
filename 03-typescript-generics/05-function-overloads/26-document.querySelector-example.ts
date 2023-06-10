const divElement = document.querySelector("div");
const spanElement = document.querySelector("span");

/**
 * Your challenge: figure out why divElement2 is NOT
 * of type HTMLDivElement.
 */
//* We can pass in a type argument to help `document.querySelector`
//* infer the type of element we're looking for!
const divElement2 = document.querySelector<HTMLDivElement>("div.foo");
