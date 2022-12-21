const rl = require('readline').createInterface({
input: process.stdin,
output: process.stdout,
  });
var arr = []
rl.on('line', (line) => arr.push(line)
).on('close', () => { 
arr[2] = arr[2].split('')
arr[1] = arr[1].split(' ')
phrase = 0
ugly = 0 
fUgly = false
for (let i = 0; i < arr[1].length; i++) {
    phrase += arr[1][i].length
    for (let j = phrase - arr[1][i].length + 1; j < phrase + 1; j++) {
        if (arr[2][j-1] == arr[2][j]){
            fUgly = true
            break
        }
    }
    if (fUgly) {
        ugly++
        fUgly = false
    }
}
console.log(ugly)
})