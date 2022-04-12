var admin = require("firebase-admin");

var serviceAccount = require("./account.json");

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();
var countries = [{
   "name": "Afghanistan",
   "documentType": "Passport",
   "dimension": "35x45 mm",
   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fafghanistan.png?alt=media"
},
{
   "name": "Afghanistan",
   "documentType": "VISA",
   "dimension": "35x45 mm",
   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fafghanistan.png?alt=media"
},
{
   "name": "Albania",
   "documentType": "Passport",
   "dimension": "40x50 mm",
   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Falbania.png?alt=media"
},
{
   "name": "Algeria",
   "documentType": "Passport",
   "dimension": "35x45 mm",
   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Falgeria.png?alt=media"
},
{
   "name": "Angola",
   "documentType": "Passport",
   "dimension": "50x50 mm",
   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Falgeria.png?alt=media"
},
{
   "name": "Argentina",
   "documentType": "Passport",
   "dimension": "38x38 mm",
   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fargentina.png?alt=media"
},
{
   "name": "Australia",
   "documentType": "Passport",
   "dimension": "35x45 mm",
   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Faustralia.png?alt=media"
},
{
   "name": "Australia",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Faustralia.png?alt=media"
},
{
   "name": "Austria",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Faustralia.png?alt=media"
},
{
   "name": "Austria",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Faustria.png?alt=media"
},
{
   "name": "Bahrein",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbahrain.png?alt=media&"
},
{
   "name": "Bahrein",
   "documentType": "VISA",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbahrain.png?alt=media&"
},
{
   "name": "Belarus",
   "documentType": "Passport",
   "dimension": "40x50 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbelarus.png?alt=media&"
},
{
   "name": "Belarus",
   "documentType": "VISA",
   "dimension": "40x50 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbelarus.png?alt=media&"
},
{
   "name": "Belgium",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbelgium.png?alt=media&"
},
{
   "name": "Brazil",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbrazil.png?alt=media&"
},
{
   "name": "Brazil",
   "documentType": "VISA",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbrazil.png?alt=media&"
},
{
   "name": "Bulgaria",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbulgaria.png?alt=media&"

},
{
   "name": "Bulgaria",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbulgaria.png?alt=media&"
},
{
   "name": "Cambodia",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcambodia.png?alt=media&"
},
{
   "name": "Cambodia",
   "documentType": "VISA",
   "dimension": "38x38 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcambodia.png?alt=media&"
},
{
   "name": "Canada",
   "documentType": "Citizenship",
   "dimension": "50x70 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcanada.png?alt=media&"
},
{
   "name": "Canada",
   "documentType": "Firearms",
   "dimension": "45x57 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcanada.png?alt=media&"
},
{
   "name": "Canada",
   "documentType": "Passport",
   "dimension": "50x70 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcanada.png?alt=media&"
},
{
   "name": "Canada",
   "documentType": "Permanent Residence",
   "dimension": "50x70 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcanada.png?alt=media&"
},
{
   "name": "China",
   "documentType": "Passport",
   "dimension": "33x48 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fchina.png?alt=media&"
},
{
   "name": "China",
   "documentType": "VISA",
   "dimension": "33x48 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fchina.png?alt=media&"
},
{
   "name": "Colombia",
   "documentType": "VISA",
   "dimension": "30x40 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcolombia.png?alt=media&"
},
{
   "name": "Croatia",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcroatia.png?alt=media&"
},
{
   "name": "Czech",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fczech.png?alt=media&"
},
{
   "name": "Denmark",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fdenmark.png?alt=media&"
},
{
   "name": "Egypt",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fegypt.png?alt=media&"
},
{
   "name": "Egypt",
   "documentType": "VISA",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fegypt.png?alt=media&"
},
{
   "name": "Estonia",
   "documentType": "Passport",
   "dimension": "40x50 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Festonia.png?alt=media&"
},
{
   "name": "Estonia",
   "documentType": "VISA",
   "dimension": "40x50 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Festonia.png?alt=media&"
},
{
   "name": "Finland",
   "documentType": "Passport",
   "dimension": "36x47 mm",


   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Ffinland.png?alt=media&"
},
{
   "name": "Finland",
   "documentType": "VISA",
   "dimension": "36x47 mm",


   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Ffinland.png?alt=media&"
},
{
   "name": "France",
   "documentType": "Driving Licence",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Ffrance.png?alt=media&"
},
{
   "name": "France",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Ffrance.png?alt=media&"
},
{
   "name": "Germany",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fgermany.png?alt=media&"
},
{
   "name": "Germany",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fgermany.png?alt=media&"
},
{
   "name": "Ghana",
   "documentType": "Passport",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fghana.png?alt=media&"
},
{
   "name": "Greece",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fgreece.png?alt=media&"
},
{
   "name": "Hong Kong",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fhong-kong.png?alt=media&"
},
{
   "name": "Hungary",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fhungary.png?alt=media&"
},
{
   "name": "Iceland",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Ficeland.png?alt=media&"
},
{
   "name": "India",
   "documentType": "PAN Card",
   "dimension": "25x35 mm",
   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Findia.png?alt=media&"
},
{
   "name": "India",
   "documentType": "Passport",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Findia.png?alt=media&"
},
{
   "name": "India",
   "documentType": "VISA",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Findia.png?alt=media&"
},
{
   "name": "India",
   "documentType": "OCI",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Findia.png?alt=media&"
},
{
   "name": "Indonesia",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Findonesia.png?alt=media&"
},
{
   "name": "Indonesia",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Findonesia.png?alt=media&"
},
{
   "name": "Iran",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Firan.png?alt=media&"
},
{
   "name": "Iraq",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Firaq.png?alt=media&"
},
{
   "name": "Iraq",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Firaq.png?alt=media&"
},
{
   "name": "Ireland",
   "documentType": "Passport",
   "dimension": "35x45 mm",


   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fireland.png?alt=media&"
},
{
   "name": "Ireland",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fireland.png?alt=media&"
},
{
   "name": "Ireland",
   "documentType": "Taxi",
   "dimension": "70x100 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fireland.png?alt=media&"
},
{
   "name": "Israel",
   "documentType": "Passport",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fisrael.png?alt=media&"
},
{
   "name": "Italy",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fitaly.png?alt=media&"
},
{
   "name": "Jamaica",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fjamaica.png?alt=media&"
},
{
   "name": "Japan",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fjapan.png?alt=media&"
},
{
   "name": "Japan",
   "documentType": "VISA",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fjapan.png?alt=media&"
},
{
   "name": "Kenya",
   "documentType": "Passport",
   "dimension": "40x50 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fkenya.png?alt=media&"
},
{
   "name": "Korea",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fkorea.png?alt=media&"
},
{
   "name": "Korea",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsouth-korea.png?alt=media&"
},
{
   "name": "Kuwait",
   "documentType": "Passport",
   "dimension": "40x50 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fkuwait.png?alt=media&"
},
{
   "name": "Kuwait",
   "documentType": "Renewal of Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fkuwait.png?alt=media&"
},
{
   "name": "Kuwait",
   "documentType": "VISA",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fkuwait.png?alt=media&"
},
{
   "name": "Laos",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Flaos.png?alt=media&"
},
{
   "name": "Lithuania",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Flithuania.png?alt=media&"
},
{
   "name": "Luxembourg",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fluxembourg.png?alt=media&"
},
{
   "name": "Malaysia",
   "documentType": "Passport",
   "dimension": "35x50 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fmalaysia.png?alt=media&"
},
{
   "name": "Malaysia",
   "documentType": "VISA",
   "dimension": "35x50 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fmalaysia.png?alt=media&"
},
{
   "name": "Mexico",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fmexico.png?alt=media&"
},
{
   "name": "Mexico",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fmexico.png?alt=media&"
},
{
   "name": "Morocco",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fmorocco.png?alt=media&"
},
{
   "name": "Myanmar",
   "documentType": "VISA",
   "dimension": "38x46 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fmyanmar.png?alt=media&"
},
{
   "name": "Netherlands",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fnetherlands.png?alt=media&"
},
{
   "name": "New South Wales",
   "documentType": "Taxi",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fwales.png?alt=media&"
},
{
   "name": "New Zealand",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fnew-zealand.png?alt=media&"
},
{
   "name": "New Zealand",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fnew-zealand.png?alt=media&"
},
{
   "name": "Nigeria",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fnigeria.png?alt=media&"
},
{
   "name": "Norway",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fnorway.png?alt=media&"
},
{
   "name": "Oman",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Foman.png?alt=media&"
},
{
   "name": "Oman",
   "documentType": "VISA",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Foman.png?alt=media&"
},
{
   "name": "Pakistan",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fpakistan.png?alt=media&"
},
{
   "name": "Pakistan",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fpakistan.png?alt=media&"
},
{
   "name": "Philippines",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fphilippines.png?alt=media&"
},
{
   "name": "Philippines",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fphilippines.png?alt=media&"
},
{
   "name": "Poland",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fpoland.png?alt=media&"
},
{
   "name": "Portugal",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fportugal.png?alt=media&"
},
{
   "name": "Romania",
   "documentType": "Citizenship",
   "dimension": "30x40 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fromania.png?alt=media&"
},
{
   "name": "Romania",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fromania.png?alt=media&"
},
{
   "name": "Romania",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fromania.png?alt=media&"
},
{
   "name": "Russia",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Frussia.png?alt=media&"
},
{
   "name": "Russia",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Frussia.png?alt=media&"
},
{
   "name": "Saudi Arabia",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsaudi-arabia.png?alt=media&"
},
{
   "name": "Saudi Arabia",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsaudi-arabia.png?alt=media&"
},
{
   "name": "Singapore",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsingapore.png?alt=media&"
},
{
   "name": "Singapore",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsingapore.png?alt=media&"
},
{
   "name": "Slovenia",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fslovenia.png?alt=media&"
},
{
   "name": "South Africa",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsouth-africa.png?alt=media&"
},
{
   "name": "South Africa",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsouth-africa.png?alt=media&"
},
{
   "name": "Spain",
   "documentType": "Passport",
   "dimension": "30x40 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fspain.png?alt=media&"
},
{
   "name": "Spain",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fspain.png?alt=media&"
},
{
   "name": "Sri Lanka",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsri-lanka.png?alt=media&"
},
{
   "name": "Sri Lanka",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsri-lanka.png?alt=media&"
},
{
   "name": "Sudan",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsudan.png?alt=media&"
},
{
   "name": "Sweden",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsweden.png?alt=media&"
},
{
   "name": "Sweden",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsweden.png?alt=media&"
},
{
   "name": "Switzerland",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fswitzerland.png?alt=media&"
},
{
   "name": "Switzerland",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fswitzerland.png?alt=media&"
},
{
   "name": "Syria",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsyria.png?alt=media&"
},
{
   "name": "Thailand",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fthailand.png?alt=media&"
},
{
   "name": "Thailand",
   "documentType": "VISA",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fthailand.png?alt=media&"
},
{
   "name": "Turkey",
   "documentType": "Passport",
   "dimension": "50x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fturkey.png?alt=media&"
},
{
   "name": "Turkey",
   "documentType": "VISA",
   "dimension": "50x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fturkey.png?alt=media&"
},
{
   "name": "Ukraine",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fukraine.png?alt=media&"
},
{
   "name": "United Arab Emirates",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-arab-emirates.png?alt=media&"
},
{
   "name": "United Arab Emirates",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-arab-emirates.png?alt=media&"
},
{
   "name": "United Kingdom",
   "documentType": "Passport",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-kingdom.png?alt=media&"
},
{
   "name": "United Kingdom",
   "documentType": "VISA",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-kingdom.png?alt=media&"
},
{
   "name": "United Kingdom",
   "documentType": "Driving Licence",
   "dimension": "35x45 mm",

   "sets": 6,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-kingdom.png?alt=media&"
},
{
   "name": "United States of America",
   "documentType": "Passport",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-states.png?alt=media&"
},
{
   "name": "United States of America",
   "documentType": "VISA",
   "dimension": "50x50 mm",

   "sets": 4,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-states.png?alt=media&"
},
{
   "name": "Vietnam",
   "documentType": "Passport",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fvietnam.png?alt=media&"
},
{
   "name": "Vietnam",
   "documentType": "VISA",
   "dimension": "40x60 mm",

   "sets": 2,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fvietnam.png?alt=media&"
},

{
   "name": "Australia",
   "documentType": "WWC Online",
   "dimension": "35x45 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Faustralia.png?alt=media&"
},
{
   "name": "Brazil",
   "documentType": "eVisa Online",
   "dimension": "50x50 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fbrazil.png?alt=media&"
},
{
   "name": "Cambodia",
   "documentType": "eVisa Online",
   "dimension": "35x45 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcambodia.png?alt=media&"
},
{
   "name": "Canada",
   "documentType": "eVisa Online",
   "dimension": "50x70 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcanada.png?alt=media&"
},
{
   "name": "Canada",
   "documentType": "Firearms Online",
   "dimension": "45x57 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcanada.png?alt=media&"
},
{
   "name": "Canada",
   "documentType": "Permanent Residence Online",
   "dimension": "50x70 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fcanada.png?alt=media&"
},
{
   "name": "China",
   "documentType": "eVisa Online",
   "dimension": "30x40 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fchina.png?alt=media&"
},
{
   "name": "China",
   "documentType": "Passport Online",
   "dimension": "33x48 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fchina.png?alt=media&"
},
{
   "name": "Estonia",
   "documentType": "Passport Online",
   "dimension": "40x50 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Festonia.png?alt=media&"
},
{
   "name": "France",
   "documentType": "ANTS Driving Licence Online",
   "dimension": "35x45 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Ffrance.png?alt=media&"
},
{
   "name": "India",
   "documentType": "eVisa Online",
   "dimension": "50x50 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Findia.png?alt=media&"
},
{
   "name": "Ireland",
   "documentType": "Passport Online",
   "dimension": "30x40 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fireland.png?alt=media&"
},
{
   "name": "Malaysia",
   "documentType": "eVisa Online",
   "dimension": "35x50 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fmalaysia.png?alt=media&"
},
{
   "name": "New Zealand",
   "documentType": "Passport Online",
   "dimension": "35x45 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fnew-zealand.png?alt=media&"
},
{
   "name": "Singapore",
   "documentType": "eVisa Online",
   "dimension": "35x45 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsingapore.png?alt=media&"
},
{
   "name": "Singapore",
   "documentType": "Passport Online",
   "dimension": "35x45 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Fsingapore.png?alt=media&"
},
{
   "name": "United Arab Emirates",
   "documentType": "eVisa Online",
   "dimension": "35x45 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-arab-emirates.png?alt=media&"
},
{
   "name": "United Kingdom",
   "documentType": "Online",
   "dimension": "50x70 mm",

   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited-kingdom.png?alt=media&"

},
{
   "name": "United States of America",
   "documentType": "Greencard Online",
   "dimension": "50x50 mm",
   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited2Funited-states.png?alt=media&"

},
{
   "name": "United States of America",
   "documentType": "Passport Online",
   "dimension": "50x50 mm",
   "sets": 1,
   "assets": "https://firebasestorage.googleapis.com/v0/b/mypassportphoto-dev.appspot.com/o/assets%2Fflags%2Funited2Funited-states.png?alt=media&"
}]


countries.forEach(async function (obj) {
   await db.collection('countries').add({
      name: obj.name,
      documentType: obj.documentType,
      dimension: obj.dimension,
      sets: obj.sets,
      assets: obj.assets

   }).then(obj => console.log(obj.id))
      .catch(err => console.log(err))




})