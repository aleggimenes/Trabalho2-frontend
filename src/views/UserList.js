import React, { useContext } from 'react'
import {View, FlatList, Alert} from 'react-native'
import { Button, Icon, ListItem } from 'react-native-elements'
import UsersContext from '../context/UsersContext'
import users from '../data/users'


export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert("Excluir Usuário", 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }
    
    function getActions(user){
        return(
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name="create" size={25} color="#32BF84"/>}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name="clear" size={25} color="#FE2C54"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }){
    return (
        <ListItem
            leftAvatar={{source: {uri: user.avatarUrl}}}
            key={user.id}
            title={user.name}
            subtitle={user.email}
            //={user.aniversario}
            //subtitle={user.altura}
            bottomDivider
            rightElement={getActions(user)}
            onPress={() => props.navigation.navigate('UserForm', user)}
        />
    )
    }
    
    return(
        
        <View>
           <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
           />
        </View>
    )
}

