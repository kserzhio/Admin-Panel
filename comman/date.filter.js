export default (value,type) =>{
    const date = new Date(value)
    if(type === 'date'){
        return date.toLocaleString()
    } else if (type === 'time') {
        return date.toLocaleString()
    }
    return date.toLocaleString()
}
