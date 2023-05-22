import React from 'react';
import { Card, Grid, Text, Button, Row, Container } from "@nextui-org/react";
import {useGetUserQuery} from '../../config/utils/testQuery';

const ServerCards = (props: any) => {
	const {data} = useGetUserQuery();
	let serverData = [
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
		{name: 'Krunker Server', game: 'Krunker', address: 'https://krunker.io/?game=FRA:614yd', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra neque et ullamcorper semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis neque et interdum pretium. Suspendisse hendrerit sit amet tellus ut vehicula. Sed maximus enim id feugiat aliquam. Fusce dapibus, turpis id cursus tempus, mauris lectus porttitor tortor, nec viverra mauris sem ac urna. Aenean non augue in nisl pulvinar iaculis."},
	];
	return (
		<Grid.Container gap={2} css={{ width: '100%', 'justify-content': 'center'}} >
				{serverData.map((elem)=>{
					return <Grid  xs={3} >
						<Card css={{ width: '500px', height:'300px'}}>
						<Card.Header>
							<Text b>Krunker Server</Text>
						</Card.Header>
						<Card.Divider />
						<Card.Body css={{ py: "$10" }}>
								<Text>
									<Text b>
										Owner:
									</Text>
									{' MegaUltraPro3000FonPetrushka'}
								</Text>
							<Text>
								<Text b>
									Ip address:
								</Text>
								{' 127.0.0.1'}
							</Text>
							<Text>
								<Text b>
									Current online:
								</Text>
								{' 47'} players
							</Text>
							<Text>
								<Text b>
									Ping:
								</Text>
								{' '} 255
							</Text>
							<Text>
								<Text b>
									Rating:
								</Text>
								{' 4.6'}
							</Text>
						</Card.Body>
						<Card.Divider />
						<Card.Footer>
							<Row justify="flex-end">
								<Button size="sm" light>
									Share
								</Button>
								<Button size="sm" color="primary">
									Learn more
								</Button>
							</Row>
						</Card.Footer>
					</Card></Grid>
				})}
		</Grid.Container>
	);
};

export default ServerCards;