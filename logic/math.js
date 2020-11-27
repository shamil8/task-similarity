export class MathArray extends Array {
    sum(key) {
        return this.reduce((a, b) => a + (b[key] || 0), 0)
    }
}