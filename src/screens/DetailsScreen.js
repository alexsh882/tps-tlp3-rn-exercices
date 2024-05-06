import { View  } from "react-native";
import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../contexts/CharactersContext";
import { ScaledSheet } from "react-native-size-matters";
import { Avatar, Text } from "react-native-paper";


export default function DetailsScreen({ route }) {

    const { id, titleName } = route.params;

    const [character, setCharacter] = useState({
        name: '',
        status: '',
        image: '',

    })

    const { showCharacter } = useContext(CharactersContext);

    useEffect(() => {
        const character = showCharacter(id);
        setCharacter(character);
    }, []);


    return (
        <View style={styles.container}>
            <Avatar.Image size={styles.imageSize} source={{ uri: character.image }} />
            <Text style={styles.fontSizeTitle}>{character?.name}</Text>
            <Text>{character?.status}</Text>
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