import * as types from '../constants/actionTypes';

const initialState = {
	drawerVisible: false,
	isMobile: false,
	authorized: true,
	token: null,
	products: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.CLOSE_DRAWER:
			return {
				...state,
				drawerVisible: false
			};
		case types.TOGGLE_DRAWER:
			return {
				...state,
				drawerVisible: !state.drawerVisible
			};
		case types.SET_MOBILE:
			if (state.isMobile !== action.isMobile) {
				return {
					...state,
					isMobile: action.isMobile,
					drawerVisible: false
				};
			}

			return state;

		case types.LOGIN:
			return {
				...state,
				authorized: true,
				token: action.token
			};

		case types.LOGOUT:
			return {
				...state,
				authorized: false,
				token: null
			};

		case types.RECEIVE_PRODUCTS:
			return {
				...state,
				products: action.products
			};

		default:
			return state;
	}
};
