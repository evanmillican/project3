$(function(){
  console.log('scripts loaded');

  var url = 'js/Pew_Jan_2018_Tech_Use.json';
  var tech_2018 = '';


  $.ajax({
  type: 'GET',
  url: url,
  data: tech_2018,
  async: true,
  dataType: 'json',
  success:function(tech_2018){
      console.log(tech_2018);

  var chart = new Taucharts.Chart({
              guide:{
                x: {label: 'Age'},
                y: {label: 'Frequency of Internet Use'}
              },
              data: tech_2018,
              type: 'bar',
              x: 'age',
              y: 'intfreq',
              plugins:[
                Taucharts.api.plugins.get('legend')()
              ]

          });
  chart.renderTo('#bar');

    }

  });

});
