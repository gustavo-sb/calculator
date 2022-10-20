export function Divide(n1, n2) {
  if ((n1 === (0 || null)) || (n2 === (0 || null))) {
    return "Can't divide by 0"
  } else {
    return `Result: ${n1 / n2}`
  }
}