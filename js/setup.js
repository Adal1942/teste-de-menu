var number = document.getElementById('box');
        for(i=1; i<4; i++){
            var span = document.createElement('span');
            span.textContent = i;
            number.appendChild(span);
        }
        var num = number.getElementsByTagName('span');
        var index = 0;

        function adicao(){
            num[index].style.display = 'none';
            index = (index + 1) % num.length;
            num[index].style.display = 'initial';
        }

        function subtracao(){
            num[index].style.display = 'none';
            index = (index - 1 + num.length) % num.length;
            num[index].style.display = 'initial';
        }
$('.sajid-1').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        760:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

/*área de navbar*/
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li", 
);
mobileNavbar.init();