class LocalStorageServicio {
    static get(clave) {
        const item =localStorage.getItem(clave)
        
        return item ? JSON.parse(item) : null
    } catch (error) {
        console.log("error leyendo")
        
        return null
    }

    

}
static set(clave, valor ) {

    try{


        localStorage.setItem(clave,JSON.stringify(valor))

    }catch (error){
        console.log("Error almacenando en local storage")
    }
}


export default 