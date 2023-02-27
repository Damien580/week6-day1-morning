const tower = (num) => {
    let blocks = []
    let math = (index) => index * 2 +1

    for (i = 0; i < num; i++) {
        let stars = math([i])
        let space = (math(num - 1) - stars) / 2
        blocks.push(`${''.repeat(space)}${"*".repeat(stars)}${''.repeat(space)}`)
    }
    return blocks
}
console.log(tower(2))