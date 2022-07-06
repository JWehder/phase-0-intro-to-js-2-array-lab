// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;
cats.push("Milo", "Otis", "Garfield")

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
    
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {
    const removedCats = cats.slice(0, -1);
    return removedCats
}

function removeFirstCat() {
    const removedCats = cats.slice(1);
    return removedCats;
}