//Fetch operation using async await keywords

const loadPersons= async()=> {
    try{
        const url= `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/AllBillionaires.json`;

        const res= await fetch(url);
        const data= await res.json();
        displayPersonDetails(data);
    }
    catch(error){
        console.log(error);
    }
}

const displayPersonDetails= (persons)=>{
    const billionairesContainer= document.getElementById('billionaires-container');
    billionairesContainer.classList.remove('hidden');

    const billionairesBoxes= document.getElementById('billionaires-boxes');

    if(persons.length>12){
        persons= persons.slice(0, 12);
    }
    else{
        const buttonShowMore= document.getElementById('btn-show-more');
        buttonShowMore.classList.add= 'hidden';
    }

    
    persons.forEach(person => {
        // console.log(person.personName? person.personName: 'unavailable');

        const boxDiv= document.createElement('div');
        boxDiv.classList.add('col');
        boxDiv.innerHTML=`
        <div style="background-color: rgb(9, 9, 52);" class="p-3">
                <h2 class="text-center text-white text-2xl font-semibold mb-5">${person.personName? person.personName: 'unavailable'}</h2>
                <div class="flex items-center justify-evenly gap-5 mb-3">
                    <img class="w-1/2" src="${person.squareImage? person.squareImage: 'unavailable'}" alt="">
                    <div class="border-l-2 text-white pl-3">
                        <p>Citizenship: ${person.countryOfCitizenship? person.countryOfCitizenship: 'unavailable'}</p>
                        <p>State: ${person.state? person.state: 'unavailable'}</p>
                        <p>City: ${person.city}</p>
                        <p>Private Worth: $${person.privateAssetsWorth? person.privateAssetsWorth: 'unavailable'}</p>
                        <p>Total Worth: $${person.finalWorth? person.finalWorth: 'unavailable'}</p>
                    </div>
                </div>
            </div>
        `
        billionairesBoxes.appendChild(boxDiv);
    });
}

const eventProcessor= () =>{
    const homeContainer= document.getElementById('home-page-container');
    homeContainer.textContent='';
    loadPersons();
}

document.getElementById('all-billionaires').addEventListener('click', function(){
    eventProcessor();
})


document.getElementById('btn-show-more').addEventListener('click', function(){
    eventProcessor();
})

document.getElementById('search-box').addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    searchBox.innerText = '';
    // loadPersonDetails(searchText);
    }
})



