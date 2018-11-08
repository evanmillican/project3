$(function(){
  console.log('scripts loaded');


/*header disappear on scroll*/

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

/*begin charts*/

  var url = './js/congressional_rhet.json';
  var cong_rhet = [];
  var html = '';




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
                x: {label: {text:'Total Number of Posts for Each Member'},
                    padding: {b:40,l:40,t:10,r:10}
              },
                y: {label: {text:'Percentage of Opposition Posts'},
                    padding: {b:40,l:40,t:10,r:10}
                  }
              },
              dimensions:{
                oppose_any: {
                  type: 'measure',
                  scale: 'linear'
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
                  fields: ['name', 'total_posts', 'session']
                })
              ]

          });
  chart.renderTo('#scatter1');

  /*second chart*/

  var chart = new Taucharts.Chart({

              guide:{
                x: {label: {text:'Congressional Session'},
                    padding: {b:40,l:40,t:10,r:10}
              },
                y: {label: {text:'Percentage of Posts About a Local Person, Place, Event, or Group'},
                    padding: {b:40,l:40,t:10,r:10}
                  },
                color:{
                    brewer:{
                      'Democratic Party':'#00CB03',
                      'Republican Party': '#FFEE23'
                    }
                  }
              },
              dimensions:{
                local_topic: {
                  type: 'measure',
                  scale: 'linear'
                },
                session: {
                  type:'order',
                  order:[114,115]
                }
              },

              data: cong_rhet,
              type: 'bar',
              x: 'session',
              y: 'local_topic',
              color: 'party',
              plugins:[
                Taucharts.api.plugins.get('legend')(),
                Taucharts.api.plugins.get('tooltip')({
                  fields: ['name', 'total_posts', 'local_topic', 'session']
                })
              ]

          });

          chart.renderTo('#bar1');

/*test chart 3
var chart = new Taucharts.Chart({

            guide:{
              x: {label: {text:'Total Number of Posts for Each Member'},
                  padding: {b:40,l:40,t:10,r:10}
            },
              y: {label: {text:'Percentage of Opposition Posts'},
                  padding: {b:40,l:40,t:10,r:10}
                }
            },
            dimensions:{
              support_any: {
                type: 'measure',
                scale: 'linear'
              },
              total_posts: {
                type: 'measure'
              }
            },
            data: cong_rhet,
            type: 'scatterplot',
            x: 'total_posts',
            y: 'support_any',
            color: 'party',
            plugins:[
              Taucharts.api.plugins.get('legend')(),
              Taucharts.api.plugins.get('tooltip')({
                fields: ['name', 'total_posts', 'session']
              })
            ]

        });
chart.renderTo('#scatter3');*/


        }



    }); /*close ajax call*/






}); /*close doc ready*/
