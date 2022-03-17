$(document).ready(function(){
    var urlsky = 'https://sky-frontend.herokuapp.com/movies'; 
    var primeiraVezSeries = true;
    var primeiraVezCanais = true;
    
    $.get(urlsky,function(data){
        var arraySessionsFilmes = ['sessonMarvel', 'sessionComics', 'sessionNacionais', 'sessionMaisTemidos'];

        var filmes = data.contents;
        AddImagensFilmes(filmes, arraySessionsFilmes);

        $("#nav-series-tab").on("click", function(){   
            if(!primeiraVezSeries) return;

            var arraySessionsSeries = ['sessionMaisTemidos_series','sessionNacionais_series'];
            AddImagensFilmes(filmes, arraySessionsSeries);
            setTimeout(function(){
                HabilitarSlideBanner('bannerSeries');
                HabilitarSlideSession("sessionSlideSeries");
            }, 500 );

            primeiraVezSeries = false;
        }); 
    
        $("#nav-canais-tab").on("click", function(){   
            if(!primeiraVezCanais) return;
                
            var arraySessionsCanais = ['sessonMarvel_canais', 'sessionComics_canais'];
            AddImagensFilmes(filmes, arraySessionsCanais);
            setTimeout(function(){
                HabilitarSlideBanner('bannerCanais');
                HabilitarSlideSession("sessionSlideCanais");
            }, 500);

            primeiraVezCanais = false;
        });

        HabilitarSlideBanner('bannerFilmes');
        HabilitarSlideSession("sessionSlide");
    });

    function AddImagensFilmes(filmesArray, arraySessions){
        filmesArray.map(function(item) {
            var icon = (item.isBlocked) ? "" : '<div class="iconCarrinho"><img class="carrinho" src="./assets/images/icon_carrinho.png"></div>';
            
            var image = item.images[0].url;
            var itemHtml = '<div class="image">'+icon+'<div><img class="fotoPrincipal" src="'+image+'"></div></div>';
            
            arraySessions.map(function(item){
                $('#'+item).append(itemHtml);
            });
        });
    }
    // function ObterFilmes(){
    //     return new Promise((resolve) => {
    //         setTimeout(function(){
    //             resolve(true);
    //             return;

    //         }, 5000);
    //     });
    // }

    // function ObterFilmes(){
    //     $.get(urlsky,function(data){
    //         data.contents.map(function(item) {
    //             var icon = (item.isBlocked) ? "" : '<div class="iconCarrinho"><img class="carrinho" src="./assets/images/icon_carrinho.png"></div>';
                
    //             var image = item.images[0].url;
    //             var itemHtml = '<div class="image">'+icon+'<div><img class="fotoPrincipal" src="'+image+'"></div></div>';
                
    //             arraySessions.map(function(item){
    //                 $('#'+item).append(itemHtml);
    //             });
    //         });
    //     });
    // }

    function HabilitarSlideBanner(ref){
        $('#'+ref).slick({                  
            centerMode: true,
            centerPadding: '30%',                    
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
            responsive: [
            {
                breakpoint: 1140,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '25%',
                   //slidesToShow: 2
                    }
            },
            {
                breakpoint: 768,
                settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10%',
                        //slidesToShow: 2
                    }
            },
            {
                breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '1%',
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    function HabilitarSlideSession(ref){
        $('.'+ref).slick({
            centerPadding: '60px',
            slidesToShow: 7,
            responsive: [
                {
                breakpoint: 1140,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '50px',
                        slidesToShow: 4
                    }
                },
                {
                breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                        }
                },
                {
                breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }

                }
            ]
        });

        $('.'+ref).show();
    }
});      