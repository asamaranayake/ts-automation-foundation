import {lockedOutUser, standardUsers} from './test-data/users';
import {createTestUser} from './factories/userFactory';
import {printUserScenario} from './utils/printUtils';


const testUserOne = createTestUser({ username: 'admin_user', role: 'admin' });
const testUserTwo = createTestUser();

printUserScenario(testUserOne);
printUserScenario(testUserTwo);
printUserScenario(lockedOutUser);