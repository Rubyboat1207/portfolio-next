export function isNear(num1: number, num2: number, tolerance: number) {
    return Math.abs(num1 - num2) <= tolerance;
}