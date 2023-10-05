const homepageData = {
  message: "success",
  hubs: [
    {
      type: "high_emphasis",
      data: [
        {
          title: "Oppenheimer",
          date: "20.07.2023",
          cover:
            "https://images.bauerhosting.com/empire/2022/07/oppenheimer-poster-crop.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
          subtitle:
            "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
        },
      ],
    },
    {
      type: "standard_row",
      title: "Most Popular",
      data: [
        {
          name: "Barbie",
          cover:
            "https://luxurylondon.co.uk/wp-content/uploads/2023/07/margot-robbie-barbie-c-warner-bros-pictures-hero-1400x0-c-default.jpg",
        },
        {
          name: "Gran Turismo",
          cover:
            "https://itc.ua/wp-content/uploads/2023/08/gt_movie_poster_crop.jpg",
        },
        {
          name: "The Exorcist",
          cover:
            "https://bloody-disgusting.com/wp-content/uploads/2023/07/exorcist-posters.png",
        },
        {
          name: "Pesik Patron4ik",
          cover:
            "https://rubryka.com/wp-content/uploads/2022/08/pes-patron-1280x720.jpeg",
        },
        {
          name: "Killers of the Flower Moon",
          cover:
            "https://www.apple.com/tv-pr/shows-and-films/k/killers-of-the-flower-moon/images/show-home-graphic-header/Apple_TV_Killers_of_the_Flower_Moon_key_art_sh_cr.jpg",
        },
      ],
    },
    {
      type: "standard_row",
      title: "Rewatch Classics",
      data: [
        {
          name: "The Shawshank Redemption",
          cover:
            "https://media.vanityfair.com/photos/541c84101019a3955fea0c49/1:1/w_690,h_460,c_limit/s-vfh-shawshank-redemption-20th-anniversary.jpg",
        },
        {
          name: "12 Angry Men",
          cover:
            "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-12-angry-men-1957/EB20020929REVIEWS08209290301AR.jpg",
        },
        {
          name: "Il buono, il brutto, il cattivo",
          cover:
            "https://movieplayer.net-cdn.it/t/images/2021/11/20/il-buono-il-brutto-il-cattivo-4k-recensione_png_1200x0_crop_q85.jpg",
        },
        {
          name: "Se7en",
          cover:
            "https://m.media-amazon.com/images/M/MV5BMjI3MTU0ODQ2MF5BMl5BanBnXkFtZTcwNTQzNTIwNA@@._V1_.jpg",
        },
        {
          name: "Psycho",
          cover:
            "https://assets1.cbsnewsstatic.com/hub/i/2017/10/21/453edbf3-4009-4c31-a7b8-64404aa3d252/psycho-shower-scene-mother-620.jpg",
        },
      ],
    },
  ],
};

const config = [
  {
    route: "/ping",
    method: "get",
    output: "pong",
  },
  {
    route: "/api/home",
    method: "get",
    output: homepageData,
  },
];

module.exports = config;
