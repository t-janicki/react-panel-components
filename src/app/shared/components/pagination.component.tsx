import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(2),
		},
	},
}));

interface Props {
	totalPages: number,
}

const PaginationComponent: React.FC<Props> = ({totalPages}) => {
	const classes = useStyles();
	const [currentPage, setCurrentPage] = React.useState(1);
	const handleChange = (event: Event, value: number) => {
		setCurrentPage(value);
	};

	return (
		<div className={classes.root}>
			<Pagination count={totalPages}
						page={currentPage}
						onChange={handleChange}
						defaultPage={1}
						variant="outlined"
						shape="rounded" />
		</div>
	);
};

export default PaginationComponent;
