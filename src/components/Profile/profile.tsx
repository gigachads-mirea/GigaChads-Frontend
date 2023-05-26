import React from 'react';
import {Avatar, Card, Grid, Switch, Text} from '@nextui-org/react';
import {useRouter} from 'next/router';

const Profile = ({data}) => {
	const {query, push} = useRouter();

	return (
		<Grid xs={4}>
			<Card css={{h: '$24', height: '45vh'}}>
				<Card.Header>
					<Text b>Profile</Text>
				</Card.Header>
				<Card.Divider/>
				<Card.Body css={{py: '$10'}}>
					<Avatar
						squared
						text={'Potato007'}
						size="xl"
						src=""/>

					<div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
						<Switch checked={query['dark'] === '1'} onChange={(ev) => {
							if (ev.target.checked) {
								push({query: {...query, dark: '1'}});
							} else {
								push({query: {...query, dark: ''}});
							}
						}}/>
						<Text>Темная тема</Text>
					</div>
				</Card.Body>

			</Card>
		</Grid>
	);
};

export default Profile;
