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

        <section class="section topic">
          <div class="section-header">Mobile</div>
          <div class="section-body">
            <p>Mobile topics</p>
          </div>
        </section>

        <section class="section topic">
          <div class="section-header">PC</div>
          <div class="section-body">
            <p>PC topics</p>
          </div>
        </section>

        <section class="section topic">
          <div class="section-header">Console</div>
          <div class="section-body">
            <div class="legend">
              <span class="sub"><a rel="noopener" href="#switch">Switch</a></span>
              <span class="sub"><a rel="noopener" href="#xbox">Xbox</a></span>
              <span class="sub"><a rel="noopener" href="#playstation">PlayStation</a></span>
            </div>

            <ul id="switch">
              <li>
                <p>Switch Tutorial:</p>
                <p><small>Method: BedrockConnect</small></p>
                <div class="video">
                  <YouTube channel="Pugmatt" videoId="zalT_oR1nPM" start="0" />
                </div>
                <div class="fireball"></div>
              </li>
              <li>
                <p>Switch Step-by-step</p>
                <p><small>Method: BedrockConnect</small></p>
              </li>
              <li>
                <small class="step">Step 1)</small>
                <p>Go to "System Settings".</p>
                <p>Scroll to Internet > Internet Settings</p>
                <img alt="Step 1" class="fit" :src="path+'/images/switch-step1.png'" />
              </li>
              <li>
                <small class="step">Step 2)</small>
                <p>Select "Change Settings".</p>
                <img alt="Step 2" class="fit" :src="path+'/images/switch-step2.png'" />
              </li>
              <li>
                <small class="step">Step 3)</small>
                <p>Change "DNS Settings" to "Manual".</p>
                <img alt="Step 3" class="fit" :src="path+'/images/switch-step3.png'" />
              </li>
              <li>
                <small class="step">Step 4)</small>
                <p>
                  Set the Primary DNS to "104.238.130.180". <small>(BedrockConnect)</small>
                </p>
                <p>
                  Set the Secondary DNS to "8.8.8.8". <small>(Google DNS)</small>
                </p>
                <img alt="Step 4" class="fit" :src="path+'/images/switch-step4.png'" />
                <p>
                  <small>(Issues? Other DNS listings can be found here:
                    <a
                      title="Bedrock Connect"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Pugmatt/BedrockConnect"
                      >https://github.com/Pugmatt/BedrockConnect</a>)
                  </small>
                </p>
              </li>
              <li>
                <small class="step">Step 5)</small>
                <p>Click "Save".</p>
                <img alt="Step 5" class="fit" :src="path+'/images/switch-step5.png'" />
              </li>
              <li>
                <small class="step">Step 6)</small>
                <p>Open Minecraft.</p>
                <img alt="Step 6" class="fit" :src="path+'/images/switch-step6.png'" />
              </li>
              <li>
                <small class="step">Step 7)</small>
                <p>Choose "Servers" Tab</p>
                <p>Click any* "Featured Servers" listed. <small>(*not CubeCraft)</small></p>
                <p><small>(This step opens the "Servers List" screen.)</small></p>
                <img alt="Step 7" class="fit" :src="path+'/images/switch-step7.png'" />
              </li>
              <li>
                <small class="step">Step 8)</small>
                <p>Choose "Connect to a Server" in "Server List" screen.</p>
                <img alt="Step 8" class="fit" :src="path+'/images/switch-step8.png'" />
                <p>
                  <small>(Issues? Read Wiki:
                    <a 
                    title="Bedrock Connect Troubleshooting"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://github.com/Pugmatt/BedrockConnect/wiki/Troubleshooting"
                    >https://github.com/Pugmatt/BedrockConnect/wiki/Troubleshooting</a>)
                  </small>
                </p>
              </li>
              <li>
                <small class="step">Step 9)</small>
                <p>Enter "000.000.000.000" as Server Address.</p>
                <p>Enter "19132" as Server Port.</p>
                <p><small>(This is the Phantom Frames Distribution BDS Server)</small></p>
                <img alt="Step 9" class="fit" :src="path+'/images/switch-step9.png'" />
              </li>
              <li>
                <small class="step">Step 10)</small>
                <p>Optional: Toggle "Add to server list" to "On" for update visits.</p>
                <p>Click "Submit"</p>
                <img alt="Step 10" class="fit" :src="path+'/images/switch-step10.png'" />
              </li>
              <li>
                <small class="step">Step 11)</small>
                <p>Join the Phantom Frames Add-on Server.</p>
                <p>Accept the "Add-on Required" download to join.</p>
                <img alt="Step 11" class="fit" :src="path+'/images/switch-step10.png'" />
                <p>Congratulations. You now have Phantom Frames.</p>
                <p><small>You are logged in as "Guest". As a courtesy to others, please keep visits to under 5 minutes, so others may join this Add-On distribution Minecraft World to download/update.</small></p>
              </li>
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
              <li>
                <p>Xbox Tutorial</p>
                <div class="video">
                  <YouTube channel="Pugmatt" videoId="g8mHvasVHMs" start="0" />
                </div>
                <div class="fireball"></div>
              </li>
              <li>
                <p>Xbox Step-by-step</p>
                <img alt="image" class="fit" src="" />
              </li>
              <li>
                <small class="step">Step 1)</small>
                <p>Write something</p>
              </li>
              <li>
                <small class="step">Step 2)</small>
                <p>Write something</p>
              </li>
              <li>
                <small class="step">Step 3)</small>
                <p>Write something</p>
              </li>
            </ul>

            <ul id="playstation">
              <p>Playstation Tutorial</p>
              <div class="video">
                <YouTube channel="DonSibleyGames" videoId="0MJVVhDeu2s" start="352" />
              </div>
              <div class="fireball"></div>
              <li>
                <p>Playstation Step-by-step</p>
                <img alt="image" class="fit" src="" />
              </li>
              <li>
                <small class="step">Step 1)</small>
                <p>Write something</p>
              </li>
              <li>
                <small class="step">Step 2)</small>
                <p>Write something</p>
              </li>
              <li>
                <small class="step">Step 3)</small>
                <p>Write something</p>
              </li>
            </ul>
          </div>
        </section>

        <section class="section topic">
          <div class="section-header">Discord</div>
          <div class="section-body">
            <p>Discord topics</p>
          </div>
        </section>

        <section class="section topic">
          <div class="section-header">Friends</div>
          <div class="section-body">
            <p>Friends topics</p>
          </div>
        </section>

        <section class="section topic">
          <ul>
            <li>
              <a target="_self" rel="noopener noreferrer" href="console">Console</a>
            </li>
            <li>
              <a target="_self" rel="noopener noreferrer" href="mobile">Mobile</a>
            </li>
            <li>
              <a target="_self" rel="noopener noreferrer" href="pc">PC</a>
            </li>
            <li>
              <a target="_self" rel="noopener noreferrer" href="discord">Discord</a>
            </li>
            <li>
              <a target="_self" rel="noopener noreferrer" href="friends">Friends</a>
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
import YouTube from './components/YouTube.vue';
import CssLink from './components/CssLink.vue';

export default {
  name: 'App',
  components: {
    Card,
    YouTube,
    CssLink
  },
  data(){
    // build image cdn host from vars
    const git_user = 'seeit360',
    const project = 'mc-pfaos',
    const branch = 'main',
    const dir = 'public',
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
    
  }
}
</script>

<style></style>
