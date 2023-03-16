import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chart from './Chart.js'
import './ListState.css';


class ListState extends Component{
  componentDidMount= () =>{
    fetch('http://localhost:8000/datastate')
    .then(response => response.json())
    .then(json =>{     
      this.setState({nameon: json});
    })
    fetch('http://localhost:8000/dataproces')
    .then(response => response.json())
    .then(json =>{
    
     let table=[json.stopy_procentowe_archiwum.pozycje[57].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[60].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[63].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[68].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[71].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[72].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[72].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[72].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[72].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[72].pozycja[0].ATTR.oprocentowanie,
     json.stopy_procentowe_archiwum.pozycje[73].pozycja[0].ATTR.oprocentowanie]
     let inttable=table.map(int=> parseFloat(int.replace(",",".")));
      this.setState({procent: table});
      console.log(inttable[0]+inttable[1]);
    })
    
  }
  showdatatable=()=>{
    const {tagoneselected,tagtwoselected,tagthreeselected,showdatatable}=this.state
    if(!tagoneselected && !tagtwoselected && !tagthreeselected){
      alert('Wybierz dane do wyswietlenia');
    }else{
      this.setState({showdatatable:!showdatatable})
    }
    
    
  }
  showchart=()=>{
    const{tagone,tagtwo,tagthree,tagoneselected,tagtwoselected,tagthreeselected,showchart}=this.state;
    const year=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];
    
    //czesc do optymalizacji
    if(!tagoneselected&&!tagtwoselected&&!tagthreeselected){ alert('Wybierz dane do wyswietlenia');}else{
    if(tagoneselected&&tagtwoselected&&tagthreeselected)
    {const newdata=[ tagone._2010,tagone._2011,tagone._2012,tagone._2013,tagone._2014,tagone._2015,tagone._2016,tagone._2017,tagone._2018,tagone._2019,tagone._2020 ] ;
    const newdataint=newdata.map(int=> parseInt(int,10));
    const newdatathree=[ tagthree._2010,tagthree._2011,tagthree._2012,tagthree._2013,tagthree._2014,tagthree._2015,tagthree._2016,tagthree._2017,tagthree._2018,tagthree._2019,tagthree._2020 ] ;
    const newdatathreeint=newdatathree.map(int=> parseInt(int,10));
    const newdatatwo=[ tagtwo._2010,tagtwo._2011,tagtwo._2012,tagtwo._2013,tagtwo._2014,tagtwo._2015,tagtwo._2016,tagtwo._2017,tagtwo._2018,tagtwo._2019,tagtwo._2020 ] ;
    const newdatatwoint=newdatatwo.map(int=> parseInt(int,10));
    let data={
      labels:year,
      datasets:[{
        label:tagone.Nazwa,
        data: newdataint,
        fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
      },{
        label:tagtwo.Nazwa,
        data: newdatatwoint,
        fill: false,
      borderColor: 'rgb(75, 92, 92)',
      tension: 0.1
      },{
        label:tagthree.Nazwa,
        data: newdatathreeint,
        fill: false,
      borderColor: 'rgb(375, 492, 592)',
      tension: 0.1
      },]
    };console.log(data.datasets);
    this.setState({chartdata:data});}
      else{if(tagoneselected&&tagtwoselected&&!tagthreeselected)
            {const newdatatwo=[ tagtwo._2010,tagtwo._2011,tagtwo._2012,tagtwo._2013,tagtwo._2014,tagtwo._2015,tagtwo._2016,tagtwo._2017,tagtwo._2018,tagtwo._2019,tagtwo._2020 ] ;
            const newdatatwoint=newdatatwo.map(int=> parseInt(int,10));
            const newdata=[ tagone._2010,tagone._2011,tagone._2012,tagone._2013,tagone._2014,tagone._2015,tagone._2016,tagone._2017,tagone._2018,tagone._2019,tagone._2020 ] ;
             const newdataint=newdata.map(int=> parseInt(int,10));
             
            let data={
              labels:year,
              datasets:[{
                label:tagone.Nazwa,
                data: newdataint,
                fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
              },{
                label:tagtwo.Nazwa,
                data: newdatatwoint,
                fill: false,
              borderColor: 'rgb(75, 92, 92)',
              tension: 0.1
              },]
            };console.log(data.datasets);
            this.setState({chartdata:data});}
            else{if(tagoneselected&&!tagtwoselected&&!tagthreeselected)
                  {const newdata=[ tagone._2010,tagone._2011,tagone._2012,tagone._2013,tagone._2014,tagone._2015,tagone._2016,tagone._2017,tagone._2018,tagone._2019,tagone._2020 ] ;
                    const newdataint=newdata.map(int=> parseInt(int,10));
                  let data={
                    labels:year,
                    datasets:[{
                      label:tagone.Nazwa,
                      data: newdataint,
                      fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                    },]
                  };console.log(data.datasets);
                  this.setState({chartdata:data});}}
    
                }
                this.setState({showchart:!showchart});
              } }

  showchartprocent=()=>{
    const{tagone,tagtwo,tagthree,tagoneselected,tagtwoselected,tagthreeselected,showchart,procent,showchartprocent}=this.state;
    const year=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];
    this.setState({showchart:!showchart})
    //czesc do optymalizacji
    
    const procent1000= procent.map(x=> parseInt(x.replace(",","")*8));
    console.log(procent);
    console.log(procent1000);
    const procentint= procent1000.map(int=>parseInt(int,10))
    if(tagoneselected&&tagtwoselected&&tagthreeselected)
    {const newdata=[ tagone._2010,tagone._2011,tagone._2012,tagone._2013,tagone._2014,tagone._2015,tagone._2016,tagone._2017,tagone._2018,tagone._2019,tagone._2020 ] ;
    const newdataint=newdata.map(int=> parseInt(int,10));
    const newdatathree=[ tagthree._2010,tagthree._2011,tagthree._2012,tagthree._2013,tagthree._2014,tagthree._2015,tagthree._2016,tagthree._2017,tagthree._2018,tagthree._2019,tagthree._2020 ] ;
    const newdatathreeint=newdatathree.map(int=> parseInt(int,10));
    const newdatatwo=[ tagtwo._2010,tagtwo._2011,tagtwo._2012,tagtwo._2013,tagtwo._2014,tagtwo._2015,tagtwo._2016,tagtwo._2017,tagtwo._2018,tagtwo._2019,tagtwo._2020 ] ;
    const newdatatwoint=newdatatwo.map(int=> parseInt(int,10));
    let data={
      labels:year,
      datasets:[{
        label:tagone.Nazwa,
        data: newdataint,
        fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
      },{
        label:tagtwo.Nazwa,
        data: newdatatwoint,
        fill: false,
      borderColor: 'rgb(75, 92, 92)',
      tension: 0.1
      },{
        label:tagthree.Nazwa,
        data: newdatathreeint,
        fill: false,
      borderColor: 'rgb(375, 492, 592)',
      tension: 0.1
      },{
        label:"Stopy procentowe",
        data: procentint,
        fill: false,
      borderColor: 'rgb(675, 692, 192)',
      tension: 0.1
      },]
    };console.log(data.datasets);
    this.setState({chartdata:data});}
      else{if(tagoneselected&&tagtwoselected&&!tagthreeselected)
            {const newdatatwo=[ tagtwo._2010,tagtwo._2011,tagtwo._2012,tagtwo._2013,tagtwo._2014,tagtwo._2015,tagtwo._2016,tagtwo._2017,tagtwo._2018,tagtwo._2019,tagtwo._2020 ] ;
            const newdatatwoint=newdatatwo.map(int=> parseInt(int,10));
            const newdata=[ tagone._2010,tagone._2011,tagone._2012,tagone._2013,tagone._2014,tagone._2015,tagone._2016,tagone._2017,tagone._2018,tagone._2019,tagone._2020 ] ;
             const newdataint=newdata.map(int=> parseInt(int,10));
             
            let data={
              labels:year,
              datasets:[{
                label:tagone.Nazwa,
                data: newdataint,
                fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
              },{
                label:tagtwo.Nazwa,
                data: newdatatwoint,
                fill: false,
              borderColor: 'rgb(75, 92, 92)',
              tension: 0.1
              },{
                label:"Stopy procentowe",
                data: procentint,
                fill: false,
              borderColor: 'rgb(675, 692, 192)',
              tension: 0.1
              },]
            };console.log(data.datasets);
            this.setState({chartdata:data});}
            else{if(tagoneselected&&!tagtwoselected&&!tagthreeselected)
                  {const newdata=[ tagone._2010,tagone._2011,tagone._2012,tagone._2013,tagone._2014,tagone._2015,tagone._2016,tagone._2017,tagone._2018,tagone._2019,tagone._2020 ] ;
                    const newdataint=newdata.map(int=> parseInt(int,10));
                  let data={
                    labels:year,
                    datasets:[{
                      label:tagone.Nazwa,
                      data: newdataint,
                      fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                    },{
                      label:"Stopy procentowe",
                      data: procentint,
                      fill: false,
                    borderColor: 'rgb(675, 692, 192)',
                    tension: 0.1
                    },]
                  };console.log(data.datasets);
                  this.setState({chartdata:data});}}
    
                }
                this.setState({showchart:!showchartprocent})
              }

              showprocentdata=()=>{
                const{showcolumprocent}=this.state
                this.setState({showcolumprocent:!showcolumprocent})
              
              }
              
             downloadxml=()=> {
                const{tagone,tagtwo,tagthree}=this.state
                const tosend={tagone,tagtwo,tagthree};
                fetch('http://localhost:8000/download',{ 
                method: 'POST', // or 'PUT'
                headers: {
                'Content-Type': 'application/json',
                 },
               body: JSON.stringify(tosend),
              
               })
               .then(response => response.json())
                .then(json =>{
                console.log(json);
                const link = document.createElement('a');
                link.href = `http://localhost:8000/downloadpath/?${json}`; 
                link.setAttribute('download','dane.xml' );
                document.body.appendChild(link);
                link.click();
                link.remove();
              })
            }
 
    static defaultProps={
      showcolumprocent:false,
      login:'',
      password:"",
      name:[],
      tagone: [],
      year:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2012","2020"],
      showdatatable:false,
      showchart:false,
      tagoneselected:false,
      islogin:false,
      chartdata:{
        labels:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2012","2020"],
        datasets:[{
          label:"test",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
        borderColor: 'rgb(175, 292, 292)',
        tension: 0.1
        },{
         
            label:"test1",
            data: [165, 159, 180, 181, 156, 155, 140],
            fill: false,
          borderColor: 'rgb(75, 92, 92)',
          tension: 0.1
          }
          ,{
         
            label:"test1",
            data: [15, 19, 180, 11, 156, 15, 140],
            fill: false,
          borderColor: 'rgb(175, 292, 192)',
          tension: 0.1
          }]
      }
      
  
    }
    state={
      showchartprocent:this.props.showchartprocent,
      showcolumprocent: this.props.showdatatable,
      login:this.props.login,
      password:this.props.password,
      name:this.props.name,
      nameon:[],
      showdatatable:this.props.showdatatable,
      showchart:this.props.showchart,
      tagone: [],
      tagtwo:[],
      tagthree:[],
      tagoneselected:false,
      tagtwoselected:false,
      tagthreeselected:false,
      chartdata:this.props.chartdata,
      islogin:this.props.islogin


    }//zredukowac do jednej funkcji
    onTagsChange = (event, values) => {
      this.setState({
        tagone:values,
        tagoneselected:true,
        showchart:false

      })
      
    }
    onTagsChangetwo = (event, values) => {
      this.setState({
        tagtwo:values,
        tagtwoselected:true,
        showchart:false
      })
    }
    onTagsChangethree = (event, values) => {
      this.setState({
        tagthree:values,
        tagthreeselected:true,
        showchart:false
      })
    }

    passwordChange = (event, values) => {
      this.setState({
        password:event.target.value
      })
      
    }
    
    logChange = (event, values) => {
      this.setState({
       login: event.target.value     

      })
      
    }
    logintoapp= () =>{
      const{login,password}=this.state;
      const data={username: login,
        password:password
      }
      fetch('http://localhost:8000/login',{ 
        method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json =>{
        if(json.ok){
          this.setState({islogin: true});
        }else{
          alert('Dane do logowania sa nie poprawne');
        }
        
      })
    }
   
    render(){
      const{nameon,tagoneselected,tagtwoselected,tagthreeselected,tagone,tagtwo,tagthree,showdatatable,
        showchart,chartdata,islogin,procent,showcolumprocent,showchartprocent}=this.state
      
        
      return(
       
        <div >
          { (!islogin) ? [<div className="flexdivlog">
            <TextField  placeholder="Login" helperText="Podaj email jako login" onChange={this.logChange}></TextField>
            <TextField  placeholder="Haslo"  helperText="Podaj swoje haslo" onChange={this.passwordChange}></TextField>
            <button className='butonshow'onClick={this.logintoapp}>Zaloguj</button></div>] : [<div className="flexdiv">
        <Autocomplete
        style={{width:500}}
        className={'autocoplate'}
        autoSelect
        onChange={this.onTagsChange}
        options={nameon}
        getOptionLabel={option => option.Nazwa.toString()}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Nazwa Powiatu"
           />
        )}
      />
      <Autocomplete
        style={{width:500}}
        className={'autocoplate'}
        autoSelect
        disabled={!tagoneselected}
        onChange={this.onTagsChangetwo}
        options={nameon}
        getOptionLabel={option => option.Nazwa.toString()}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Nazwa Powiatu"
           />
        )}
      />
      <Autocomplete
        style={{width:500}}
        className={'autocoplate'}
        autoSelect
        disabled={!tagtwoselected}
        onChange={this.onTagsChangethree}
        options={nameon}
        getOptionLabel={option => option.Nazwa.toString()}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Nazwa Powiatu"
           />
        )}
      />
      <div className='divbuttonfield'>
        <button className='butonshow'onClick={this.showdatatable}>{(!showdatatable)?["Wyświetl "]:["Ukryj "]}dane w tabeli</button>
        {(showdatatable)?[<button className='butonshow'onClick={this.showprocentdata}>{(!showcolumprocent)?["Pokaż "]:["Ukryj"]}stopy procentowych w tabeli</button>]:[]}
        <button className='butonshow'onClick={this.showchart}>{(!showchart)?["Pokaż "]:["Ukryj"]}dane na wykresie</button>
        {showchart?[<button className='butonshow'onClick={this.showchartprocent}>{(!showchartprocent)?["Pokaż "]:["Ukryj"]} stopy procentowych na wykresie</button>]:[]}
        <button className='butonshow'onClick={this.downloadxml}>Pobierz dane xml</button>
      </div>
        {(showdatatable)?[<table id="tabledata" className="tabledata">
          <tr>
            <td>Nazwa     rok/</td>
            <td>2010</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2011</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2012</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2013</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2014</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2015</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2016</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2017</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2018</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2019</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
            <td>2020</td>
            {(showcolumprocent) ? [ <td>stopy%</td>]:[]}
          </tr>
          {(tagoneselected) ? [ <tr>
        <td>{tagone.Nazwa}</td>
        <td>{tagone._2010}zł</td>
        {(showcolumprocent) ? [ <td>{procent[0]}</td>]:[]}
        <td>{tagone._2011}zł</td>
        {(showcolumprocent) ? [ <td>{procent[1]}</td>]:[]}
        <td>{tagone._2012}zł</td>
        {(showcolumprocent) ? [ <td>{procent[2]}</td>]:[]}
        <td>{tagone._2013}zł</td>
        {(showcolumprocent) ? [ <td>{procent[3]}</td>]:[]}
        <td>{tagone._2014}zł</td>
        {(showcolumprocent) ? [ <td>{procent[4]}</td>]:[]}
        <td>{tagone._2015}zł</td>
        {(showcolumprocent) ? [ <td>{procent[5]}</td>]:[]}
        <td>{tagone._2016}zł</td>
        {(showcolumprocent) ? [ <td>{procent[6]}</td>]:[]}
        <td>{tagone._2017}zł</td>
        {(showcolumprocent) ? [ <td>{procent[7]}</td>]:[]}
        <td>{tagone._2018}zł</td>
        {(showcolumprocent) ? [ <td>{procent[8]}</td>]:[]}
        <td>{tagone._2019}zł</td>
        {(showcolumprocent) ? [ <td>{procent[9]}</td>]:[]}
        <td>{tagone._2020}zł</td>
        {(showcolumprocent) ? [ <td>{procent[10]}</td>]:[]}
      </tr> ]:[] }
      {(tagtwoselected) ? [ <tr>
        <td>{tagtwo.Nazwa}</td>
        <td>{tagtwo._2010}zł</td>
        {(showcolumprocent) ? [ <td>{procent[0]}</td>]:[]}
        <td>{tagtwo._2011}zł</td>
        {(showcolumprocent) ? [ <td>{procent[1]}</td>]:[]}
        <td>{tagtwo._2012}zł</td>
        {(showcolumprocent) ? [ <td>{procent[2]}</td>]:[]}
        <td>{tagtwo._2013}zł</td>
        {(showcolumprocent) ? [ <td>{procent[3]}</td>]:[]}
        <td>{tagtwo._2014}zł</td>
        {(showcolumprocent) ? [ <td>{procent[4]}</td>]:[]}
        <td>{tagtwo._2015}zł</td>
        {(showcolumprocent) ? [ <td>{procent[5]}</td>]:[]}
        <td>{tagtwo._2016}zł</td>
        {(showcolumprocent) ? [ <td>{procent[6]}</td>]:[]}
        <td>{tagtwo._2017}zł</td>
        {(showcolumprocent) ? [ <td>{procent[7]}</td>]:[]}
        <td>{tagtwo._2018}zł</td>
        {(showcolumprocent) ? [ <td>{procent[8]}</td>]:[]}
        <td>{tagtwo._2019}zł</td>
        {(showcolumprocent) ? [ <td>{procent[9]}</td>]:[]}
        <td>{tagtwo._2020}zł</td>
        {(showcolumprocent) ? [ <td>{procent[10]}</td>]:[]}
      </tr> ]:[] }
      {(tagthreeselected) ? [ <tr>
        <td>{tagthree.Nazwa}</td>
        <td>{tagthree._2010}zł</td>
        {(showcolumprocent) ? [ <td>{procent[0]}</td>]:[]}
        <td>{tagthree._2011}zł</td>
        {(showcolumprocent) ? [ <td>{procent[1]}</td>]:[]}
        <td>{tagthree._2012}zł</td>
        {(showcolumprocent) ? [ <td>{procent[2]}</td>]:[]}
        <td>{tagthree._2013}zł</td>
        {(showcolumprocent) ? [ <td>{procent[3]}</td>]:[]}
        <td>{tagthree._2014}zł</td>
        {(showcolumprocent) ? [ <td>{procent[4]}</td>]:[]}
        <td>{tagthree._2015}zł</td>
        {(showcolumprocent) ? [ <td>{procent[5]}</td>]:[]}
        <td>{tagthree._2016}zł</td>
        {(showcolumprocent) ? [ <td>{procent[6]}</td>]:[]}
        <td>{tagthree._2017}zł</td>
        {(showcolumprocent) ? [ <td>{procent[7]}</td>]:[]}
        <td>{tagthree._2018}zł</td>
        {(showcolumprocent) ? [ <td>{procent[8]}</td>]:[]}
        <td>{tagthree._2019}zł</td>
        {(showcolumprocent) ? [ <td>{procent[9]}</td>]:[]}
        <td>{tagthree._2020}zł</td>
        {(showcolumprocent) ? [ <td>{procent[10]}</td>]:[]}
      </tr> ]:[] }
        </table>]:[]}
        
        {(showchart||showchartprocent)?[<div className="chartdiv" ><Chart chartdata={chartdata} key={1}/></div>]:[]}
        </div>]}
        </div>
       
      );
        
    }
  }
  
  export default ListState