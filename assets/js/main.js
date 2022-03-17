var moveInArray = function (arr, from, to) {
    // Delete the item from it's current position
    var item = arr.splice(from, 1);

    // Move the item to its new position
    arr.splice(to, 0, item[0]);
};

$(document).ready(function(){
    var urlsky = 'https://sky-frontend.herokuapp.com/movies';
    var arraySessions = ['sessonMarvel', 'sessionComics', 'sessionNacionais', 'sessionMaisTemidos'];

    $.get(urlsky,function(data){

        data.contents.map(function(item) {
            var icon = (item.isBlocked) ? "" : '<div class="iconCarrinho"><img class="carrinho" src="./assets/images/icon_carrinho.png"></div>';
            
            var image = item.images[0].url;
            var itemHtml = '<div class="image">'+icon+'<div><img class="fotoPrincipal" src="'+image+'"></div></div>';
            
            arraySessions.map(function(item){
                $('#'+item).append(itemHtml);
            });
        });

        // console.log("boa");
        // await ObterFilmes();
        
        // console.log("teste");
        HabilitarSlideBanner();
        HabilitarSlideSession();
    });

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

    function HabilitarSlideBanner(){
        $('#bannerFilmes, #BannerSeries, #bannerCanais').slick({                  
            centerMode: true,
            centerPadding: '30%',                    
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [
            {
                breakpoint: 1140,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20%',
                    slidesToShow: 3
                    }
            },
            {
                breakpoint: 768,
                settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10%',
                        slidesToShow: 2
                    }
            },
            {
                breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '1%',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    function HabilitarSlideSession(){
        $('.sessionSlide').slick({
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
                        slidesToShow: 3
                        }
                },
                {
                breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }

                }
            ]
        });
    }
});      