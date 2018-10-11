var car=(function(){
    return {
        init(ele){
            this.ele=ele;
            this.$welcome = this.$('.welcome');
            this.event();
            if (localStorage.email!='') {
                this.success();
            }
        },
        event(){

        },
        $(id){
            return document.querySelector(id);
        },
        success(){
             
            console.log(localStorage.email)
            this.$welcome.innerHTML = `欢迎 ${localStorage.email}`
        }
    }
}())