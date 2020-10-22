export class Client {
    nom:string;
    prenom:string;
    adresse:string;
    cp:string;
    tel:string;
    ville:string;
    pays:string;
    email:string;
    civilite:string;
    login:string;
    password:string;
    formatTel:string;

    constructor(nom?:string,prenom?:string,adresse?:string,cp?:string,tel?:string,ville?:string,pays?:string,email?:string,civilite?:string,login?:string,password?:string){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this.pays = pays;
        this.email = email;
        this.civilite = civilite;
        this.login = login;
        this.tel = tel;
        this.password = password;
    }
}
