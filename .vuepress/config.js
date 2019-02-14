module.exports = {
	title: 'Wiklan Dokumentasi',
	description: 'Documentasi Program',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Database', link: '/database/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'About', link: '/about/' }
			
		],
		sidebar: {
			'/guide/': [{
				title: 'Guide',
				collapsable: false,
				children: [
					'',
					'modules/',
				]
			}],
			'/database/': [{
				title: 'Database',
				collapsable:false,
				children: [
					'',
					'table/'
				]
			}]
		}
	}
}