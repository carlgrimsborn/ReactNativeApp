import * as login from './components/Login/types';
import { FacebookLogin } from './components/Login/actions/index';

/**
 * The global application state as contained in Redux
 *
 * All state objects might not be available.
 *
 * @export
 * @interface appTypes.IApplicationState
 */

export interface IApplicationState {
    // route?: navTypes.INavigationState;
    login?: login.ILoginState;
}
/**
 * Describes possible props for a components.
 *
 * All actions and state objects might not be available.
 *
 * @export
 * @interface IProps
 */

export interface IProps extends IApplicationState {
    dispatch?: any;
    FacebookLogin?: login.FacebookLogin;
}