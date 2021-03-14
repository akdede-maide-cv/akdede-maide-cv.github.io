(function () {
    const ShowItems = {
        init() {
            this.input = document.querySelector('.input__search-form');
            this.value = document.querySelector('.input__search-form').value;
            this.items = document.querySelectorAll('.form__input');
            this.deleteInputValue = document.querySelector('.input__close-container');
            this.typing = '';

            this.input.addEventListener('keydown', (e)=>{
                this.checkField(e)
            });
            this.deleteInputValue.addEventListener('click', ()=>{
               this.deleteField()
            });

        },
        checkField(e){
            if(e.key.length === 1){
                this.typing += e.key;
                this.value = this.typing;

            } else if(e.code === 'Backspace'){
                this.typing = this.typing.substring(0, this.typing.length - 1);
            }
            console.log(this.typing)
            if(this.typing.length >=1){
                this.items.forEach((i)=>{
                    if(i.classList.contains('hidden-items')){
                        i.classList.remove('hidden-items')
                    }
                })
            } else if(this.typing.length === 0 || this.typing === ''){
                this.items.forEach((i)=>{
                    if(!i.classList.contains('hidden-items')){
                        i.classList.add('hidden-items')
                    }
                })
            }
        },
        deleteField(){
            this.typing = this.typing.substring(this.typing.length);
            this.input.value = '';
            if(this.input.value ===''){
                this.items.forEach((i)=>{
                    if(!i.classList.contains('hidden-items')){
                        i.classList.add('hidden-items')
                    }
                })
            }
        }

    }
    ShowItems.init();
})();