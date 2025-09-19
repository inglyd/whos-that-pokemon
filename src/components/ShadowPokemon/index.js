import { ImageShadow, ImageShadowContainer } from "./styles";


const ShadowPokemon = () => {
    const id = Math.floor(Math.random() * 100)
    return (
        <>
            <ImageShadowContainer>
                <ImageShadow
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt="Pokémon"
                    onDragStart={(event) => event.preventDefault()}
                />
            </ImageShadowContainer>
        </>
    );
}



export default ShadowPokemon;