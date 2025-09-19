import { PartitionBlue, PartitionContainer, PartitionYellow } from './styles'

const Partition = ({ children }) => {
    <>
        <PartitionContainer>
            <PartitionYellow>{children}</PartitionYellow>
            <PartitionBlue>{children}</PartitionBlue>
        </PartitionContainer>
    </>

}

export default Partition