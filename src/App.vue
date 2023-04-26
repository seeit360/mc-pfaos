<template>
  <section>
    <div class="card">
      <div class="fieldset">
        <section class="section header">
          <h1 class="name"></h1>
          <p>Installation Guide</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/TestPattern360"
          >
            <i class="icon twitter" title="Follow Me (Twitter)"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/seeit360"
          >
            <i class="icon github" title="Crafting (GitHub)"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://paypal.me/phantomframes"
          >
            <i class="icon emerald" title="Drop Loot (PayPal)"></i>
          </a>
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
                <p>Switch Tutorial</p>
                <div class="video">
                  <YouTube channel="Pugmatt" videoId="zalT_oR1nPM" start="0" />
                </div>
                <div class="fireball"></div>
              </li>
              <li>
                <p>Switch Step-by-step</p>
              </li>
              <li>
                <small class="step">Step 1)</small>
                <p>Go to "System Settings"</p>
                <p>Scroll to Internet > Internet Settings</p>
                <img alt="Step 1" class="fit" :src="path+'/images/switch-step1.png'" />
              </li>
              <li>
                <small class="step">Step 2)</small>
                <p>Select "Change Settings"</p>
                <img alt="Step 2" class="fit" :src="path+'/images/switch-step2.png'" />
              </li>
              <li>
                <small class="step">Step 3)</small>
                <p>Change "DNS Settings" to "Manual"</p>
                <img alt="Step 3" class="fit" :src="path+'/images/switch-step3.png'" />
              </li>
              <li>
                <small class="step">Step 4)</small>
                <p>
                  Set the Primary DNS to "104.238.130.180" <small>(Free service)</small>
                </p>
                <p>
                  Set the Secondary DNS to "8.8.8.8" <small>(Google DNS)</small>
                </p>
                <img alt="Step 4" class="fit" :src="path+'/images/switch-step4.png'" />
                <p>
                  <small>Issues? Other free DNS listings can be found here:
                    <a
                      title="Bedrock Connect"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Pugmatt/BedrockConnect"
                      >https://github.com/Pugmatt/BedrockConnect</a>
                  </small>
                </p>
              </li>
              <li>
                <small class="step">Step 5)</small>
                <p>Click "Save"</p>
                <img alt="Step 5" class="fit" :src="path+'/images/switch-step5.png'" />
              </li>
              <li>
                <small class="step">Step 6)</small>
                <p>Open Minecraft</p>
                <img alt="Step 5" class="fit" :src="path+'/images/switch-step6.png'" />
              </li>
              <li>
                <small class="step">Step 7)</small>
                <p>Choose "Servers" Tab > click *any* "Featured Servers"</p>
                <img alt="Step 5" class="fit" :src="path+'/images/switch-step7.png'" />
              </li>
              <li>
                <small class="step">Step 8)</small>
                <p>step here</p>
                <img alt="Step 5" class="fit" :src="path+'/images/switch-step8.png'" />
              </li>
              <li>
                <small class="step">Step 9)</small>
                <p>step here</p>
                <img alt="Step 5" class="fit" :src="path+'/images/switch-step9.png'" />
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
          <Card :msg="message"/>
          <input type="text" v-model="message" />
          <button @click="alertMessage">Alert</button>
        </section>

        <div class="section container">
          <img class="logo" :title="message" alt="Logo" :src="path+'/images/cropped_logo.png'" />
        </div>

      </div>
    </div>
  </section>
</template>

<script>

import Card from './components/Card.vue';
import YouTube from './components/YouTube.vue';

export default {
  name: 'App',
  components: {
    Card,
    YouTube
  },
  data(){
    // how to image return as data
    return {
      message: 'Hi there',
      path: 'https://cdn.jsdelivr.net/gh/seeit360/mc-pfaos@main/public'
    }
  },
  methods: {
    alertMessage(){
      alert(this.message)
    }
  }
}
</script>

<style></style>
