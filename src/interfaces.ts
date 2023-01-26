export interface IOriginalEditFields {
	title: string,
	description: string,
	language: string
}

export const blankNewBook: IOriginalEditFields = {
	title: '',
	description: '',
	language: ''
}

export interface IBook {
	_id: string,
	title: string,
	description: string,
	numberOfPages: number,
	language: string,
	languageText: string,
	imageUrl: string,
	buyUrl: string,
	isBeingEdited: boolean
	originalEditFields: IOriginalEditFields
}

export interface ILoginFormFields {
	username: string;
	password: string;
}

export interface ILoginForm {
	fields: ILoginFormFields;
	message: string;
}

export const blankLoginForm = {
	fields: {
		username: '',
		password: ''
	},
	message: ''
}
