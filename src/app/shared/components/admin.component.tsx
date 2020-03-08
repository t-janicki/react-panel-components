import * as React from 'react'
import { Link } from 'react-router-dom'

const AdminComponent: React.FC = () => {
	return <>
		<div>
			ADMIN PAGE
			{console.log('admin component')}
			<Link to="/home">
				<button type="button">
					HOME PAGE
				</button>
			</Link>
			<Link to="/login">
				<button type="button">
					LOGIN PAGE
				</button>
			</Link>
			<button>TEST</button>
		</div>
	</>
};

export default AdminComponent;
