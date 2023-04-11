let str = 'polygon(0% 0%, '
for(let i = 2.5; i < 100; i+=2.5) str += i + `% ${Math.floor(Math.random()*100)}%, `
str += '100% 0%)'