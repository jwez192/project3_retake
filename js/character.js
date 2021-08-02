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
    let charOptionsLeft = document.querySelectorAll('.portraitLeft');
    
    charOptionsLeft.forEach(option => {
        
        option.addEventListener('click', e =>{
            switch(option.id){
                case "charOneLeft":         
                    let thorn = new CharacterDisplay();
                    thorn.changeStatsLeft(0);
                   
                    break;
                case "charTwoLeft":    
                    let iceMech = new CharacterDisplay();
                    iceMech.changeStatsLeft(1);
                    
                    break;
                case "charThreeLeft":       
                    let grandil = new CharacterDisplay();
                    grandil.changeStatsLeft(2);
                    
                    break;
                case "charFourLeft":       
                     let ghoultak = new CharacterDisplay();
                     ghoultak.changeStatsLeft(3);

                    break;
                case "charFiveLeft":
                    let vinha = new CharacterDisplay();
                    vinha.changeStatsLeft(4);
                    break;
                default:
                console.log("blah");
            
            }
        
        })
    })
    let charOptionsRight = document.querySelectorAll('.portraitRight');
    
    charOptionsRight.forEach(option => {
        
        option.addEventListener('click', e =>{
            switch(option.id){
                case "charOneRight":         
                    let thorn = new CharacterDisplay();
                    thorn.changeStatsRight(0);
                   
                    break;
                case "charTwoRight":    
                    let iceMech = new CharacterDisplay();
                    iceMech.changeStatsRight(1);
                    
                    break;
                case "charThreeRight":       
                    let grandil = new CharacterDisplay();
                    grandil.changeStatsRight(2);
                    
                    break;
                case "charFourRight":       
                     let ghoultak = new CharacterDisplay();
                     ghoultak.changeStatsRight(3);

                    break;
                case "charFiveRight":
                    let vinha = new CharacterDisplay();
                    vinha.changeStatsRight(4);
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
    changeStatsLeft(index){
        // grab left  item column
        let injectLocationLeft = document.querySelector('.left');
        let injectItemLeft = '';

        injectItemLeft += `<article class = "col-3">
        <div class="health"></div>
        <p>Health:  ${characters[index].stats.health}</p>
        </article>`;
        injectItemLeft += `<article class = "col-3">
        <div class="int"></div>
        <p>Mana:  ${characters[index].stats.intellect}</p>
        </article>`;
        injectItemLeft += `<article class = "col-3">
        <div class="strength"></div>
        <p>strength:  ${characters[index].stats.strength}</p>
        </article>`;
        injectItemLeft += `<article class = "col-3">
        <div class="stamina"></div>
        <p>stamina:  ${characters[index].stats.stamina}</p>
        </article>`;
        injectItemLeft += `<article class = "col-3">
        <div class="crit"></div>
        <p>crit:  ${characters[index].stats.crit}%</p>
        </article>`;
        injectItemLeft += `<article class = "col-3">
        <div class="haste"></div>
        <p>haste:  ${characters[index].stats.haste}%</p>
        </article>`;
        injectItemLeft += `<article class = "col-3">
        <div class="mastery"></div>
        <p>mastery:  ${characters[index].stats.mastery}%</p>
        </article>`;
        injectItemLeft += `<article class = "col-3">
        <div class="vers"></div>
        <p>vers:  ${characters[index].stats.vers}%</p>
        </article>`;

        injectLocationLeft.innerHTML=injectItemLeft;

    }
    changeStatsRight(index){
        // grab right item column
        let injectLocationRight = document.querySelector('.right');
        let injectItemRight = '';
        
        injectItemRight += `<article class = "col-3">
        <div class="health"></div>
        <p>Health:  ${characters[index].stats.health}</p>
        </article>`;
        injectItemRight += `<article class = "col-3">
        <div class="int"></div>
        <p>Mana:  ${characters[index].stats.intellect}</p>
        </article>`;
        injectItemRight += `<article class = "col-3">
        <div class="strength"></div>
        <p>strength:  ${characters[index].stats.strength}</p>
        </article>`;
        injectItemRight += `<article class = "col-3">
        <div class="stamina"></div>
        <p>stamina:  ${characters[index].stats.stamina}</p>
        </article>`;
        injectItemRight += `<article class = "col-3">
        <div class="crit"></div>
        <p>crit:  ${characters[index].stats.crit}%</p>
        </article>`;
        injectItemRight += `<article class = "col-3">
        <div class="haste"></div>
        <p>haste:  ${characters[index].stats.haste}%</p>
        </article>`;
        injectItemRight += `<article class = "col-3">
        <div class="mastery"></div>
        <p>mastery:  ${characters[index].stats.mastery}%</p>
        </article>`;
        injectItemRight += `<article class = "col-3">
        <div class="vers"></div>
        <p>vers:  ${characters[index].stats.vers}%</p>
        </article>`;

        injectLocationRight.innerHTML=injectItemRight;
    }
}
