//  ARRAY CON IMMAGINI, TITOLI E TESTI


const slides = [
{
        image: '/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// console.log(slides);


const { createApp } = Vue

//  app
createApp({
  data() {
   
    return {

  images: [
{
    image: '/01.webp',
    title: 'Marvel\'s Spiderman Miles Morales',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
}, {
    image: '/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
}, {
    image: '/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
}, {
    image: '/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
}, {
    image: '/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
}
  ],

  //indice immagine corrente
  currentImage: 0,

}

},

  methods: {
    //funzioni bottoni

    nextButton() {
      if(this.images.length - 1 === this.currentImage){
  
        this.currentImage = 0;
  
      } else {
  
        this.currentImage++;
  
      }
  
      
    },
  

    prevButton() {
      if (this.currentImage === 0) {
        this.currentImage = this.images.length - 1
  
      } else {
  
        this.currentImage--
        
      }
      
    },

    changeImg(indice){
      this.currentImage = indice
      console.log(indice)
    }
  
  }
}).mount('#app')
