import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function LimparVideoCurtido(codigo) {
    
    try {
        
        const videosCurtidos = await AsyncStorage.getItem("curtidos")
        const videosCurtidosLista = JSON.parse(videosCurtidos || "[]")

        const videosCurtidosRemovido = videosCurtidosLista.filter( (video) => video !== codigo )

        const videosCurtidosNovos = JSON.stringify(videosCurtidosRemovido)
        await AsyncStorage.setItem("curtidos", videosCurtidosNovos)

    } catch ( erro) {
        console.log( erro )
        
    }


}