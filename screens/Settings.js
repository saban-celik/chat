import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Subheading, Title } from 'react-native-paper'

const Settings = () => {
    return (
        <View style={{ alignItems: "center", marginTop: 16 }}>
            <Avatar.Text label='UN' />
            <Title>User Name</Title>
            <Subheading>user@name.com</Subheading>
            <Button>Sign Out</Button>
        </View>
    )
}

export default Settings