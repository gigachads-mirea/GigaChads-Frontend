import React from 'react';
import {Avatar, Card, Grid, Text} from '@nextui-org/react';

const Profile = ({data}) => {
	return (
		<Grid xs={4}>
			<Card css={{ h: "$24", height: "45vh" }}>
				<Card.Header>
					<Text b>Profile</Text>
				</Card.Header>
				<Card.Divider />
				<Card.Body css={{ py: "$10" }}>
					<Avatar
						squared
						text={"User"}
						size="xl"
						src="" />
					<Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Text>
					<Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Text>
					<Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Text>
				</Card.Body>

			</Card>
		</Grid>
	);
};

export default Profile;