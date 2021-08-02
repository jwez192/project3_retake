(() => {
   

    // Get Each Character in the list of characters in the selection section
    let charOptions = document.querySelectorAll('.portrait');
    
    charOptions.forEach(option => {
        
        option.addEventListener('click', e =>{
            switch(option.id){
                case "charOne":         
                    let thorn = new CharacterDisplay();
                    thorn.changeLayout(0);
                   
                    break;
                case "charTwo":    
                    let iceMech = new CharacterDisplay();
                    iceMech.changeLayout(1);
                    
                    break;
                case "charThree":       
                    let grandil = new CharacterDisplay();
                    grandil.changeLayout(2);
                    
                    break;
                case "charFour":       
                     let ghoultak = new CharacterDisplay();
                     ghoultak.changeLayout(3);

                    break;
                case "charFive":
                    let vinha = new CharacterDisplay();
                    vinha.changeLayout(4);
                    break;
                default:
                console.log("blah");
            
            }
        
        })
    })
})();


class CharacterDisplay{
    constructor(){
        
    }
    changeLayout(index){
        // grab left  item column
        let injectLocationLeft = document.querySelector('#leftItems');
        let injectItemLeft = '';

        // grab right item column
        let injectLocationRight = document.querySelector('#rightItems');
        let injectItemRight = '';

        // Grab Character image column
        let injectLocationCharacter = document.querySelector('#charCol');
        let injectCharacterImage = '';

        injectCharacterImage +=
         `<div id="${characters[index].background}"></div>`;

        injectLocationCharacter.innerHTML = injectCharacterImage;

        // change left item column html
        injectItemLeft = '';
        injectItemLeft += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.head}" class="itemImg"></div>
        <p class = "descriptionText text-nowrap">${characters[index].equipmentDescription.head}</p>
        </article>`;
        injectItemLeft += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.neck}" class="itemImg"></div>
        <p class = "descriptionText text-nowrap">${characters[index].equipmentDescription.neck}</p>
        </article>`;
        injectItemLeft += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.shoulders}" class="itemImg"></div>
        <p class = "descriptionText text-nowrap">${characters[index].equipmentDescription.shoulders}</p>
        </article>`;
        injectItemLeft += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.cloak}" class="itemImg"></div>
        <p class = "descriptionText text-nowrap">${characters[index].equipmentDescription.cloak}</p>
        </article>`;
        injectItemLeft += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.chest}" class="itemImg"></div>
        <p class = "descriptionText text-nowrap">${characters[index].equipmentDescription.chest}</p>
        </article>`;
        injectItemLeft += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.shirt}" class="itemImg"></div>
        <p class = "descriptionText text-nowrap">${characters[index].equipmentDescription.shirt}</p>
        </article>`;
        injectItemLeft += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.tabard}" class="itemImg"></div>
        <p class = "descriptionText text-nowrap">${characters[index].equipmentDescription.tabard}</p>
        </article>`;
        injectItemLeft += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.wrists}" class="itemImg"></div>
        <p class = "descriptionText text-nowrap">${characters[index].equipmentDescription.wrists}</p>
        </article>`;
        injectLocationLeft.innerHTML = injectItemLeft;

        // change right item column html
        injectItemRight += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.gloves}" class="itemImg"></div>
        <p class = "descriptionText" text-nowrap>${characters[index].equipmentDescription.gloves}</p>
        </article>`;
        injectItemRight += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.belt}" class="itemImg"></div>
        <p class = "descriptionText" text-nowrap>${characters[index].equipmentDescription.belt}</p>
        </article>`;
        injectItemRight += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.pants}" class="itemImg"></div>
        <p class = "descriptionText" text-nowrap>${characters[index].equipmentDescription.pants}</p>
        </article>`;
        injectItemRight += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.boots}" class="itemImg"></div>
        <p class = "descriptionText" text-nowrap>${characters[index].equipmentDescription.boots}</p>
        </article>`;
        injectItemRight += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.ringOne}" class="itemImg"></div>
        <p class = "descriptionText" text-nowrap>${characters[index].equipmentDescription.ringOne}</p>
        </article>`;
        injectItemRight += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.ringTwo}" class="itemImg"></div>
        <p class = "descriptionText" text-nowrap>${characters[index].equipmentDescription.ringTwo}</p>
        </article>`;
        injectItemRight += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.trinketOne}" class="itemImg"></div>
        <p class = "descriptionText" text-nowrap>${characters[index].equipmentDescription.trinketOne}</p>
        </article>`;
        injectItemRight += `<article class = "item ${characters[index].name} ">
        <div id = "${characters[index].equipment.trinketTwo}" class="itemImg"></div>
        <p class = "descriptionText" text-nowrap>${characters[index].equipmentDescription.trinketTwo}</p>
        </article>`;
        injectLocationRight.innerHTML = injectItemRight;
    }
}