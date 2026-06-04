import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string,
    onPress?: () => void,
    activeOpacity?: number
}

//Desestruturei o props, seria igual ao title.props
//Pegamos todos os atributos de TouchableOpacity com o props e colocamos no rest com o spredOperator
export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}