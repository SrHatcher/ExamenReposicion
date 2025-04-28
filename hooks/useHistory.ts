import { useFocusEffect } from "expo-router"
import { useSQLiteContext } from "expo-sqlite"
import { Rows } from "lucide-react-native"
import { useCallback, useState } from "react"

type operationType = {
    id: number,
    operation: string,
    result: string,
    date: string
}

const useHistory = () => {
    const [data, setData] = useState<operationType[]>([])

    const database = useSQLiteContext()

    const loadData = async () => {
        try {
            const results = await database.getAllAsync("SELECT * FROM operations;");
            setData(results); //TODO: error de tipado
        } catch (error) {
            console.log("error consiguiendo la data", error)
        }

    }

    //con esto hacemos la peticion de los datos cada vez que la pagina esté "onFocus"
    useFocusEffect(
        useCallback(() => {
            loadData()
        }, [])
    )

    return {
        data
    }
}

export default useHistory;