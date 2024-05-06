import { createContext, useState, useEffect } from "react";

import { useFetch } from "../hooks/useFetch.js";
import { fetchCharacters as fC } from "../services/fetchCharacters";


export const CharactersContext = createContext({});

export const CharactersContextProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);

    const { data, error, loading, fetchData } = useFetch({
        func: fC,
        eager: false,
    });

    useEffect(() => {
        if (data) {
            setCharacters(data.results);
        }
    }, [data]);

    const fetchCharacters = async () => {
        try {
            fetchData();
            if (error) {
                throw new Error(error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const showCharacter = (id) => {
        return characters.find((character) => character.id === id);
    };

    const deleteCharacter = (id) => {
        console.log(id);
        setCharacters((prevCharacters) =>
            prevCharacters.filter((character) => character.id !== id)
        );
    };

    return (
        <CharactersContext.Provider
            value={{
                characters,
                loading,
                fetchCharacters, 
                showCharacter,
                deleteCharacter,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};
