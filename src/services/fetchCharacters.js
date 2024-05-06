const URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async () => {
    const response =  await fetch(URL);
    
    if (!response.ok) {
        const errors = await response.json();
    
        throw errors;
      }
    
     return await response.json();
    
};