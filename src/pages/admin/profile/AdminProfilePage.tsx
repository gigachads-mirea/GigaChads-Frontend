import React from 'react';
import {PageLayout} from '../../../components/PageLayout';
import {Container, Card, Text, Row, Button} from '@nextui-org/react';
import {useGetServersListQuery} from '../../../features/servers/queries';

export const AdminProfilePage = () => {
	// @ts-ignore
	const {data} = useGetServersListQuery({filter: {approved: false}});
	console.log(data)

	return (
			<PageLayout>
				<Container fluid css={{height: "80vh"}}>
					{data && data.map((elem)=>{
						return <Card css={{ mw: "330px" }}>
							<Card.Header>
								<Text b>{elem.name}</Text>
							</Card.Header>
							<Card.Divider />
							<Card.Body css={{ py: "$10" }}>
								<Text>
									{elem.description}
								</Text>
							</Card.Body>
							<Card.Divider />
							<Card.Footer>
								<Row justify="flex-end">
									<Button size="sm" light >
										Подробнее
									</Button>
									<Button size="sm" color="success">Одобрить</Button>
								</Row>
							</Card.Footer>
						</Card>
					})}

				</Container>
			</PageLayout>

	);
};

export default AdminProfilePage;