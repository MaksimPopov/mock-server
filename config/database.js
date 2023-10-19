const homepage = {
  message: "success",
  hubs: [
    {
      type: "emphasis",
      data: {
        id: 11230,
        title: "Oppenheimer",
        date: "20.07.2023",
        cover:
          "https://images.bauerhosting.com/empire/2022/07/oppenheimer-poster-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
        subtitle:
          "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      },
    },
    {
      type: "row",
      title: "Most Popular",
      data: [
        {
          id: 11231,
          name: "Barbie",
          cover:
            "https://luxurylondon.co.uk/wp-content/uploads/2023/07/margot-robbie-barbie-c-warner-bros-pictures-hero-1400x0-c-default.jpg",
        },
        {
          id: 11232,
          name: "Gran Turismo",
          cover:
            "https://itc.ua/wp-content/uploads/2023/08/gt_movie_poster_crop.jpg",
        },
        {
          id: 11233,
          name: "The Exorcist",
          cover:
            "https://bloody-disgusting.com/wp-content/uploads/2023/07/exorcist-posters.png",
        },
        {
          id: 11234,
          name: "Pesik Patron4ik",
          cover:
            "https://rubryka.com/wp-content/uploads/2022/08/pes-patron-1280x720.jpeg",
        },
        {
          id: 11235,
          name: "Killers of the Flower Moon",
          cover:
            "https://www.apple.com/tv-pr/shows-and-films/k/killers-of-the-flower-moon/images/show-home-graphic-header/Apple_TV_Killers_of_the_Flower_Moon_key_art_sh_cr.jpg",
        },
      ],
    },
    {
      type: "row",
      title: "Rewatch Classics",
      data: [
        {
          id: 11236,
          name: "The Shawshank Redemption",
          cover:
            "https://media.vanityfair.com/photos/541c84101019a3955fea0c49/1:1/w_690,h_460,c_limit/s-vfh-shawshank-redemption-20th-anniversary.jpg",
        },
        {
          id: 11237,
          name: "12 Angry Men",
          cover:
            "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-12-angry-men-1957/EB20020929REVIEWS08209290301AR.jpg",
        },
        {
          id: 11238,
          name: "Il buono, il brutto, il cattivo",
          cover:
            "https://movieplayer.net-cdn.it/t/images/2021/11/20/il-buono-il-brutto-il-cattivo-4k-recensione_png_1200x0_crop_q85.jpg",
        },
        {
          id: 11239,
          name: "Se7en",
          cover:
            "https://m.media-amazon.com/images/M/MV5BMjI3MTU0ODQ2MF5BMl5BanBnXkFtZTcwNTQzNTIwNA@@._V1_.jpg",
        },
        {
          id: 11240,
          name: "Psycho",
          cover:
            "https://assets1.cbsnewsstatic.com/hub/i/2017/10/21/453edbf3-4009-4c31-a7b8-64404aa3d252/psycho-shower-scene-mother-620.jpg",
        },
      ],
    },
  ],
};

const movies = {
  11230: {
    id: 11230,
    name: "Oppenheimer",
    date: "20.07.2023",
    tagline: "The Power of Oppenheimer Thinking",
    cover:
      "https://images.bauerhosting.com/empire/2022/07/oppenheimer-poster-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
    img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    genre: "Action",
    mins: 130,
    description:
      "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    vote: 389,
    company:
      "https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
  },
  11231: {
    id: 11231,
    name: "Barbie",
    date: "20.07.2023",
    tagline: "She's everything. He's just Ken.",
    cover:
      "https://luxurylondon.co.uk/wp-content/uploads/2023/07/margot-robbie-barbie-c-warner-bros-pictures-hero-1400x0-c-default.jpg",
    img: "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    genre: "Comedy",
    mins: 124,
    description:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/rIxhJMR7oK8b2fMakmTfRLY2TZv.png",
  },
  11232: {
    id: 11232,
    name: "Gran Turismo",
    date: "20.07.2023",
    tagline: "From gamer to racer",
    cover: "https://itc.ua/wp-content/uploads/2023/08/gt_movie_poster_crop.jpg",
    img: "https://image.tmdb.org/t/p/original/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
    genre: "Action",
    mins: 144,
    description:
      "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
  },
  11233: {
    id: 11233,
    name: "The Exorcist",
    date: "20.07.2023",
    tagline: "You call. They'll answer.",
    cover:
      "https://bloody-disgusting.com/wp-content/uploads/2023/07/exorcist-posters.png",
    img: "https://image.tmdb.org/t/p/original/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    genre: "Horror",
    mins: 100,
    description:
      "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/Aq35mXuZv7lhPm8a60YKRaB9Vek.png",
  },
  11234: {
    id: 11234,
    name: "Pesik Patron4ik",
    date: "20.07.2023",
    tagline: "Unleash your powers.",
    cover:
      "https://rubryka.com/wp-content/uploads/2022/08/pes-patron-1280x720.jpeg",
    img: "https://image.tmdb.org/t/p/original/aTvePCU7exLepwg5hWySjwxojQK.jpg",
    genre: "Comedy",
    mins: 114,
    description:
      "A magical meteor crash-lands in Adventure City, gives the PAW Patrol pups superpowers, and transforms them into The Mighty Pups. When the Patrol's archrival Humdinger breaks out of jail and teams up with mad scientist Victoria Vance to steal the powers for themselves, the Mighty Pups must save Adventure City and stop the supervillains before it's too late.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/8PAf5K4VVI6xO9SjB7bxLtpi4xH.png",
  },
  11235: {
    id: 11235,
    name: "Killers of the Flower Moon",
    date: "20.07.2023",
    tagline: "They'll die when they're dead.",
    cover:
      "https://www.apple.com/tv-pr/shows-and-films/k/killers-of-the-flower-moon/images/show-home-graphic-header/Apple_TV_Killers_of_the_Flower_Moon_key_art_sh_cr.jpg",
    img: "https://th.bing.com/th?id=OIF.%2bdrmdylFDCAs5Kslz5dFRg&pid=ImgDet&rs=1",
    genre: "Action",
    mins: 115,
    description:
      "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/9SiK63A0hOmn3FiLCEqydtE1ZQW.png",
  },
  11236: {
    id: 11236,
    name: "The Shawshank Redemption",
    date: "20.07.2023",
    tagline: "They'll die when they're dead.",
    cover:
      "https://media.vanityfair.com/photos/541c84101019a3955fea0c49/1:1/w_690,h_460,c_limit/s-vfh-shawshank-redemption-20th-anniversary.jpg",
    img: "https://th.bing.com/th/id/OIP.yobjBRMMdekQvZwGHeebKgHaLH?pid=ImgDet&rs=1",
    genre: "Action",
    mins: 115,
    description:
      "The Shawshank Redemption is a 1994 American prison drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. The film tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis Redding (Morgan Freeman), and becomes instrumental in a money laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/9SiK63A0hOmn3FiLCEqydtE1ZQW.png",
  },
  11237: {
    id: 11237,
    name: "12 Angry Man",
    date: "20.07.2023",
    tagline: "They'll die when they're dead.",
    cover:
      "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-12-angry-men-1957/EB20020929REVIEWS08209290301AR.jpg",
    img: "https://th.bing.com/th/id/R.380fcd1a59d1fd26d9205f1fd90f0d68?rik=Fu2zBN3pyiERWQ&pid=ImgRaw&r=0",
    genre: "Action",
    mins: 115,
    description:
      "Twelve Angry Men is a play and a film by Reginald Rose that depicts the deliberation of a jury in a homicide trial12345. The jury must decide whether a 16-year-old boy from the ghetto is guilty of murdering his father, with a death penalty at stake45. The play and the film explore the challenges and biases that affect the American judicial system, and the role of reason and compassion in reaching a fair verdict124.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/9SiK63A0hOmn3FiLCEqydtE1ZQW.png",
  },
  11238: {
    id: 11238,
    name: "Il buono, il brutto, il cattivo",
    date: "20.07.2023",
    tagline: "They'll die when they're dead.",
    cover:
      "https://movieplayer.net-cdn.it/t/images/2021/11/20/il-buono-il-brutto-il-cattivo-4k-recensione_png_1200x0_crop_q85.jpg",
    img: "https://m.media-amazon.com/images/I/61fPbNv2eKL._AC_UF894,1000_QL80_.jpg",
    genre: "Western",
    mins: 115,
    description:
      "Il buono, il brutto, il cattivo è un film del 1966 diretto da Sergio Leone. Tra i più celebri western della storia del cinema, è considerato la quintessenza del fortunato genere spaghetti western e uno dei migliori film di sempre. Girato sulla scia del successo di Per un pugno di dollari e Per qualche dollaro in più, il film",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/9SiK63A0hOmn3FiLCEqydtE1ZQW.png",
  },
  11239: {
    id: 11239,
    name: "Se7en",
    date: "20.07.2023",
    tagline: "They'll die when they're dead.",
    cover:
      "https://m.media-amazon.com/images/M/MV5BMjI3MTU0ODQ2MF5BMl5BanBnXkFtZTcwNTQzNTIwNA@@._V1_.jpg",
    img: "https://m.media-amazon.com/images/I/61fPbNv2eKL._AC_UF894,1000_QL80_.jpg",
    genre: "Horror",
    mins: 115,
    description:
      "Two detectives, one about to leave and one entering find themselves following a series of murders, they find clues linking the deaths and the seven sins. The movie follows the cops, their family and tracking down the mass murderer who delivers an unforgettable ending.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/9SiK63A0hOmn3FiLCEqydtE1ZQW.png",
  },
  11240: {
    id: 11240,
    name: "Psycho",
    date: "20.07.2023",
    tagline: "They'll die when they're dead.",
    cover:
      "https://assets1.cbsnewsstatic.com/hub/i/2017/10/21/453edbf3-4009-4c31-a7b8-64404aa3d252/psycho-shower-scene-mother-620.jpg",
    img: "https://m.media-amazon.com/images/I/610L8FnFWpL._AC_UF894,1000_QL80_.jpg",
    genre: "Horror",
    mins: 115,
    description:
      "Two detectives, one about to leave and one entering find themselves following a series of murders, they find clues linking the deaths and the seven sins. The movie follows the cops, their family and tracking down the mass murderer who delivers an unforgettable ending.",
    vote: 1234,
    company:
      "https://image.tmdb.org/t/p/original/9SiK63A0hOmn3FiLCEqydtE1ZQW.png",
  },
};
https: module.exports = {
  homepage,
  movies,
};
