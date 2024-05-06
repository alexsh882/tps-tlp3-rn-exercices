import { View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../contexts/CharactersContext";
import { ScaledSheet } from "react-native-size-matters";
import { Avatar, Text } from "react-native-paper";


export default function DetailsScreen({ route }) {

    const { id, titleName } = route.params;

    const [character, setCharacter] = useState({
        name: '',
        status: '',
        type: '',
        image: '',
        species: '',
        gender: '',
        origin: {
            name: ''
        }

    })

    const { showCharacter } = useContext(CharactersContext);

    useEffect(() => {
        const character = showCharacter(id);
        setCharacter(character);
    }, [id]);


    return (
        <View style={styles.container}>
            <Avatar.Image size={styles.imageSize} source={{ uri: character.image }} />
            <Text style={styles.fontSizeTitle}>{character?.species}</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10
            }}>
                <Text style={styles.fontSizeTitle}>{character?.name}</Text>
                <Text style={
                    {
                        color: character?.status === 'Alive'
                            ? 'green' : character?.status === 'Dead' ? 'red' : 'gray'
                    }
                }>{

                        character?.status === 'Vivo'
                            ? 'green' : character?.status === 'Dead' ? 'Muerto' : 'Desconocido'}</Text>

            </View>
            <Text>{character?.gender == "Male" ? 'Hombre' : character?.gender == "Female" ? 'Mujer' : "Desconocido"}</Text>
            <Text>{character.type}</Text>
            <Text>{'Origen: ' + character?.origin?.name}</Text>
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    fontSizeTitle: '40@ms',
    imageSize: '200@ms'
});