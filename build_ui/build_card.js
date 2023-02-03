import React, { useState } from "react";
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const BuildCard = ({ cardTitle, cardContent, title = "", subtitle = "" }) => {
    return <Card>
        {false && <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />}
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
}
export default BuildCard;