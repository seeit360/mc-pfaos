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

        <!--topic CONSOLE -->
        <section id="console" class="nav">
          <ul>
            <li class="header">
              <a target="_self" rel="noopener noreferrer" href="#console" @click="toggle('sub-console')">Console</a>
                <legend id="sub-console" class="toggle legend hide">
                  <span class="sub"><a rel="noopener noreferrer" href="#console" @click="toggle('switch')">Switch</a></span>
                  <span class="sub"><a rel="noopener noreferrer" href="#console" @click="toggle('xbox')">Xbox</a></span>
                  <span class="sub"><a rel="noopener noreferrer" href="#console" @click="toggle('playstation')">PlayStation</a></span>
                </legend>
            </li>
          </ul>
          <section id="topic-console" class="section topic">
            <div class="section-body">


              <ul id="switch" class="toggle hide">
              <!--consolesteps switch-->
                <ConsoleSteps 
                  section='console'
                  title='Switch'
                  group='switch'

                  pros='Free (donations), available to nearly all devices.'
                  cons='Can be confusing if network issues happen. May need tweeks or experimentation.'
                  :brief='consoleBrief'

                  channel='Pugmatt'
                  videoId='zalT_oR1nPM'
                  start='0'

                  method='BedrockConnect'
                  methodAlt='https://github.com/Pugmatt/BedrockConnect'
                  methodHelp='https://github.com/Pugmatt/BedrockConnect/wiki/Troubleshooting'
                  methoddns='104.238.130.180'

                  :dns='dns'
                  :ip='ip'
                />
                <li>
                  <!--CssLink switch-->
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
              <!--consolesteps xbox-->
                <ConsoleSteps 
                  section='console'
                  title='Xbox'
                  group='xbox'

                  pros='Free, available across all devices.'
                  cons='Can be confusing if network issues happen. May need tweeks or experimentation.'
                  :brief='consoleBrief'

                  channel='Pugmatt'
                  videoId='g8mHvasVHMs'
                  start='0'

                  method='BedrockConnect'
                  methodAlt='https://github.com/Pugmatt/BedrockConnect'
                  methodHelp='https://github.com/Pugmatt/BedrockConnect/wiki/Troubleshooting'
                  methoddns='104.238.130.180'

                  :dns='dns'
                  :ip='ip'
                />
                <li>
                  <!--CssLink xbox-->
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
              <!--consolesteps playstation-->
                <ConsoleSteps 
                  section='console'
                  title='Playstation'
                  group='playstation'

                  pros='Free, available across all devices.'
                  cons='Can be confusing if network issues happen. May need tweeks or experimentation. May require Playstation Plus subscription.'
                  :brief="consoleBrief"

                  channel='DonSibleyGames'
                  videoId='0MJVVhDeu2s'
                  start='352'

                  method='BedrockConnect'
                  methodAlt='https://github.com/Pugmatt/BedrockConnect'
                  methodHelp='https://github.com/Pugmatt/BedrockConnect/wiki/Troubleshooting'
                  methoddns='104.238.130.180'

                  :dns='dns'
                  :ip='ip'
                />
                <li>
                  <!--CssLink playstation-->
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


        <!--topic MOBILE -->
        <section id="mobile" class="nav">
          <ul>
            <li class="header">
              <a target="_self" rel="noopener noreferrer" href="#mobile" @click="toggle('sub-mobile')">Mobile App</a>
                <legend id="sub-mobile" class="toggle legend hide">
                  <span class="sub"><a rel="noopener noreferrer" href="#mobile" @click="toggle('android')">Android</a></span>
                  <span class="sub"><a rel="noopener noreferrer" href="#mobile" @click="toggle('ios')">iOS</a></span>
                </legend>
            </li>
          </ul>
          <section id="topic-mobile" class="section topic">
            <div class="section-body">


              <ul id="android" class="toggle hide">
              <!--mobilesteps android-->
                <MobileSteps 
                  section='mobile'
                  title='Android'
                  group='android'

                  pros='Free, very easy if you have a mobile device, and are in the same WiFi network.'
                  cons='Connections to servers can be interrupted based on WiFi signal strength.'
                  :brief='mobileBrief'

                  storelink='https://play.google.com/store/apps/details?id=pl.extollite.bedrocktogetherapp'

                  channel=''
                  videoId=''
                  start=''

                  method='BedrockTogether'
                  methodHelp='https://discord.gg/mxJvy7PPTM'

                  :dns='dns'
                  :ip='ip'
                />
                <li>
                  <!--CssLink android-->
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
              <!--mobilesteps ios-->
                <MobileSteps 
                  section='mobile'
                  title='iOS'
                  group='ios'

                  pros='Free, Easy if you have a mobile device, and are in the same WiFi network.'
                  cons='Connections to servers can be interrupted based on WiFi signal strength.'
                  :brief='mobileBrief'

                  storelink='https://apps.apple.com/us/app/bedrocktogether/id1534593376?platform=iphone'

                  channel='CoveWolf'
                  videoId='BzwhrwCp3Io'
                  start='87'

                  method='BedrockTogether'
                  methodHelp='https://discord.gg/mxJvy7PPTM'

                  :dns='dns'
                  :ip='ip'
                />
                <li>
                  <!--CssLink ios-->
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

        <!--topic PC -->
        <section id="pc" class="nav">
          <ul>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#pc" @click="toggle('topic-pc')">PC</a>
            </li>
          </ul>
          <section id="topic-pc" class="toggle section topic hide">
            <div class="section-body">
              <ul>
              <!--pcsteps-->
                <PcSteps 
                  section='pc'
                  title='PC'
                  group='pc'

                  pros='Easy, built into Minecraft menu for both PC and mobile platforms.'
                  cons='Requires separate purchases for each platform of Minecraft Bedrock.'
                  :brief='pcBrief'

                  channel='PebbleHost'
                  videoId='WJSq0BQBU9E'
                  start='0'

                  method='Minecraft Add Server'
                  methodHelp=''

                  :dns='dns'
                  :ip='ip'
                />

                <li>
                  <!--CssLink pc-->
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

        <!--topic DISCORD -->
        <section id="discord" class="nav">
          <ul>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#discord" @click="toggle('topic-discord')">Discord Bot</a>
            </li>
          </ul>
          <section id="topic-discord" class="toggle section topic hide">
            <div class="section-body">


              <ul>
                <li></li>
                <li>
                  <!--CssLink discord-->
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

        <!--topic FRIENDS -->
        <section id="friends" class="nav">
          <ul>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#friends" @click="toggle('topic-friends')">Friends</a>
            </li>
          </ul>
          <section id="topic-friends" class="toggle section topic hide">
            <div class="section-body">
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
          <img class="logo" alt="Logo" :src="path+'/img/cropped_logo.png'" />
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
import PcSteps from './components/PcSteps.vue';

export default {
  name: 'App',
  components: {
    Version,
    CssLink,
    ConsoleSteps,
    MobileSteps,
    PcSteps
  },
  data(){
    // build image cdn host from vars
    const git_user = 'seeit360'
    const project = 'mc-pfaos'
    const branch = 'main'
    const dir = 'public'
    //update when site goes live
    const prefix = 'dev'
    
    return {
      // phantom frames version number
      v: '1.0.6',
      dns: prefix+'.phantomfra.me',
      ip: '000.000.000.000',

      consoleBrief: 'This method will show you how to temporaily change your network settings so you can add (and SAVE) 3rd party servers, including \"'+prefix+'.phantomfra.me\".',
      mobileBrief: 'This method will show you how to download an app to your mobile device so you can join 3rd party servers, including \"'+prefix+'.phantomfra.me\".',
      pcBrief: 'This method will show you how to join 3rd party servers, including \"'+prefix+'.phantomfra.me\". and optionally share add-on\'s with other local devices.',
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
