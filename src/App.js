import React from "react"
import { View, StyleSheet} from "react-native"

import Pai from "./components/direta/Pai"
// import Primeiro from "./components/Primeiro"
// import X, {Comp1, Comp2} from "./components/Multi"
// import MinMax from "./components/MinMax"
// import Aleatorio from "./components/Aleatorio"
// import Titulo from "./components/Titulo"
// import Botao from "./components/Botao"
// import Contador from "./components/Contador"


export default () => (
    <View style={style.App}>
        {/* <Pai /> */}
        {/* <Contador inicial={100} passo={13}/>
        <Contador/> */}
        {/* <Botao/> */}
        {/* <Titulo principal="Cadastro de Produto" secundario="Tela de Cadastro do Produto" /> */}
        {/* <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/> */}
        {/* <MinMax min={3} max={20} />
        <MinMax min={1} max={94} /> */}
        {/* <X />
        <Comp1/><Comp2/>
        <Primeiro /> */}
    </View>

)

const style = StyleSheet.create({
    App: {
        // backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})
