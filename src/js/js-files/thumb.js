(function () {
    const thumb = {
        init(){
            this.thumbs = document.querySelectorAll('.projet-thumbs__thumb');
            this.counter = document.querySelectorAll('.thumb_counter');
            this.p = document.querySelectorAll('.projet-thumbs__p');

            for(let i=0; i < this.thumbs.length; i++){
                this.thumbs[i].addEventListener('click', ()=>{
                    if(this.counter[i].innerHTML === '0'){
                        this.counter[i].innerHTML = '1';
                        this.thumbs[i].classList.add('bounce');
                        this.p[i].classList.add('projet-thumbs__p_after');
                    } else if(this.counter[i].innerHTML !== '0'){
                        this.counter[i].innerHTML = '0';
                        this.thumbs[i].classList.remove('bounce');
                        this.p[i].classList.remove('projet-thumbs__p_after');
                    }
                })
            }
        }
    }
    thumb.init();
})();