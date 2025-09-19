import { PartitionBlue, PartitionContainer, PartitionYellow } from "../../components/Partition/styles";
import ShadowPokemon from "../../components/ShadowPokemon";
import { Subtitle } from "../HomePage/style";


export const GamePage = () => {
    return (
        <>
            <Subtitle>?</Subtitle>
            <PartitionContainer>
                <PartitionBlue>
                    <ShadowPokemon />
                </PartitionBlue>
                <PartitionYellow>
                    <h1>tet</h1>
                </PartitionYellow>
            </PartitionContainer>
        </>
    )
}


export default GamePage;


