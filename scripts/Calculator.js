import { Sum } from "./operations/Sum.js"
import { Subtract } from "./operations/Subtract.js"
import { Multiply } from "./operations/Multiply.js"
import { Divide } from "./operations/Divide.js"

function Calculator() {
  const number1 = Number(prompt("Number 1: "))
  const number2 = Number(prompt("Number 2: "))
  const operation = prompt("Select the operation: \nSum: + | 1 \nSubtract: - | 2 \nMultiply: * | 3 \nDivide: / | 4")

  switch (operation) {
    case "1":
      alert(Sum(number1, number2))
      Calculator()
      break
    case "+":
      alert(Sum(number1, number2))
      Calculator()
      break
    case "2":
      alert(Subtract(number1, number2))
      Calculator()
      break
    case "-":
      alert(Subtract(number1, number2))
      Calculator()
      break
    case "3":
      alert(Multiply(number1, number2))
      Calculator()
      break
    case "*":
      alert(Multiply(number1, number2))
      Calculator()
      break
    case "4":
      alert(Divide(number1, number2))
      Calculator()
      break
    case "/":
      alert(Divide(number1, number2))
      Calculator()
      break
  }
}

Calculator()
