function quickSort(a: number[]) : number[] {
    if (a.length <= 1){
        return a;
    }

    const pivot = a[0]
    let menores = []
    let mayores = []

    a.forEach(item => {
        if (item < pivot) {
            menores.push(item)
        } else if (item > pivot) {
            mayores.push(item)
        }
    })

    return [...quickSort(menores), pivot, ...quickSort(mayores)]

}

const arr: number[] = [1,4,2,6,7,5,8]

const result = quickSort(arr)
console.log(result)
