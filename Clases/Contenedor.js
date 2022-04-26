const fs = require('fs'); 

class Contenedor{
    constructor(file){
        this.file = file
    }

    async Save(object){
        try {

            const infoTXT = await fs.promises.readFile(this.file,'utf-8'); 
            const infoParsed = JSON.parse(infoTXT); 
            const productId = infoParsed.map(e => e.id);
            let id = 0; 

            for(let i = 0; i < productId.length; i++){
                id < productId[i] || id == productId[i] ? id = productId[i] + 1 : id = undefined; 
            }
            object.id = id;

            infoParsed.push(object); 

            const newProductString = JSON.stringify(infoParsed,null,2); 
            const newProductTXT = await fs.promises.writeFile(this.file,newProductString,'utf-8'); 

            return object.id; 


        } catch (error) {
            console.log(error);
        }
    }

    async GetById(number){
        try {
            const infoTXT = await fs.promises.readFile(this.file,'utf-8'); 
            const infoParsed = JSON.parse(infoTXT); 
            const productId = infoParsed.map(e => e.id); 

            if(productId.includes(number)){
                let index = productId.indexOf(number); 
                console.table(infoParsed[index]);
                return infoParsed[index]; 
            }
            else{
                return null
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    async GetAll(){
        try {
            const infoTXT = await fs.promises.readFile(this.file,'utf-8');
            const infoParsed = JSON.parse(infoTXT); 
        
            return infoParsed; 

        } catch (error) {
            console.log(error);
        }
    }

    async DeleteById(number){
        try {
            const infoTXT = await fs.promises.readFile(this.file, 'utf-8');
            const infoParsed = JSON.parse(infoTXT); 
            const fileteredProduct = infoParsed.filter(e => e.id != number); 
            const fileteredProductString = JSON.stringify(fileteredProduct,null,2); 
            const fileteredProductTXT = await fs.promises.writeFile(this.file, fileteredProductString,'utf-8'); 

        } catch (error) {
            console.log(error);
        }
    }
    async DeleteAll(){
        const infoTXT = await fs.promises.readFile(this.file,'utf-8'); 
        const infoParsed = JSON.parse(infoTXT); 
        const deleteAll = infoParsed.splice(0,infoParsed.length); 
        const deleteAllString = JSON.stringify(deleteAll); 
        const deleteAllTXT = await fs.promises.writeFile(this.file, deleteAllString,'utf-8'); 
        
    }
}



//newProduct.Save(prodcut1);
//newProduct.GetById(2); 
//newProduct.GetAll(); 
//newProduct.DeleteById(2)
//newProduct.DeleteAll()

module.exports = {
    Contenedor
}

