import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from "prop-types";

export const PasswordInput = ({ placeholder, placeholderColor, iconSize, iconColor, inputStyles, setPassword }) => {

    const [shown, setShown] = useState(false);
    const [size, setSize] = useState({ width: null, height: null });

    return (
        <View style={styles.container} onLayout={(event) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            setSize({ width: width, height: height });
        }}>
            <TextInput
                textContentType='password'
                placeholder={placeholder}
                placeholderTextColor={placeholderColor ? placeholderColor : null}
                onChangeText={(e) => { setPassword(e) }}
                style={{ ...inputStyles, ...styles.textInput }}
                secureTextEntry={!shown}
            />
            <TouchableOpacity onPress={() => setShown(!shown)} style={{ ...styles.icon, top: size.height / 2 - iconSize / 2, }}>
                {!shown ? (
                    <Icon name="eye" size={iconSize} color={iconColor} />
                ) : (
                    <Icon name="eye-off" size={iconSize} color={iconColor} />
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    textInput: {
        width: "100%"
    },
    icon: {
        position: "absolute",
        right: 20,
    }
})

PasswordInput.defaultProps = {
    placeholder: "Password",
    placeholderColor: "#bbbbbb",
    iconSize: 24,
    iconColor: "#bbb",
    inputStyles: { backgroundColor: "#eeeeee", borderRadius: 40, padding: 20 },
};

PasswordInput.propTypes = {
    placeholder: PropTypes.string,
    placeholderColor: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    inputStyles: PropTypes.object,
};