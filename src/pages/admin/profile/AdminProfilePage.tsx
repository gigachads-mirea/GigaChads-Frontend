import React from 'react';
import {PageLayout} from '../../../components/PageLayout';
import {Container, Card, Text, Row, Button} from '@nextui-org/react';
import {useGetServersListQuery, useModifyServerMutation} from '../../../features/servers/queries';
import {v4 as uuidv4} from 'uuid';
import {useRouter} from 'next/router';

export const AdminProfilePage = () => {
	const {query, push} = useRouter();
	// @ts-ignore
	const {data} = useGetServersListQuery({filter: {approved: false}});
	const [modifyServer, {}] = useModifyServerMutation();
	console.log(data)

	const goToPage = (pathname: string) => () => push({pathname, query});
	const approveServer = (id) => {modifyServer({id: id, body: {id: id, approved: true}})};

	return (
			<PageLayout>
				<Container fluid css={{height: "80vh", display:"flex", "flex-flow": "row wrap", gap:"20px"}} >
					{data && data.map((elem)=>{
						return <Card css={{ mw: "330px", height: "400px"}} key={uuidv4()}>
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
									<Button size="sm" light onClick={goToPage(`/server/${elem.id}`)}>
										Подробнее
									</Button>
									<Button size="sm" color="success" onClick={()=>approveServer(elem.id)}>Одобрить</Button>
								</Row>
							</Card.Footer>
						</Card>
					})}

				</Container>
			</PageLayout>

	);
};

export default AdminProfilePage;