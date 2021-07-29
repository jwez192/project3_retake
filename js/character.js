(() => {
   

    // Get Each Character in the list of characters in the selection section
    let charOptions = document.querySelectorAll('.portrait');
    
    charOptions.forEach(option => {
        
        option.addEventListener('click', e =>{
            let injectLocationLeft = document.querySelector('#leftItems');
            let injectItemLeft = '';

            let injectLocationRight = document.querySelector('#rightItems');
            let injectItemRight = '';
            switch(option.id){
                case "charOne":
                    console.log("1");
                   
                    break;
                case "charTwo":
                    console.log("2");
                    document.getElementById('charCol').style.backgroundImage = "url(../images/characters/icemechanic/Icemechanic.jpg)";
                    injectItemLeft = '';
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[1].equipment.head}" class="itemImg"></div>
                    <p>${characters[1].equipment.head}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[1].equipment.neck}" class="itemImg"></div>
                    <p>${characters[1].equipment.neck}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[1].equipment.shoulders}" class="itemImg"></div>
                    <p>${characters[1].equipment.shoulders}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[1].equipment.cloak}" class="itemImg"></div>
                    <p>${characters[1].equipment.cloak}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[1].equipment.chest}" class="itemImg"></div>
                    <p>${characters[1].equipment.chest}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[1].equipment.shirt}" class="itemImg"></div>
                    <p>${characters[1].equipment.shirt}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[1].equipment.tabard}" class="itemImg"></div>
                    <p>${characters[1].equipment.tabard}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[1].equipment.wrists}" class="itemImg"></div>
                    <p>${characters[1].equipment.wrists}</p>
                    </article>`;
                    injectLocationLeft.innerHTML = injectItemLeft;

                    injectItemRight += `<article class = "item">
                    <div id = "${characters[1].equipment.gloves}" class="itemImg"></div>
                    <p>${characters[1].equipment.gloves}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[1].equipment.belt}" class="itemImg"></div>
                    <p>${characters[1].equipment.belt}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[1].equipment.pants}" class="itemImg"></div>
                    <p>${characters[1].equipment.pants}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[1].equipment.boots}" class="itemImg"></div>
                    <p>${characters[1].equipment.boots}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[1].equipment.ringOne}" class="itemImg"></div>
                    <p>${characters[1].equipment.ringOne}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[1].equipment.ringTwo}" class="itemImg"></div>
                    <p>${characters[1].equipment.ringTwo}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[1].equipment.trinketOne}" class="itemImg"></div>
                    <p>${characters[1].equipment.trinketOne}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[1].equipment.trinketTwo}" class="itemImg"></div>
                    <p>${characters[1].equipment.trinketTwo}</p>
                    </article>`;
                    injectLocationRight.innerHTML = injectItemRight;
                    break;
                case "charThree":
                    console.log("3");
                    document.getElementById('charCol').style.backgroundImage = "url(../images/characters/thorn/thorn.jpg)";
                    injectItemLeft = '';
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[0].equipment.head}" class="itemImg"></div>
                    <p>${characters[0].equipment.head}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[0].equipment.neck}" class="itemImg"></div>
                    <p>${characters[0].equipment.neck}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[0].equipment.shoulders}" class="itemImg"></div>
                    <p>${characters[0].equipment.shoulders}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[0].equipment.cloak}" class="itemImg"></div>
                    <p>${characters[0].equipment.cloak}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[0].equipment.chest}" class="itemImg"></div>
                    <p>${characters[0].equipment.chest}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[0].equipment.shirt}" class="itemImg"></div>
                    <p>${characters[0].equipment.shirt}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[0].equipment.tabard}" class="itemImg"></div>
                    <p>${characters[0].equipment.tabard}</p>
                    </article>`;
                    injectItemLeft += `<article class = "item">
                    <div id = "${characters[0].equipment.wrists}" class="itemImg"></div>
                    <p>${characters[0].equipment.wrists}</p>
                    </article>`;
                    injectLocationLeft.innerHTML = injectItemLeft;

                    injectItemRight += `<article class = "item">
                    <div id = "${characters[0].equipment.gloves}" class="itemImg"></div>
                    <p>${characters[0].equipment.gloves}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[0].equipment.belt}" class="itemImg"></div>
                    <p>${characters[0].equipment.belt}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[0].equipment.pants}" class="itemImg"></div>
                    <p>${characters[0].equipment.pants}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[0].equipment.boots}" class="itemImg"></div>
                    <p>${characters[0].equipment.boots}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[0].equipment.ringOne}" class="itemImg"></div>
                    <p>${characters[0].equipment.ringOne}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[0].equipment.ringTwo}" class="itemImg"></div>
                    <p>${characters[0].equipment.ringTwo}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[0].equipment.trinketOne}" class="itemImg"></div>
                    <p>${characters[0].equipment.trinketOne}</p>
                    </article>`;
                    injectItemRight += `<article class = "item">
                    <div id = "${characters[0].equipment.trinketTwo}" class="itemImg"></div>
                    <p>${characters[0].equipment.trinketTwo}</p>
                    </article>`;
                    injectLocationRight.innerHTML = injectItemRight;
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
}