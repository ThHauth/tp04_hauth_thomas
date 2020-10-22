import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Client } from '../client';
import  countries  from '../_files/Coutries.json'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  
  user:Client;
  form:FormGroup;
  phoneFormat:string;
  valid:boolean;
  public countryList:any = countries;
  constructor() { 
    
  }


  ngOnInit(): void {
    this.user = new Client();
    this.user.civilite = "Madame";
    this.user.pays = "Afghanistan"
  }


  onSubmit() {
    this.getDialCode();
    this.valid = this.testAllFields();
    if(!this.valid){
      alert("Certains champs ne sont pas valides");
    }

  } 

  getDialCode():string{
    let res:string = "";
    countries.forEach(element => {
      if(element.name === this.user.pays){        
        this.user.formatTel = element.dial_code;
      }
    });
    return res;
  }
  getActualCountry(e:any){
    this.user.pays = e.target.value;
  }

  testAllFields():boolean{
    let test = true;

    var nameRegex = /[^0-9]{2,30}/g
    var fornameRegex = /[^0-9]{2,30}/g
    var addressRegex = /.{6,}/g
    var zipRegex = /[0-9]{5}/g
    var cityRegex = /[^0-9]{1,60}/g
    var loginRegex = /.{5,}/g
    var passwordRegex = /.{8,}/g
    var mailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g

    test = this.checkField(this.user.nom,nameRegex);
    test = this.checkField(this.user.prenom,fornameRegex);
    test = this.checkField(this.user.adresse,addressRegex);
    test = this.checkField(this.user.cp,zipRegex);
    test = this.checkField(this.user.ville,cityRegex);
    test = this.checkField(this.user.login,loginRegex);
    test = this.checkField(this.user.password,passwordRegex);
    test = this.checkField(this.user.email,mailRegex);

    return test;
  }


  checkField(value: string, regex: any):boolean {
    return (regex.test(value) && value !== "");
}

}
