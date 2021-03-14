(function () {
    const svg = {
        init(){
            this.heart = document.querySelector('.heart-img');
            this.oldSrc = this.heart.src;
            this.newSrc = './src/img/svg/heart-filled.svg';
            this.button = document.querySelector('.main-content__contact-heart');

            this.button.addEventListener('click', ()=>{
                if(!this.heart.classList.contains('bounce')){
                    this.heart.src = this.newSrc;
                    this.heart.classList.add('bounce');
                } else {
                    this.heart.src = this.oldSrc;
                    this.heart.classList.remove('bounce');
                }
            })
        }
    }
    svg.init();
})();