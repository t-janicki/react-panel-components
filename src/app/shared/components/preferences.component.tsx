import * as React from "react";
import UserStore from '../../user/store/user.store'
import { useState } from "react";
import { User } from "../../user/model/user.model";
import { Button } from "@material-ui/core";

const PreferencesComponent: React.FC = () => {
    // const [currentUser, setCurrentUser] = useState();
    // console.log('PreferencesComponent');
    // console.log(currentUser);
    //
    // const handleSubscription = () => {
    //     UserStore.getCurrentUserSubject()
    //         .subscribe(user => {
    //             setCurrentUser(user)
    //         })
    // };
    //
    // const user: User = {
    //     id: 1,
    //     name: 'TestSubscription',
    //     email: 'testEmail',
    //     surname: 'test',
    //     roles: []
    // };
    //
    // const handleSetSubject = () => {
    //     UserStore.setCurrentUserSubject(user)
    // };

    return <>
        <div>
            PREFERENCES COMPONENT
            <div>
                {/*<Button onClick={handleSubscription}>SET CURRENT USER STATE</Button>*/}
            </div>
            <div>
                {/*<Button onClick={handleSetSubject}>SET NEW SUBJECT</Button>*/}
            </div>
        </div>
    </>
};

export default PreferencesComponent;
