import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React , { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from "redux/hook";
import { User, fetchUsers, userSelector } from "./userSlice";
import { useTheme } from '@react-navigation/native';

const UserScreen = () => {
const {colors} = useTheme()
// console.warn('Colors=>',colors)
const [users, setUsers] = useState<Array<User>>([]);
const [newUserName, setNewUserName] = useState<string>("");
const [newUserEmail, setNewUserEmail] = useState<string>("");
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string | undefined>(undefined);

const selectedUsers = useAppSelector(userSelector);
const dispatch = useAppDispatch();
useEffect(() => {
  setLoading(selectedUsers.loading);
  setError(selectedUsers.error);
  setUsers(selectedUsers.users);
}, [selectedUsers]);

function handleFetchUser() {
  dispatch(fetchUsers());
}



  return (
    <View style={{backgroundColor: colors.red , padding:9}}>
      <Text style={{color: colors.warningText}}>Testing Redux</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      {users.map((user) => (
      <Text  key={user.id} style={{color: colors.warningText, marginVertical:6}}>
        {user.id} | {user.name} | {user.email}
      </Text>
      ))}
      <View>
         <TextInput 
          placeholder='Name'
          value={newUserName}
          onChangeText={(text) => setNewUserName(text)}
         />
          <TextInput 
          placeholder='Email'
          value={newUserEmail}
          onChangeText={(text) => setNewUserEmail(text)}
         />
         <Button title="Submit" onPress={handleFetchUser}/>
      </View>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})