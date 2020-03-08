import React from 'react'
import '../styles/loader.css'

const Loader: React.FC = () => {
	return (
		<div id="splash-screen">
			<div className="center">
				<div className="spinner-wrapper">
					<div className="spinner">
						<div className="inner">
							<div className="gap"/>
							<div className="left">
								<div className="half-circle"/>
							</div>
							<div className="right">
								<div className="half-circle"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Loader);
