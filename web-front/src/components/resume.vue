<template>
  <div class="resume">
    <header class="bg-custom py-5 mb-5">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-12">
            <h1 class="display-4 text-black mt-5 mb-2">Jasdaporn Chaitan</h1>
            <p class="lead mb-5 text-black-50">Hi I'm WordPress Developer and Full stack skills.</p>
          </div>
        </div>
      </div>
    </header>
    <section class="container">
      <div class="row">
        <div class="col-sm-8">

          <article class="experience">

            <h3>Experience Timeline</h3>

            <div class="history-tl-container">
              <ul class="tl">
                <li class="tl-item" ng-repeat="item in retailer_history">
                  <div class="timestamp">
                    June 2012 <br> December 2017
                  </div>
                  <div class="item-title">Full Stack ( Personal )</div>
                  <div class="item-detail">Development WordPress Theme to sell on the market <a href="https://themeforest.net/user/themebuffets/portfolio">Themeforest</a></div>
                </li>
                <li class="tl-item" ng-repeat="item in retailer_history">
                  <div class="timestamp">
                    June 2015 <br> December 2017
                  </div>
                  <div class="item-title">Web Developer ( Full stack ) Dealsheep </div>
                  <div class="item-detail">Setup Cloud server ( AWS ) , Frontend , Backend</div>
                </li>
                <li class="tl-item" ng-repeat="item in retailer_history">
                  <div class="timestamp">
                    November 2018 <br> December 2018
                  </div>
                  <div class="item-title">Coder ( TMB )</div>
                  <div class="item-detail">Position Front-end and Backend ( coding only ) <a href="https://www.tmbfan.net/tmb/">Link TMB</a></div>
                </li>
                <li class="tl-item" ng-repeat="item in retailer_history">
                  <div class="timestamp">
                    February 2020 <br> February 2020
                  </div>
                  <div class="item-title">nanarun.com ( Full stack )</div>
                  <div class="item-detail">Rebuild Design and Improvement New system This's Project advance Mysql and setup website on VPS my self.</div>
                </li>
                <li class="tl-item" ng-repeat="item in retailer_history">
                  <div class="timestamp">
                    January 2020 <br> January 2020
                  </div>
                  <div class="item-title">Line Bot Developer</div>
                  <div class="item-detail">Missuri.shop Development Line bot</div>
                </li>
              </ul>
            </div>

          </article>

          <hr>

          <article class="Volunteering">

            <h3>Volunteering</h3>

            <ul>
              <li>WordCamp 2017 Volunteer for wordpress.org in bangkok</li>
            </ul>

          </article>

          <hr>

          <article class="Speaker">

            <h3>Speaker</h3>

            <ul>
              <li>WordCamp 2018 Speaker for wordpress.org in bangkok</li>
            </ul>

          </article>

          <hr>

          <article class="Skills">

            <h3>Skills</h3>

            <ul class="tag-cloud">
              <li><a href="#">NodeJS</a></li>
              <li><a href="#">Expert WordPress</a></li>
              <li><a href="#">Expert Mysql</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">REST API</a></li>
              <li><a href="#">JSON</a></li>
              <li><a href="#">HTML5</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JS vanilla</a></li>
              <li><a href="#">Vue.js</a></li>
              <li><a href="#">Ubuntu CLI</a></li>
              <li><a href="#">Mail API</a></li>
              <li><a href="#">SMS API</a></li>
            </ul>

          </article>

        </div>
        <!-- widget -->
        <div class="col-sm-4">
          <article class="contact-infomation">
            <h3 class='title-contact-infomation'>Contact Infomation</h3>
            <!-- email -->
            <div class="block-frame grey">
              <div class="row">
                <div class="col-sm-4">
                  E-mail
                </div>
                <div class="col-sm-7">
                  Ba5nanas@gmail.com
                </div>
              </div>
            </div>
            <!-- end email -->

            <!-- Address -->
            <div class="block-frame">
              <div class="row">
                <div class="col-sm-4 justify-content-center align-self-center">
                  Address
                </div>
                <div class="col-sm-8">
                  519 moo 8 pongsantong meung lampang 52100
                </div>
              </div>
            </div>
            <!-- end Address -->

            <!-- Phone -->
            <div class="block-frame grey">
              <div class="row">
                <div class="col-sm-4">
                  Phone
                </div>
                <div class="col-sm-8">
                  09-8769-8466
                </div>
              </div>
            </div>
            <!-- end phone -->

            <!-- Date of Birth -->
            <div class="block-frame">
              <div class="row">
                <div class="col-sm-4">
                  Birth Date
                </div>
                <div class="col-sm-8">
                  1991-03-08
                </div>
              </div>
            </div>
            <!-- end Date of birth -->

            <!-- Nationality -->
            <div class="block-frame grey">
              <div class="row">
                <div class="col-sm-4">
                  Nationality
                </div>
                <div class="col-sm-8">
                  Thai
                </div>
              </div>
            </div>
            <!-- end Nationality -->

            <!-- Education -->
            <div class="block-frame">
              <div class="row">
                <div class="col-sm-4">
                  Education
                </div>
                <div class="col-sm-8">
                  Bachelor <br>
                  Lampang Intertech
                </div>
              </div>
            </div>
            <!-- end Nationality -->

          </article>
        </div>
        <!-- end widget -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'resume'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-custom {
  background:#f1e7e7;
}
.block-frame {
  padding:10px 20px;
}
.block-frame.grey {
  background:#f3f3f3;
  font-weight: 700;
}
.title-contact-infomation {
  margin-bottom: 20px;
}

article.Skills , article.Speaker , article.Volunteering {
  margin-bottom: 40px;
  margin-top:40px;
  display:block;
}

article.Skills::after {
  content:"";
  clear:both;
  width:100%;
  display:block;
}

/*------------------
Tag Cloud
-------------------*/

ul.tag-cloud {
  list-style-type: none;
  padding:0;
}

ul.tag-cloud a {
  color:#787878;
  padding:10px 20px;
  display:block;
}

ul.tag-cloud li {
  width:220px;
  font-size: 14px;
  background:#efefef;
  float:left;
  margin:10px;
}

/*------------------
Timeline css
-------------------*/


.history-tl-container{
    font-family: "Roboto",sans-serif;
  width:100%;
  margin:auto;
  display:block;
  position:relative;
}
.history-tl-container ul.tl{
    margin:20px 0;
    padding:0;
    display:inline-block;

}
.history-tl-container ul.tl li{
    list-style: none;
    margin:auto;
    margin-left:150px;
    min-height:50px;
    /*background: rgba(255,255,0,0.1);*/
    border-left:1px dashed #86D6FF;
    padding:0 0 50px 30px;
    position:relative;
}
.history-tl-container ul.tl li:last-child{ border-left:0;}
.history-tl-container ul.tl li::before{
    position: absolute;
    left: -10px;
    top: 0px;
    content: " ";
    border: 8px solid rgba(255, 255, 255, 0.74);
    border-radius: 500%;
    background: #258CC7;
    height: 20px;
    width: 20px;
    transition: all 500ms ease-in-out;

}
.history-tl-container ul.tl li:hover::before{
    border-color:  #258CC7;
    transition: all 1000ms ease-in-out;
}
ul.tl li .item-title{
}
ul.tl li .item-detail{
    color:rgba(0,0,0,0.5);
    font-size:12px;
}
ul.tl li .timestamp{
    color: #8D8D8D;
    position: absolute;
  width:100px;
    left: -27%;
    text-align: right;
    font-size: 12px;
}
</style>
