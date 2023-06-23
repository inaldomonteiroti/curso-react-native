﻿import React, {useState} from "react";
import Estilo from "./estilo"
import { Button, Text } from "react-native";

export default ({inicial=0, passo=1}) => {

    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero+passo)
    const dec = () => setNumero(numero-passo)

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}/>

            <Button title="-" onPress={dec}/>
        </>
    )
}