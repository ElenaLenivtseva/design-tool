

function makeTabs() {
	const tabs = document.querySelector('.experts__list');
	const tabsBtn = document.querySelectorAll('.experts__item');
	const tabsContent = document.querySelectorAll('.experts__video');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('experts__item')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('experts__item--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('experts__item--active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('experts__video--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('experts__video--active');
	};
}
makeTabs()
