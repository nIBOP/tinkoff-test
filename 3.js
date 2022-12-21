const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
      });
    var n = 0
    rl.on('line', (line) => n = line
    ).on('close', () => { 
    var f = true
    for (i = 2; i * i <= n; i++) {
        if (n % i == 0)
            f = false
    }
    if (n == 1)
        f = false

    if (f)
        console.log(`1 ${n - 1}`);
    else {
        for (i = 2; i * i <= n; i++) {
            if (n % i == 0)
            {
                console.log(`${n / i} ${n / i * (i - 1)}`);
                break;
            }
        }
    }
})