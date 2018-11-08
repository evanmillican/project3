$(function(){
  console.log('scripts loaded');

  var url = 'js/Pew_Jan_2018_Tech_Use.json';
  var tech_2018 = [];


  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}


  $.ajax({
  type: 'GET',
  url: url,
  data: tech_2018,
  async: true,
  dataType: 'json',
  success:function(tech_2018){
      console.log(tech_2018);

/*first chart*/

  var chart = new Taucharts.Chart({

              guide:{
                x: {label: {text:'Books Read Over Past 12 Months'}},
                y: {label: {text:'Internet Frequency'}}
              },
              data: tech_2018,
              type: 'scatterplot',
              x: 'books1',
              y: 'age',
              color: 'intfreq',
              plugins:[
                Taucharts.api.plugins.get('legend')(),
                Taucharts.api.plugins.get('tooltip')({
                  fields: ['age', 'sex', 'state', 'intfreq', 'books1']
                })
              ]

          });
  chart.renderTo('#scatter');

    }

  });

  /*second chart*/

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
      x: {
        label:'Age', tickMin: 18, tickMax: 100, autoScale: false
      },
      y: {
        label:'Internet Frequency'
      }},
    dimensions:{
      intfreq: {
        type: 'category',
        order:[1, 2, 3, 4, 5, 8, 9]
      },
      age: {
        type: 'measure'
      }
    },
    data: tech_2018,
    type: 'scatterplot',
    x: 'age',
    y: 'intfreq',
    plugins: [Taucharts.api.plugins.get('legend')()]
  });

  chart.renderTo('#scatter2');

}

});





});//close doc ready

$(function(){
  console.log('scripts loaded');

  var url = 'js/congressional_rhet.json';
  var cong_rhet = [];


  $.ajax({
  type: 'GET',
  url: url,
  data: cong_rhet,
  async: true,
  dataType: 'json',
  success:function(cong_rhet){
      console.log(cong_rhet);

/*first chart*/

  var chart = new Taucharts.Chart({

              guide:{
                x: {label: {text:'Congressional Session'}},
                y: {label: {text:'Percentage of Opposition Posts'}}
              },
              dimensions:{
                oppose_any: {
                  type: 'measure'
                },
                total_posts: {
                  type: 'measure'
                }
              },
              data: cong_rhet,
              type: 'scatterplot',
              x: 'total_posts',
              y: 'oppose_any',
              color: 'party',
              plugins:[
                Taucharts.api.plugins.get('legend')(),
                Taucharts.api.plugins.get('tooltip')({
                  fields: ['name']
                })
              ]

          });
  chart.renderTo('#scatter3');

    }

  });

  });
