const tower = (num) => {
    let blocks = []
    let math = (index) => index * 2 +1

    for (i = 0; i < num; i++) {
        let stars = math([i])
        let space = (math(num - 1) - stars) / 2
        blocks.push(`${' '.repeat(space)}${"*".repeat(stars)}${' '.repeat(space)}`)
    }
    return blocks
}
console.log(tower(15))

console.log('==================================================================')

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
    + "*".repeat((i * 2)+ 1)
    + " ".repeat(nFloors - i - 1))
    }
    return tower;
    }
    console.log(towerBuilder(1))