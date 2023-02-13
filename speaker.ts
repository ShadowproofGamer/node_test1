class Speaker {
    message: string = "";
    constructor(private name: string){}
    get Message(){
        if(!this.message.includes(this.name)){
            throw Error("brak imienia")
        }
        return this.message
    }

    set Message(val:string){
        let tmpMessage = val;
        if(!val.includes(this.name)){
            tmpMessage = this.name + "" + val;
        }
        this.message = tmpMessage;
    }

}
const speaker = new Speaker("Janek");
speaker.Message = "cześć";
console.log(speaker.Message);