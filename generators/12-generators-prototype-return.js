function * gen(){
	yield 1
	yield 2
	yield 3
}

const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.return('end'))
