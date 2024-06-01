const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


const setValues = (fontSize, bgColor) => {
    selectBgColor.value = bgColor;
    selectFontSize.value = fontSize;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor; 

}

//Localstorage
const initialSatup = () => {
    const bgColor = localStorage.getItem("bgColor");
    const fontSize = localStorage.getItem("fontSize");

   if(bgColor && fontSize){
    setValues(fontSize, bgColor);
    }
    if(!bgColor && !fontSize){
        setValues("16px", "aqua");
    }
    if(!bgColor && fontSize){
        setValues(fontSize, "aqua");
    }
    if(bgColor && !fontSize){
        setValues("16px", bgColor);
    }

};


//sige
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
   mainElement.style.fontSize = selectedFontSize;

   localStorage.setItem("fontSize",selectedFontSize);
};
//color
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor",selectedBgColor);
 };

 //remove
const clearLocalStorage = () => {
    //const clearLocalStorage = event.target.value;
    localStorage.removeItem("bgColor",);
    localStorage.removeItem("fontSize",);
    setValues("16px", "aqua");
 };

selectFontSize.addEventListener("change",changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearLocalStorage); 
initialSatup();

