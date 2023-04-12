const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


for (let i = 0; i < team.length; i++) {
  
  //MILESTONE 1 - 2
   let singoloMembro = (team[i])
   console.log(singoloMembro[`name`])
   console.log(singoloMembro[`role`])
   
   document.getElementById(`container`).innerHTML += `
   <div class="card" style="width: 18rem;">
        <img src="./img/${singoloMembro[`image`]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 >${(singoloMembro[`name`])}</h3>
            <span>${(singoloMembro[`role`])}</span>
        </div>
    </div>
   ` 
}

//`<li>${(singoloMembro[`name`])}, ${(singoloMembro[`role`])}</li>`

 // for(let key in singoloMembro){
  //   console.log(singoloMembro[key])
  // }