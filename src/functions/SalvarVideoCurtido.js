import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function SalvarVideoCurtido(codigo) {

    try {
        const videosCurtidos = await AsyncStorage.getItem("curtidos")
        const videosCurtidosLista = JSON.parse(videosCurtidos || "[]")

        if (videosCurtidosLista.includes(codigo) === false) {
            videosCurtidosLista.push(codigo)
        }

        const videosCurtidosNovos = JSON.stringify(videosCurtidosLista)

        await AsyncStorage.setItem("curtidos", videosCurtidosNovos)

    }catch(error) {
        console.log(error)
    }

}