export interface IMultiPlatformLinkData {
	platform: string,
	platformLogo: string,
	links: IPlatformLinkData[]
}

export interface IPlatformLinkData {
	name: string,
	link: string
}