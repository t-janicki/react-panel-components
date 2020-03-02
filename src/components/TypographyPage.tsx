import * as React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const TypographyPage: React.FC = (): JSX.Element => {

	return <>
		<Grid container spacing={4}>
			<Grid item xs={12} md={6}>
				<div>
					<Typography variant="h1">
						h1. Heading
					</Typography>
					<Typography variant="h2">
						h2. Heading
					</Typography>
					<Typography variant="h3">
						h3. Heading
					</Typography>
					<Typography variant="h4">
						h4. Heading
					</Typography>
					<Typography variant="h5">
						h5. Heading
					</Typography>
					<Typography variant="h6">h6. Heading</Typography>
				</div>
			</Grid>
		</Grid>
	</>
};

export default TypographyPage;
