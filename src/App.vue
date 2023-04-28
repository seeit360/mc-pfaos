<template>
  <section>
    <div class="card">
      <div class="fieldset">
        <section class="section header">
          <h1 class="name"></h1>
          <p>Installation Guide v{{v}}</p>
            <!--CssLink-->
          <div class="css-link">
            <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
            <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
            <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
            <span class="tip" v-if="showInfo['1a']">
              {{ title_1a }}
            </span>
            <span class="tip" v-if="showInfo['1b']">
              {{ title_1b }}
            </span>
            <span class="tip" v-if="showInfo['1c']">
              {{ title_1c }}
            </span>
          </div>
        </section>

        <section id="console" class="nav">
          <ul>
            <li class="header">
              <a target="_self" rel="noopener noreferrer" href="#console" @click="toggle('sub-console')">Console</a>
                <p id="sub-console" class="toggle legend hide">
                  <span class="sub"><a rel="noopener noreferrer" href="#console" @click="toggle('switch')">Switch</a></span>
                  <span class="sub"><a rel="noopener noreferrer" href="#console" @click="toggle('xbox')">Xbox</a></span>
                  <span class="sub"><a rel="noopener noreferrer" href="#console" @click="toggle('playstation')">PlayStation</a></span>
                </p>
            </li>
          </ul>
          <section id="topic-console" class="section topic">
            <div class="section-body">
              <ul id="switch" class="toggle hide">
                <ConsoleSteps 
                  section='console'
                  title='Switch'
                  hasVideo='true'
                  imgGroup='switch'
                  channel='Pugmatt'
                  videoId='zalT_oR1nPM'
                  start='0'
                  assist='BedrockConnect'
                  dns='104.238.130.180'
                  pfdns='000.000.000.000'
                />
                <li>
                  <!--CssLink-->
                  <div class="css-link">
                    <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
                    <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
                    <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
                    <span class="tip" v-if="showInfo['1a']">
                      {{ title_1a }}
                    </span>
                    <span class="tip" v-if="showInfo['1b']">
                      {{ title_1b }}
                    </span>
                    <span class="tip" v-if="showInfo['1c']">
                      {{ title_1c }}
                    </span>
                  </div>
                </li>
              </ul>
              <ul id="xbox" class="toggle hide">
                <ConsoleSteps 
                  section='console'
                  title='Xbox'
                  imgGroup='xbox'
                  hasVideo='true'
                  channel='Pugmatt'
                  videoId='g8mHvasVHMs'
                  start='0'
                  assist='BedrockConnect'
                  dns='104.238.130.180'
                  pfdns='000.000.000.000'
                />
                <li>
                  <!--CssLink-->
                  <div class="css-link">
                    <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
                    <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
                    <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
                    <span class="tip" v-if="showInfo['1a']">
                      {{ title_1a }}
                    </span>
                    <span class="tip" v-if="showInfo['1b']">
                      {{ title_1b }}
                    </span>
                    <span class="tip" v-if="showInfo['1c']">
                      {{ title_1c }}
                    </span>
                  </div>
                </li>
              </ul>
              <ul id="playstation" class="toggle hide">
                <ConsoleSteps 
                  section='console'
                  title='Playstation'
                  imgGroup='playstation'
                  hasVideo='true'
                  channel='DonSibleyGames'
                  videoId='0MJVVhDeu2s'
                  start='352'
                  assist='BedrockConnect'
                  dns='104.238.130.180'
                  pfdns='000.000.000.000'
                />
                <li>
                  <!--CssLink-->
                  <div class="css-link">
                    <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
                    <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
                    <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
                    <span class="tip" v-if="showInfo['1a']">
                      {{ title_1a }}
                    </span>
                    <span class="tip" v-if="showInfo['1b']">
                      {{ title_1b }}
                    </span>
                    <span class="tip" v-if="showInfo['1c']">
                      {{ title_1c }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section id="mobile" class="nav">
          <ul>
            <li class="header">
              <a target="_self" rel="noopener noreferrer" href="#mobile" @click="toggle('sub-mobile')">Mobile</a>
                <p id="sub-mobile" class="toggle legend hide">
                  <span class="sub"><a rel="noopener noreferrer" href="#mobile" @click="toggle('android')">Android</a></span>
                  <span class="sub"><a rel="noopener noreferrer" href="#mobile" @click="toggle('ios')">iOS</a></span>
                </p>
            </li>
          </ul>
          <section id="topic-mobile" class="section topic">
            <div class="section-body">
              <ul id="android" class="toggle hide">
                <MobileSteps 
                  section='mobile'
                  title='Android'
                  hasVideo='false'
                  imgGroup='android'
                  channel=''
                  videoId=''
                  start=''
                  assist='BedrockTogether'
                  dns='104.238.130.180'
                  pfdns='000.000.000.000'
                />
                <li>
                  <!--CssLink-->
                  <div class="css-link">
                    <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
                    <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
                    <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
                    <span class="tip" v-if="showInfo['1a']">
                      {{ title_1a }}
                    </span>
                    <span class="tip" v-if="showInfo['1b']">
                      {{ title_1b }}
                    </span>
                    <span class="tip" v-if="showInfo['1c']">
                      {{ title_1c }}
                    </span>
                  </div>
                </li>
              </ul>
              <ul id="ios" class="toggle hide">
                <MobileSteps 
                  section='mobile'
                  title='iOS'
                  hasVideo='true'
                  imgGroup='ios'
                  channel='CoveWolf'
                  videoId='BzwhrwCp3Io'
                  start='87'
                  assist='BedrockTogether'
                  dns='104.238.130.180'
                  pfdns='000.000.000.000'
                />
                <li>
                  <!--CssLink-->
                  <div class="css-link">
                    <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
                    <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
                    <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
                    <span class="tip" v-if="showInfo['1a']">
                      {{ title_1a }}
                    </span>
                    <span class="tip" v-if="showInfo['1b']">
                      {{ title_1b }}
                    </span>
                    <span class="tip" v-if="showInfo['1c']">
                      {{ title_1c }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section id="pc" class="nav">
          <ul>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#pc" @click="toggle('topic-pc')">PC</a>
            </li>
          </ul>
          <section id="topic-pc" class="toggle section topic hide">
            <div class="section-body">
              <p>PC topics</p>
              <ul>
                <li></li>
                <li>
                  <!--CssLink-->
                  <div class="css-link">
                    <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
                    <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
                    <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
                    <span class="tip" v-if="showInfo['1a']">
                      {{ title_1a }}
                    </span>
                    <span class="tip" v-if="showInfo['1b']">
                      {{ title_1b }}
                    </span>
                    <span class="tip" v-if="showInfo['1c']">
                      {{ title_1c }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section id="discord" class="nav">
          <ul>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#discord" @click="toggle('topic-discord')">Discord</a>
            </li>
          </ul>
          <section id="topic-discord" class="toggle section topic hide">
            <div class="section-body">
              <p>Discord topics</p>
              <ul>
                <li></li>
                <li>
                  <!--CssLink-->
                  <div class="css-link">
                    <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
                    <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
                    <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
                    <span class="tip" v-if="showInfo['1a']">
                      {{ title_1a }}
                    </span>
                    <span class="tip" v-if="showInfo['1b']">
                      {{ title_1b }}
                    </span>
                    <span class="tip" v-if="showInfo['1c']">
                      {{ title_1c }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section id="friends" class="nav">
          <ul>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#friends" @click="toggle('topic-friends')">Friends</a>
            </li>
          </ul>
          <section id="topic-friends" class="toggle section topic hide">
            <div class="section-body">
              <p>Friends topics</p>
              <ul>
                <li></li>
                <li>
                  <!--CssLink-->
                  <div class="css-link">
                    <CssLink :style="classes_1a" :text="title_1a" :url="url_1a" @mouseover="showInfo['1a'] = true" @mouseleave="showInfo['1a'] = false" />
                    <CssLink :style="classes_1b" :text="title_1b" :url="url_1b" @mouseover="showInfo['1b'] = true" @mouseleave="showInfo['1b'] = false" />
                    <CssLink :style="classes_1c" :text="title_1c" :url="url_1c" @mouseover="showInfo['1c'] = true" @mouseleave="showInfo['1c'] = false" />
                    <span class="tip" v-if="showInfo['1a']">
                      {{ title_1a }}
                    </span>
                    <span class="tip" v-if="showInfo['1b']">
                      {{ title_1b }}
                    </span>
                    <span class="tip" v-if="showInfo['1c']">
                      {{ title_1c }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <div class="section container">
          <img class="logo" alt="Logo" :src="path+'/images/cropped_logo.png'" />
        </div>

      </div>
    </div>
  </section>
</template>

<script>

import Version from './components/Version.vue';
import CssLink from './components/CssLink.vue';
import ConsoleSteps from './components/ConsoleSteps.vue';
import MobileSteps from './components/MobileSteps.vue';
import Steps from './components/Steps.vue';

export default {
  name: 'App',
  components: {
    Version,
    CssLink,
    ConsoleSteps,
    MobileSteps,
    Steps
  },
  data(){
    // build image cdn host from vars
    const git_user = 'seeit360'
    const project = 'mc-pfaos'
    const branch = 'main'
    const dir = 'public'
    return {
      // phantom frames version number
      v: '1.0.6',
      // git project cdn as path - use `path+images/image_name` to get image hosting in html
      path: 'https://cdn.jsdelivr.net/gh/'+git_user+'/'+project+'@'+branch+'/'+dir,

      // CssLink settings
      classes_1a: 'icon twitter',
      title_1a: 'Follow Me (Twitter)',
      url_1a: 'https://twitter.com/TestPattern360',

      classes_1b: 'icon github',
      title_1b: 'Crafting (GitHub)',
      url_1b: 'https://github.com/seeit360',

      classes_1c: 'icon emerald',
      title_1c: 'Drop Loot (PayPal)',
      url_1c: 'https://paypal.me/phantomframes',

      // hover CssLink event
      showInfo:{
        '1a':false,
        '1b':false,
        '1c':false
      }
    }
  },
  methods: {
    toggle(id){
      var el = document.getElementsByClassName("toggle")
      for(var i = 0; i < el.length; i++){
        el[i].classList.add("hide")
      }
      document.getElementById(id).classList.toggle("hide")
    }
  }
}
</script>

<style>
</style>
