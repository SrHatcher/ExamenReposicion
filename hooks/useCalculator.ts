import { useState } from "react"

const useCalculator = () => {
    const [value, setValue] = useState("");
    const [operation, setOperation] = useState<(number | string)[]>([])
    const [resultToShow, setResultToShow] = useState<(number | string)[]>()
    const [error, setError] = useState("")

    const setOperationValue = (number: number | string) => {

        setValue(prevValue => {

            switch (prevValue) {
                case "+":
                    return number.toString();
                case "-":
                    return number.toString();
                case "*":
                    return number.toString();
                case "/":
                    return number.toString();
                case "^":
                    return number.toString();
            }

            if (prevValue[0] === '0' && number === ".") {
                if (!prevValue.includes(".")) {
                    return (`${prevValue}${number}`)
                } else {//apartir de aqui
                    return prevValue
                }
            }

            if (prevValue[0] === "0" && prevValue[prevValue.length - 1] === ".") {
                return (`${prevValue}${number}`)
            }

            if (prevValue[0] === "0" && !prevValue.includes(".")) {
                return number.toString()
            }

            return (`${prevValue}${number}`)
        })
    }

    const deleteOperation = () => {
        setOperation([])
        setValue("")
        setResultToShow([])
        setError("")
    }

    const calculateOperation = () => {
        const realValues = operation.filter(item => item !== " ") as string[]
        const operadores = ["/", "*", "+", "-", "^"];
        let operadorEncontrado = true;
        console.log("Valores reales del array", realValues)

        while (operadorEncontrado) {
            operadorEncontrado = false

            for (let i = 0; i < realValues.length; i++) {
                const valor = realValues[i];
                console.log(valor)
                if (operadores.includes(valor)) {
                    if (i - 2 < 0 || isNaN(Number(realValues[i - 2])) || isNaN(Number(realValues[i - 1]))) {
                        setError("No hay suficientes valores numericos antes del operador")
                        setResultToShow(operation)
                        return
                    }


                    const num1 = Number(realValues[i - 2]);
                    const num2 = Number(realValues[i - 1]);
                    let result;

                    switch (valor) {
                        case "+":
                            result = num1 + num2
                            break;
                        case "-":
                            result = num1 - num2
                            break;
                        case "*":
                            result = num1 * num2
                            break;
                        case "/":
                            if (num2 === 0) {
                                console.log("una division por cero!!!")
                                setError("No se puede dividir entre cero")
                                setResultToShow(operation)
                                return;
                            }
                            result = num1 / num2
                            break;
                        case "^":
                            result = Math.pow(num1, num2);
                            break;
                    }

                    if (result === undefined) {
                        setError("Ocurrio algo muy extraño aqui")
                        setResultToShow(operation)
                        return
                    }
                    console.log(`Operación encontrada: ${num1} ${value} ${num2} = ${result}`);
                    realValues.splice(i - 2, 3, result.toString())
                    console.log("array actualizado:", realValues)

                    operadorEncontrado = true;
                    break;
                }
            }
        }

        //TODO: Sen caso de que todo salga bien aqui deberiamos de traer la logica para guardar la operacion en SQLite
        setResultToShow(realValues) //Este es resultado que vamos a tener que guardar en el SQLite
        //el array que mostrará la operacion completa será el de operation, ese tambien habra que guardarlo en sqlite
    }

    const enterValue = () => {
        if (resultToShow?.length) {
            setOperation(resultToShow)
            setResultToShow([])
        }
        setOperation(prevOperation => [...prevOperation, " ", value])
        setValue("")
    }

    const deleteLast = () => {
        setValue(prevValue => prevValue.slice(0, -1))
    }

    return {
        operation,
        value,
        setValue,
        setOperationValue,
        deleteOperation,
        calculateOperation,
        enterValue,
        deleteLast,
        error,
        resultToShow
    }
}

export default useCalculator