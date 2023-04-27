<template>
  <section>
    <div class="card">
      <div class="fieldset">
        <section class="section header">
          <h1 class="name"></h1>
          <p>Installation Guide</p>
            <!--CssLink-->
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
        </section>

        <section id="mobile" class="section topic hide">
          <div class="section-header">Mobile</div>
          <div class="section-body">
            <p>Mobile topics</p>
            <ul>
              <li>
                <!--CssLink-->
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
              </li>
            </ul>
          </div>
        </section>

        <section id="pc" class="section topic hide">
          <div class="section-header">PC</div>
          <div class="section-body">
            <p>PC topics</p>
            <ul>
              <li>
                <!--CssLink-->
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
              </li>
            </ul>
          </div>
        </section>

        <section id="console" class="section topic hide">
          <div class="section-header">Console</div>
          <div class="section-body">
            <div class="legend">
              <span class="sub"><a rel="noopener" href="#switch">Switch</a></span>
              <span class="sub"><a rel="noopener" href="#xbox">Xbox</a></span>
              <span class="sub"><a rel="noopener" href="#playstation">PlayStation</a></span>
            </div>

            <ul id="switch">
              <Steps 
                section='console',
                title='Switch',
                hasVideo = 'true',
                imgGroup='switch',
                channel='Pugmatt', 
                videoId='zalT_oR1nPM', 
                start='0',
                assist='BedrockConnect',
                dns='104.238.130.180',
                pfdns='000.000.000.000'
              />
              <li>
                <!--CssLink-->
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
              </li>
            </ul>
            <ul id="xbox">
              <Steps 
                section = 'console',
                title='Xbox',
                imgGroup='xbox',
                hasVideo='true',
                channel='Pugmatt', 
                videoId='g8mHvasVHMs', 
                start='0',
                assist='BedrockConnect',
                dns='104.238.130.180',
                pfdns='000.000.000.000'
              />
              <li>
                <!--CssLink-->
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
              </li>
            </ul>

            <ul id="playstation">
              <Steps 
                section = 'console',
                title='Playstation',
                imgGroup='playstation',
                hasVideo='true',
                channel='DonSibleyGames', 
                videoId='0MJVVhDeu2s', 
                start='352',
                assist='',
                dns='104.238.130.180',
                pfdns='000.000.000.000'
              />
              <li>
                <!--CssLink-->
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
              </li>
            </ul>
          </div>
        </section>

        <section id="discord" class="section topic hide">
          <div class="section-header">Discord</div>
          <div class="section-body">
            <p>Discord topics</p>
            <ul>
              <li></li>
              <li>
                <!--CssLink-->
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
              </li>
            </ul>
          </div>
        </section>

        <section id="friends" class="section topic hide">
          <div class="section-header">Friends</div>
          <div class="section-body">
            <p>Friends topics</p>
            <ul>
              <li></li>
              <li>
                <!--CssLink-->
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
              </li>
            </ul>
          </div>
        </section>

        <section id="nav" class="section topic">
          <ul>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#console" @click="toggle('console')">Console</a>
            </li>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#mobile" @click="toggle('mobile')">Mobile</a>
            </li>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#pc" @click="toggle('pc')">PC</a>
            </li>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#discord" @click="toggle('discord')">Discord</a>
            </li>
            <li>
              <a target="_self" rel="noopener noreferrer" href="#friends" @click="toggle('friends')">Friends</a>
            </li>
          </ul>
        </section>

        <div class="section container">
          <img class="logo" alt="Logo" :src="path+'/images/cropped_logo.png'" />
        </div>

      </div>
    </div>
  </section>
</template>

<script>

import Card from './components/Card.vue';
import CssLink from './components/CssLink.vue';
import Steps from './components/Steps.vue';

export default {
  name: 'App',
  components: {
    Card,
    CssLink,
    Steps
  },
  data(){
    // build image cdn host from vars
    const git_user = 'seeit360'
    const project = 'mc-pfaos'
    const branch = 'main'
    const dir = 'public'
    return {
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
      document.getElementById(id).classList.toggle("hide");
      document.getElementById("nav").classList.add("nav");
    }
  }
}
</script>

<style>
</style>
