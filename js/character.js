(() => {
   

    // Get Each Character in the list of characters in the selection section
    let charOptions = document.querySelectorAll('.portrait');
    
    charOptions.forEach(option => {
        
        option.addEventListener('click', e =>{
            switch(option.id){
                case "charOne":
                    console.log("1");
                   
                    break;
                case "charTwo":
                    console.log("2");
                    document.getElementById('charCol').style.backgroundImage = "url('../images/characters/icemechanic/Icemechanic.jpg')";
                    let thorn = new CharacterDisplay();
                    thorn.changeLayout(0);
                    
                    break;
                case "charThree":
                    console.log("3");
                    document.getElementById('charCol').style.backgroundImage = "url('../images/characters/thorn/thorn.jpg')";
                    let iceMech = new CharacterDisplay();
                    iceMech.changeLayout(1);
                    
                    break;
                case "charFour":
                    console.log("4");
                    break;
                case "charFive":
                    console.log("5");
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
        let injectLocationLeft = document.querySelector('#leftItems');
        let injectItemLeft = '';

        let injectLocationRight = document.querySelector('#rightItems');
        let injectItemRight = '';

        injectItemLeft = '';
        injectItemLeft += `<article class = "item">
        <div id = "${characters[index].equipment.head}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.head}</p>
        </article>`;
        injectItemLeft += `<article class = "item">
        <div id = "${characters[index].equipment.neck}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.neck}</p>
        </article>`;
        injectItemLeft += `<article class = "item">
        <div id = "${characters[index].equipment.shoulders}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.shoulders}</p>
        </article>`;
        injectItemLeft += `<article class = "item">
        <div id = "${characters[index].equipment.cloak}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.cloak}</p>
        </article>`;
        injectItemLeft += `<article class = "item">
        <div id = "${characters[index].equipment.chest}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.chest}</p>
        </article>`;
        injectItemLeft += `<article class = "item">
        <div id = "${characters[index].equipment.shirt}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.shirt}</p>
        </article>`;
        injectItemLeft += `<article class = "item">
        <div id = "${characters[index].equipment.tabard}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.tabard}</p>
        </article>`;
        injectItemLeft += `<article class = "item">
        <div id = "${characters[index].equipment.wrists}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.wrists}</p>
        </article>`;
        injectLocationLeft.innerHTML = injectItemLeft;

        injectItemRight += `<article class = "item">
        <div id = "${characters[index].equipment.gloves}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.gloves}</p>
        </article>`;
        injectItemRight += `<article class = "item">
        <div id = "${characters[index].equipment.belt}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.belt}</p>
        </article>`;
        injectItemRight += `<article class = "item">
        <div id = "${characters[index].equipment.pants}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.pants}</p>
        </article>`;
        injectItemRight += `<article class = "item">
        <div id = "${characters[index].equipment.boots}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.boots}</p>
        </article>`;
        injectItemRight += `<article class = "item">
        <div id = "${characters[index].equipment.ringOne}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.ringOne}</p>
        </article>`;
        injectItemRight += `<article class = "item">
        <div id = "${characters[index].equipment.ringTwo}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.ringTwo}</p>
        </article>`;
        injectItemRight += `<article class = "item">
        <div id = "${characters[index].equipment.trinketOne}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.trinketOne}</p>
        </article>`;
        injectItemRight += `<article class = "item">
        <div id = "${characters[index].equipment.trinketTwo}" class="itemImg"></div>
        <p class = "descriptionText">${characters[index].equipment.trinketTwo}</p>
        </article>`;
        injectLocationRight.innerHTML = injectItemRight;
    }
}