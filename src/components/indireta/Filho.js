﻿import React from 'react'
import Estilo from '../estilo'
import  {Button} from 'react-native'


export default props => {

    function gerarNumero(min,max){
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
        title = "Executar"
        onPress={function(){
            gerarNumero()
        }
        ></Button>
    )
}