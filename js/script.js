const app = new Vue ({
    el: '#root',
    data:{
        emails : []
    },

    created(){

        for (let i= 1; i<=10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
             (res)=>{
                const email = res.data.response;
                this.emails.push(email); 
             }   
            )
        }
        
    }
})