function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}



// Function for initializing Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',  // Default language
        includedLanguages: 'en,de',  // Enable English & German
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}


// Dynamically load Google Translate script
const translateScript = document.createElement('script');  // Declaring translateScript
translateScript.type = 'text/javascript';
translateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

// Append the script to the head of the document to load it
document.head.appendChild(translateScript);