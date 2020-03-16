import * as React from 'react'
import { useState } from "react";

interface Data {
	id: string,
	text: string,
	createdAt: string
}

const HomeComponent: React.FC = () => {
	const [currentUser, setCurrentUser] = useState();
	const [data, setData] = useState<Data[]>([]);

	// console.log('Home Component');
	// console.log(currentUser);
	//
	// const handleSubscription = () => {
	// 	UserStore.getCurrentUserSubject()
	// 		.subscribe(user => {
	// 			setCurrentUser(user)
	// 		})
	// };
	//
	// const user: User = {
	// 	id: 1,
	// 	name: 'TestSubscription',
	// 	email: 'testEmail',
	// 	surname: 'test',
	// 	roles: []
	// };

	// const handleSetSubject = () => {
	// 	UserStore.setCurrentUserSubject(user)
	// };

	// const testFetch = async () => {
	// 	const result = interval(1000).pipe(
	// 		startWith(0),
	// 		switchMap(async () => await axios.get('/stream/tweets')
	// 			.then((response) => response.data)));
	//
	// 	result.subscribe(data => {
	// 		setData(data)
	// 	});
	// };
	//
	// useEffect(() => {
	// 	testFetch();
	// 	console.log(data)
	// 	console.log('new')
	// }, [data]);

	// const eventSource = new EventSource('/stream/tweets');
	// eventSource.onopen = (event:any) => console.log('open', event);
	// eventSource.onmessage = (event: any) => {
	// 	return  JSON.parse(event.data).source;
	// };
	// eventSource.onerror = (event:any) => console.log('error', event)


	return <>
		<div>
			HOME PAGE
			<div>
				{/*<Button onClick={handleSubscription}>SET CURRENT USER STATE</Button>*/}
			</div>
			<div>
				{/*<Button onClick={handleSetSubject}>SET NEW SUBJECT</Button>*/}
			</div>
		</div>
	</>
};

export default HomeComponent;
