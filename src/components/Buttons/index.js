import { Button } from './styles'

const Buttons = (props) => {

    return (
        <Button {...props} children={props.children.split('')} />

    )
}

export default Buttons

