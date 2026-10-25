//Count Frequency of Each Character
let string = "My name is mohit Kumar decodes and I am a sr. software engineer";

let frequency = {};
for (let index of string) {
    frequency[index] = (frequency[index] || 0) + 1;
}
console.log(frequency);