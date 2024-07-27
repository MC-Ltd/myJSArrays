const version = `ver.2024-07-28`;

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById("pVersion").textContent = version;



	/*
	DarkMode
	*/
	const inputDarkMode = document.getElementById("inputDarkMode")
	const body = document.body;

	// Перевірка, чи зберігся режим у localStorage
	if (localStorage.getItem('theme') === 'dark') {
		body.classList.add('dark-mode');
		inputDarkMode.checked = true;
	}

	inputDarkMode.addEventListener('change', () => {
		if (body.classList.contains('dark-mode')) {
			body.classList.remove('dark-mode');
			localStorage.setItem('theme', 'light');
		} else {
			body.classList.add('dark-mode');
			localStorage.setItem('theme', 'dark');
		}
	});

	/*
	Language
	*/
	const selectLanguage = document.getElementById('selectLanguage');

	// Перевірка, чи зберігся режим у localStorage
	const savedLanguage = localStorage.getItem('language');
	if (savedLanguage === null) {
	//} else {
		savedLanguage = 'en';
	}

	fetch('./json/interface.json')
		.then(response => response.json())
		.then(data => {
			populateLanguageSwitcher(data.languages);
			selectLanguage.addEventListener('change', () => {
				const language = selectLanguage.value;
				loadLanguage(data, language);
				
			});

			// Завантажуємо мову за замовчуванням
			// const defaultLanguage = 'en';
			// loadLanguage(data, defaultLanguage);
			loadLanguage(data, savedLanguage);
		})
		.catch(error => console.error('Error loading languages:', error));
});


function openTab(argEvent, argTabName) {
	// Declare all variables
	let i = 0;
	let arrTabContent = [];
	let arrTabLinks = [];

	// Get all elements with class="classTabContent" and hide them
	arrTabContent = document.getElementsByClassName("classTabContent");
	for (i = 0; i < arrTabContent.length; i++) {
		arrTabContent[i].style.display = "none";
	}

	// Get all elements with class="classTabLinks" and remove the class "active"
	arrTabLinks = document.getElementsByClassName("classTabLinks");
	for (i = 0; i < arrTabLinks.length; i++) {
		arrTabLinks[i].className = arrTabLinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(argTabName).style.display = "block";
	argEvent.currentTarget.className += " active";
}



/*
Language / start
*/
function populateLanguageSwitcher(languages) {
	const selectLanguage = document.getElementById('selectLanguage');
	for (const [code, {name, flag}] of Object.entries(languages)) {
		const option = document.createElement('option');
		option.value = code;
		option.textContent = name;
		option.style.backgroundImage = `url('${flag}')`;
		selectLanguage.appendChild(option);
	}
}

function loadLanguage(data, language) {
	const tags = data.tagsIDs;
	for (const [tag, translations] of Object.entries(tags)) {
		const element = document.getElementById(tag);
		if (element) {
			const translation = translations[language];
			element.textContent = translation.text;
			element.setAttribute('title', translation.tooltip);
		}
	}
	updateFlag(language, data.languages);

	localStorage.setItem('language', language);
}

function updateFlag(language, languages) {
	const selectLanguage = document.getElementById('selectLanguage');
	const flagUrl = languages[language].flag;
	selectLanguage.style.backgroundImage = `url('${flagUrl}')`;
}
/*
Language / end
*/

function myFunction(x) {
	x.classList.toggle("change");
  }