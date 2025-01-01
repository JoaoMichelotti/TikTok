import React from "react";
import { ScrollView, StatusBar, View, Text } from "react-native"
import Dados from "../databases/Dados";
import Conteudo from "../components/Conteudo";

export default function Home({ navigation }) {

    const DadosAleatorios = Dados.sort(() => {
        return Math.random() - 0.5
    });

    return(
        <View>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>

            <ScrollView pagingEnabled>

                { DadosAleatorios.length > 0 &&
                
                    DadosAleatorios.map((item, index) => {
                        return(
                            <Conteudo
                            key={index}
                            codigo={item.codigo}
                            fonte={item.fonte}
                            nome={item.nome}
                            descricao={item.descricao}
                            etiqueta={item.etiqueta}
                            />
                        )
                    })

                }
                
            </ScrollView>
        </View>
    )

}