import React, {useContext, useState} from 'react'
import {Text, TextInput, View, StyleSheet, Button} from 'react-native'
import { color } from 'react-native-reanimated'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    
    return(
        <View style={style.form}>
            <Text style={style.text}>Nome</Text>
            <TextInput
            style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
            />
            <Text style={style.text}>Email</Text>
            <TextInput
            style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o E-mail"
                value={user.email}
            />
            <Text style={style.text}>Data de Aniversário</Text>
            <TextInput
            style={style.input}
                onChangeText={aniversario => setUser({...user, aniversario})}
                placeholder="Informe a data de aniversário"
                value={user.aniversario}
            />
            <Text style={style.text}>Altura</Text>
            <TextInput
            style={style.input}
                onChangeText={altura => setUser({...user, altura})}
                placeholder="Informe a altura"
                value={user.altura}
            />
            <Text style={style.text}>URL do Avatar</Text>
            <TextInput
            style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do avatar"
                value={user.avatarUrl}
            />
            <Button
                title='Salvar'
                color='#32BF84'
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
form: {
    padding: 10,
},
input:{
    height: 40,
    borderColor: '#32BF84',
    borderWidth: 1,
    marginBottom: 15,
    textAlign: 'center',
    borderRadius: 20,
},
text:{
    fontWeight: 'bold',
    color: '#32BF84',
    textAlign: 'center',
}
})

