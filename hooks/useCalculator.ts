import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react"

const useCalculator = () => {
    const [value, setValue] = useState("");
    const [operation, setOperation] = useState<(number | string)[]>([])
    const [resultToShow, setResultToShow] = useState<(number | string)[]>()
    const [error, setError] = useState("")

    const database = useSQLiteContext();

    const handleSave = async (operation: string, result: string, date: string) => {
        try {
            await database.runAsync("INSERT INTO operations (operation, result, date) VALUES (?, ?, ?);", [operation, result, date])
        } catch (error) {
            console.error("ocurrio un error al intentar guardar", error)
        }
    }


    const setOperationValue = (number: number | string) => {

        setValue(prevValue => {

            switch (prevValue) {
                case "+":
                    if (number === ".") {
                        return (`0${number}`)
                    }
                    return number.toString();
                case "-":
                    if (number === ".") {
                        return (`0${number}`)
                    }
                    return number.toString();
                case "*":
                    if (number === ".") {
                        return (`0${number}`)
                    }
                    return number.toString();
                case "/":
                    if (number === ".") {
                        return (`0${number}`)
                    }
                    return number.toString();
                case "^":
                    if (number === ".") {
                        return (`0${number}`)
                    }
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

            if (prevValue && number === ".") {
                return (`${prevValue}${number}`)
            }

            if (number === ".") {
                return (`0${number}`)
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

    const calculateOperation = async () => {
        const realValues = operation.filter(item => item !== " ") as string[]
        const operadores = ["/", "*", "+", "-", "^"];
        let operadorEncontrado = true;
        console.log("Valores reales del array", realValues)

        const numeros = realValues.filter(item => !isNaN(Number(item)));
        const operadoresEncontrados = realValues.some(item => operadores.includes(item));

        if (numeros.length >= 2 && !operadoresEncontrados) {
            setError("Debe ingresar un operador para realizar el cálculo.");
            setResultToShow(operation);
            return;
        }

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

        console.log("resultado de la operacion:", realValues)

        //obtencion y parseo de datos para guardarlos en SQLite
        const now = new Date().toISOString();
        const operationString = operation.join('')
        const resultString = (realValues[0])

        setResultToShow(realValues) //Este es resultado que vamos a tener que guardar en el SQLite y es el que se mostrará en la pantalla de la calculadora

        //Guardado en SQLite
        //console.log("inició el proceso de guardado")
        await handleSave(operationString, resultString, now)
        //console.log("terminó el proceso de guardado")
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