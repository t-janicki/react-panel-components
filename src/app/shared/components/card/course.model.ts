export interface Course {
	id: string
	title: string
	subTitle: string
	description: string
	category: string
	totalPoints: number
	earnedPoints: number
	length: number
	totalSteps: number
	activeStep: number
	updated: string
	favorite: boolean
	steps: any[]
}
