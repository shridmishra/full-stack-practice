const user = { name: "Shrid", age: 21, role: "Dev" };
const {  name , age, role} = user;

console.log(name, age, role );

const nums = [1, 2, 3];

const newNums = [...nums,4]

console.log(newNums);



const newUser = {...user, age:22}

console.log(newUser);

function multiplyAll(...nums) {
    return nums.reduce((a,b) => a*b,1 ) // 0 gives 0 use 1

}

const ans = multiplyAll(1,2,3);

console.log(ans);

const name2 = "shrid";

console.log(`hello ${name2}!`);



const double = (x) => x*2;


console.log(double(2));

const user3 = { profile: { email: "shrid@example.com" } };

console.log(user3.profile?.email);

async function getJoke() {
    const api = await fetch("https://official-joke-api.appspot.com/random_joke");

    const joke = await api.json();

    console.log(joke);
    
}

getJoke()