import React, {useState, useEffect} from "react";
import { View, Pressable, Image, Text } from "react-native"
import { Video, ResizeMode } from "expo-av"
import { LinearGradient } from "expo-linear-gradient"
import Estilo from "../styles/Estilo"
import SalvarVideoCurtido from "../functions/SalvarVideoCurtido";
import ObterVideoCurtido from "../functions/ObterVideoCurtido";
import LimparVideoCurtido from "../functions/LImparVideoCurtido";

export default function Conteudo(props) {

    const [ estado , setEstado ] = useState(true)
    const [ curtido, setCurtido ] = useState(false)

    const Curtir = () => {

        if (curtido) {
            LimparVideoCurtido(props.codigo)
        } else {
            SalvarVideoCurtido(props.codigo)
        }

        setCurtido(!curtido)

    }

    useEffect( () => {
        
        async function VerificarCurtido() {
            const videosCurtidos = await ObterVideoCurtido()
            if (videosCurtidos.includes(props.codigo)) {
                setCurtido(true)
            }
        }

        VerificarCurtido()

    }, [])

    return(
        <View style={Estilo.tela}>
            <LinearGradient colors={["#000", "transparent"]} 
            style={Estilo.conteudoBarra}>
                <View style={Estilo.conteudoBarraDentro}>
                    <Text style={Estilo.conteudoTitulo}>{props.nome}</Text>
                    <Text style={Estilo.conteudoDescricao}>{props.descricao}</Text>
                    <Text style={Estilo.conteudoEtiqueta}>{props.etiqueta.join(" & ")}</Text>
                </View>

                <View>
                    <Pressable onPress={Curtir}>

                        {curtido ? (
                            <Image source={ require("../../assets/heart-fill.png")}/>
                        ) : (
                            <Image source={ require("../../assets/heart.png")}/>
                        )    
                        }
                    </Pressable>
                </View>

            </LinearGradient>

            <Pressable onPress={ () => setEstado(!estado) }>
                <Video
                source={props.fonte}
                resizeMode={ResizeMode.COVER}
                useNativeControls={false}
                shouldPlay={true}
                isLooping
                isMuted
                style={Estilo.video}
                />

            </Pressable>
        </View>

    )


}