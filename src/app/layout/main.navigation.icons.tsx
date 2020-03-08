import * as React from "react";
import {
	AccountBox,
	FontDownload, Home,
	Settings,
	SupervisorAccount,
	VpnKey
} from "@material-ui/icons";

export const menuIcon = (icon: string) => {
	switch (icon) {
		case 'ADMIN':
			return <SupervisorAccount/>;
		case 'LOGIN':
			return <VpnKey/>;
		case 'SETTINGS':
			return <Settings/>;
		case 'FONT':
			return <FontDownload/>;
		case 'HOME':
			return <Home/>;
		case 'USER':
			return <AccountBox/>;
	}
};
