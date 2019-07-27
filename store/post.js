const posts = [
    {title:'Post',time:new Date().toLocaleString(),view:22,comments:[1,2],_id:'222'},
    {title:'Post2',time:new Date().toLocaleString(),view:22,comments:[1,2],_id:'2232'},
    {title:'Post3',time:new Date().toLocaleString(),view:22,comments:[1,2],_id:'22245'}
]
export const actions = {
    async fetchAdmin({}){
            return await new Promise(resolve => {
                setTimeout(() => {
                    resolve(posts)
                },1000)
            })
    },
    async update ({},id){

    },
    async remove({},{id,text}){

    },
    async create({commit},{title,text,image}){

        try {
            const fd = new FormData()
            fd.append('title',title)
            fd.append('text',text)
            fd.append('image',image,image.name)

            return await new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                },1000)
            })

        }catch (e) {
            commit('setError',e,{root:true})
            throw e
        }
    },
    async fetchAdminById({},id){
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts.find(p => p._id === id))
            },1000)
        })
    }
}
