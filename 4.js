const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
      });
    var arr = []
    rl.on('line', (line) => arr.push(line.split(' ').map( item => parseInt(item)))
    ).on('close', () => { 
        console.log(arr)
        arr.push(arr[1])
        let solutions = ''
        solutions += arr[1].join('').toString() + ' '
        exchange(arr, solutions)
        function exchange(arr, sol) {
            for(let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++){
                    if (i != j && arr[2][i] >= arr[0][i])
                    {
                        let temp = arr[2]
                        temp[i] -= arr[0][i]
                        temp[j] += arr[0][j]
                        console.log(sol, sol.includes(temp.join('').toString()))
                        if(!sol.includes(temp)) {
                            sol += (temp.join('').toString() + ' ')
                            arr[2] = temp
                            exchange(arr, sol)
                        }
                    }
                }
            }
        }
        console.log(solutions.length)
    })