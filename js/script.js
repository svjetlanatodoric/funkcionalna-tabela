class Kontakt {
    constructor(ime, prezime, brojTelefona, email) {
        this.ime = ime;
        this.prezime = prezime;
        this.brojTelefona = brojTelefona;
        this.email = email;
    }
}
var update = document.getElementById("form-update");
update.style.display = "none";
var kontakt1 = new Kontakt("Pero", "Perić", "066/789-654", "pero.peric@tesla.com");
var kontakt2 = new Kontakt("Marko", "Marković", "066/158-224", "marko.markovic@tesla.com");
var kontakti = [kontakt1, kontakt2];

var tabela = document.getElementById("tabela");
var header = tabela.innerHTML; //trenutno jedini HTML sadržaj tabele jeste njen header, s obzirom na to da se svi podaci unose pomoću JS-a

function ispis() {
    tabela.innerHTML = header;
    for (var i = 0; i < kontakti.length; i++) {
        tabela.innerHTML += "<tr class='red'><td id='celijaime' contentEditable>" + kontakti[i].ime + "</td>"
            + "<td id='celijaprezime' contentEditable>" + kontakti[i].prezime + "</td>"
            + "<td id='celijabroj' contentEditable>" + kontakti[i].brojTelefona + "</td>"
            + "<td id='celijaemail' contentEditable>" + kontakti[i].email + "</td>"
            + "<td><button style='width:50px; padding:4px; border: 1px solid red; border-radius:3px; background-color:white; color:red' onclick='izbrisi(" + i + ")'>Izbriši</button></td>"
            + "<td><button class='izmijeni' id='izmijeni' style='width:60px; padding:4px;color:white; border-radius:3px; border:none; background-color:rgb(83, 83, 255) ' onclick =' izmijeni(" + i + ");sacuvaj(" + i + ")'>Izmijeni</button> </td></tr>";

    }
}
ispis();

function dodajKontakt() {
    var imeKontakta = document.getElementById("ime").value;
    var prezimeKontakta = document.getElementById("prezime").value;
    var brojKontakta = document.getElementById("brojTelefona").value;
    var emailKontakta = document.getElementById("email").value;

    var noviKontakt = new Kontakt(imeKontakta, prezimeKontakta, brojKontakta, emailKontakta);
    kontakti.push(noviKontakt);

    ispis();
}

function izbrisi(index) {
    kontakti.splice(index, 1);
    ispis();
}

function izmijeniprikaz() {
    update.style.display = "block";
    var forma = document.getElementById("form-container")
    forma.style.display = "none";
    ispis();
}

function sacuvaj(index) {

    kontakti[index].ime = document.getElementById("drugoIme").value;
    kontakti[index].prezime = document.getElementById("drugoPrezime").value;
    kontakti[index].brojTelefona = document.getElementById("drugiBrojTelefona").value;
    kontakti[index].email = document.getElementById("drugiEmail").value;

    var sacuvajdugme = document.getElementById("sacuvajDugme");
    sacuvajdugme.innerHTML = "<input type='button' style = 'display:inline' value='Sačuvaj promjene' class=sacuvajDugme onclick='sacuvaj(" + index + ");izmijeni("+ index +")'>";
    //sacuvajdugme na onclick event sprema podatke u input polja;

    // funkcija koja uzima nove vrijednosti iz input polja i šalje ih u tabelu 
}

function izmijeni(index) {

    document.getElementById("drugoIme").value = kontakti[index].ime;
    document.getElementById("drugoPrezime").value = kontakti[index].prezime;
    document.getElementById("drugiBrojTelefona").value = kontakti[index].brojTelefona;
    document.getElementById("drugiEmail").value = kontakti[index].email;

    izmijeniprikaz();
    ispis();
    //funkcija koja input polja popunjava postojećim podacima iz tabele
}

function vrati(){
    var forma = document.getElementById("form-container")
    forma.style.display = "block";

    update.style.display = "none";

    ispis();
}