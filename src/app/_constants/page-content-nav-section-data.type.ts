import {IPageContentNavData} from '@models'

export class PageContentNavSectionDataType {
	public static pageContentNavDataProject: IPageContentNavData[] = [
		{
			hrefLink: 'project#top',
			displayName: 'TOP'
		},
		{
			hrefLink: 'project#enigma-adventure',
			displayName: 'ENIGMA ADVENTURE'
		},
		{
			hrefLink: 'project#outrun-undeath',
			displayName: 'OUTRUN UNDEATH'
		}
	]
	public static pageContentNavDataHome: IPageContentNavData[] = [
		{
			hrefLink: '#top',
			displayName: 'TOP'
		},
		{
			hrefLink: '#experience',
			displayName: 'EXPERIENCE'
		},
		{
			hrefLink: '#education',
			displayName: 'EDUCATION'
		}
	]
	public static pageContentNavDataAbout: IPageContentNavData[] = [
		{
			hrefLink: 'about#top',
			displayName: 'TOP'
		}
	]
	public static pageContentNavDataProduct: IPageContentNavData[] = [
		{
			hrefLink: 'product#top',
			displayName: 'TOP'
		}
	]
}