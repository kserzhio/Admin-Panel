export const actions = {
    async fetchAdmin({}){
            return await new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        {title:'Post',data:new Date(),view:22,comments:[1,2],_id:'222'},
                        {title:'Post2',data:new Date(),view:22,comments:[1,2],_id:'2232'},
                        {title:'Post3',data:new Date(),view:22,comments:[1,2],_id:'22245'}
                    ])
                },1000)
            })
    },
    async remove({},id){

    }
}
