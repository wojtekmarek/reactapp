const xml2js = require('xml2js');
const axios = require('axios');
const fs=require('fs');
const {
  createError,
  BAD_REQUEST,
  UNAUTHORIZED
} = require('../helpers/error_helper')

const gettitle = (req, res, next) => {
  console.log('app na zaliczenie!');
  const title="Zestawienie danych na temat wysokości stóp procentowych i cen mieszkań w okresie ostatnich 10 lat, z uwzględnieniem regionów i typów mieszkań.";
const whomade="wykonali Wojciech Marek i Hubert Kopeć"

res.json({title: title, whomade: whomade});
}

const getprocent = (req, res, next) => {
  const parser = new xml2js.Parser({ attrkey: "ATTR" });
  axios.get('https://www.nbp.pl/xml/stopy_procentowe_archiwum.xml')
  .then(res=> {
    let data=res.data;
  
    let jsonsend = {};
  
      parser.parseString(data, (error, result)=> {
          if(error === null) {
         jsonsend=result;
          }
          else {
         
          }
        
        } );
        return jsonsend;

   }).then(jsonsend=>{
    
    
    res.json(jsonsend);
   
   })}
const getstate = (req, res, next) => {
    const parser = new xml2js.Parser({ attrkey: "ATTR" });
    axios.get('http://wojtekmarek.pl/data/ceny1.xml') 
    .then(res=> {
      let data=res.data;
      
      let jsonsend = {};
    
        parser.parseString(data, (error, result)=> {
            if(error === null) {
           jsonsend=result;
            }         
          } );
        var row =jsonsend.root;
          return jsonsend;
     }).then(jsonsend=>{
      res.json(jsonsend.root.row);
     })
    
}

const getfile = async (req, res, next) => {
 
  const tagone= JSON.stringify(req.body.tagone)
  const tagtwo = JSON.stringify(req.body.tagtwo)
  const tagthree=  JSON.stringify(req.body.tagthree)
 const datatosave={tagone,tagtwo,tagthree};


  //console.log(tagthree);
  const builder = new xml2js.Builder();
  console.log('xml');
const name=Math.random();
console.log(name);
const xml=builder.buildObject(datatosave);
const filePath = `${name}.xml`; 
fs.writeFile(`./filexml/${filePath}`, xml, function (err){
  if (err) throw err;
      console.log('It\'s saved!');
      
  });    
return await res.json(filePath);
  
 
}


module.exports = {
  getstate,
  gettitle,
  getprocent,
  getfile
}