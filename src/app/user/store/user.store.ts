import { BehaviorSubject } from "rxjs";
import { User } from "../model/user.model";

class UserStore {
	private currentUserSubject = new BehaviorSubject(null);

	setCurrentUserSubject = (user: User | void) => {
		this.currentUserSubject.next(user);
	};

	getCurrentUser = (): User => {
		return this.currentUserSubject.value;
	};

	cancelSubscription = () => {
		this.currentUserSubject.unsubscribe();
	}
}

const userStore = new UserStore();

export default userStore;
