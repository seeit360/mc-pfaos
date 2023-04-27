<template>
  <li v-if="hasVideo == 'true'">
    <p>{{title}} Tutorial</p>
    <div class="video">
      <YouTube :channel="channel" :videoId="videoId" :start="start" />
    </div>
    <div class="fireball"></div>
  </li>
  <li>
    <p>{{ title }} Step-by-step</p>
    <!--bedrockconnect-->
    <p v-if="assist == 'BedrockConnect'"><small>Method: {{assist}}</small></p>
  </li>
  <li>
    <small class="step">Step 1)</small>
    <p>Go to "System Settings".</p>

    <!--switch-->
    <p v-if="title == 'Switch'">Scroll to Internet > Internet Settings</p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">Go to Network > Network Settings > Advanced Settings</p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">todo</p>

    <img alt="Step 1" class="fit" :src="path+'/img/'+imgGroup+'-step1.png'" />
  </li>
  <li>
    <small class="step">Step 2)</small>

    <!--switch-->
    <p v-if="title == 'Switch'">Select "Change Settings".</p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">Click "DNS settings".</p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">todo</p>

    <img alt="Step 2" class="fit" :src="path+'/img/'+imgGroup+'-step2.png'" />
  </li>
  <li>
    <small class="step">Step 3)</small>

    <!--switch-->
    <p v-if="title == 'Switch'">Change "DNS Settings" to "Manual".</p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">Change "IPv4 DNS Settings" to "Manual".</p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">todo</p>

    <img alt="Step 3" class="fit" :src="path+'/img/'+imgGroup+'-step3.png'" />
  </li>
  <li>
    <small class="step">Step 4)</small>

    <!--switch-->
    <p v-if="title == 'Switch'">
      Set the Primary DNS to "{{dns}}".
    </p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">
      Set the Primary IPv4 DNS to "{{dns}}".
    </p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">
      todo "{{dns}}".
    </p>

    <!--switch-->
    <p v-if="title == 'Switch'">
      Set the Secondary DNS to "8.8.8.8". <small>(Google DNS)</small>
    </p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">
      Set the Secondary IPv4 DNS to "8.8.8.8". <small>(Google DNS)</small>
    </p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">
      todo "8.8.8.8". <small>(Google DNS)</small>
    </p>

    <img alt="Step 4" class="fit" :src="path+'/img/'+imgGroup+'-step4.png'" />
    <!--bedrockconnect-->
    <p v-if="assist == 'BedrockConnect'">
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
    <!--switch-->
    <p v-if="title == 'Switch'">Click "Save".</p>
    <!--xbox-->
    <p v-if="title == 'Xbox'">Wait for connection > Click "Continue".</p>
    <!--playstation-->
    <p v-if="title == 'Playstation'">todo</p>
    
    <img alt="Step 5" class="fit" :src="path+'/img/'+imgGroup+'-step5.png'" />
  </li>
  <li>
    <small class="step">Step 6)</small>
    <p>Open Minecraft.</p>
    <img alt="Step 6" class="fit" :src="path+'/img/'+imgGroup+'-step6.png'" />
  </li>
  <li>
    <small class="step">Step 7)</small>
    <p>Choose "Servers" Tab</p>
    <p>Click any "Featured Servers" listed.</p>
    <p><small>(This step opens the "Servers List" screen.)</small></p>
    <!--consoles-->
    <div v-if="section == 'console'">
      <img alt="Step 7" class="fit" :src="path+'/img/console-step7.png'" />
    </div>
    <!--others-->
    <div v-if="section != 'console'">
      <img alt="Step 7" class="fit" :src="path+'/img/'+imgGroup+'-step7.png'" />
    </div>
  </li>
  <li>
    <small class="step">Step 8)</small>
    <p>Choose "Connect to a Server" in "Server List" screen.</p>
    <!--consoles-->
    <div v-if="section == 'console'">
      <img alt="Step 8" class="fit" :src="path+'/img/console-step8.png'" />
    </div>
    <!--others-->
    <div v-if="section != 'console'">
      <img alt="Step 8" class="fit" :src="path+'/img/'+imgGroup+'-step8.png'" />
    </div>
    <!--bedrockconnect-->
    <p v-if="assist == 'BedrockConnect'">
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
    <p>Enter "{{pfdns}}" as Server Address.</p>
    <p>Enter "19132" as Server Port.</p>
    <p><small>(This is the Phantom Frames Distribution BDS Server)</small></p>
    <!--consoles-->
    <div v-if="section == 'console'">
      <img alt="Step 9" class="fit" :src="path+'/img/console-step9.png'" />
    </div>
    <!--others-->
    <div v-if="section != 'console'">
      <img alt="Step 9" class="fit" :src="path+'/img/'+imgGroup+'-step9.png'" />
    </div>
  </li>
  <li>
    <small class="step">Step 10)</small>
    <p>Optional: Toggle "Add to server list" to "On" for update visits.</p>
    <p>Click "Submit"</p>
    <!--consoles-->
    <div v-if="section == 'console'">
      <img alt="Step 10" class="fit" :src="path+'/img/console-step10.png'" />
    </div>
    <!--others-->
    <div v-if="section != 'console'">
      <img alt="Step 10" class="fit" :src="path+'/img/'+imgGroup+'-step10.png'" />
    </div>
  </li>
  <li>
    <small class="step">Step 11)</small>
    <p>Join the Phantom Frames Add-on Server.</p>
    <p>Accept the "Add-on Required" download to join.</p>
    <!--consoles-->
    <div v-if="section == 'console'">
      <img alt="Step 11" class="fit" :src="path+'/img/console-step11.png'" />
    </div>
    <!--others-->
    <div v-if="section != 'console'">
      <img alt="Step 11" class="fit" :src="path+'/img/'+imgGroup+'-step11.png'" />
    </div>
    <p>Congratulations. You now have Phantom Frames.</p>
    <p><small>You are logged in as "Guest". As a courtesy to others, please keep visits to under 5 minutes, so others may join this Add-On distribution Minecraft World to download/update.</small></p>
  </li>
</template>
<script>
import YouTube from './YouTube.vue';
export default {

  name: 'Steps',
  components:{
    YouTube
  },
  props: {
    // section = 'console', but using this allows sections to be ommitted and/or replaced
    // e.g. v-if="section == 'console'" keeps that entry hides other that are being checked
    section: String,
    title: String,
    imgGroup: String,
    hasVideo: String,
    channel: String, 
    videoId: String, 
    start: String,
    assist: String,
    dns: String,
    pfdns: String
  },
  data() {
    // build image cdn host from vars
    const git_user = 'seeit360'
    const project = 'mc-pfaos'
    const branch = 'main'
    const dir = 'public'
    return {
      // git project cdn as path - use `path+/img/<image_name>` to use image hosting in html
      path: 'https://cdn.jsdelivr.net/gh/'+git_user+'/'+project+'@'+branch+'/'+dir
    }
  }
}
</script>