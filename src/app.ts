export function getCeilingAverage(firstNum: number, secondNum: number): number {
    const baseAvg = (firstNum + secondNum) / 2
    return Math.ceil(baseAvg)
}

