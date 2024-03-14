import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Dialog, Divider, FAB, List, Portal, TextInput } from 'react-native-paper'

const ChatList = () => {

    const [isDialogVisible, setIsDialogVisible] = useState(false);

    return (
        <View style={{ flex: 1 }} >
            <List.Item title="User" description="Hi,I will" left={() => <Avatar.Text label='UN' size={56} />} />
            <Divider inset />
            <Portal>
                <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)} >
                    <Dialog.Title>New Chat</Dialog.Title>
                    <Dialog.Content>
                        <TextInput label="Enter user email" />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
                        <Button>Save</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <FAB icon="plus" style={{ position: "absolute", bottom: 16, right: 16 }} onPress={() => setIsDialogVisible(true)} />
        </View>
    )
}

export default ChatList