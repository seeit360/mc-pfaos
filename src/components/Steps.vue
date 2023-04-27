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
    <p v-if="assist == 'BedrockConnect'"><small>Method: {{assist}}</small></p>
  </li>
  <li>
    <small class="step">Step 1)</small>
    <p>Go to "System Settings".</p>
    <p>Scroll to Internet > Internet Settings</p>
    <img alt="Step 1" class="fit" :src="path+'/images/'+imgGroup+'-step1.png'" />
  </li>
  <li>
    <small class="step">Step 2)</small>
    <p>Select "Change Settings".</p>
    <img alt="Step 2" class="fit" :src="path+'/images/'+imgGroup+'-step2.png'" />
  </li>
  <li>
    <small class="step">Step 3)</small>
    <p>Change "DNS Settings" to "Manual".</p>
    <img alt="Step 3" class="fit" :src="path+'/images/'+imgGroup+'-step3.png'" />
  </li>
  <li>
    <small class="step">Step 4)</small>
    <p>
      Set the Primary DNS to "{{dns}}".
    </p>
    <p>
      Set the Secondary DNS to "8.8.8.8". <small>(Google DNS)</small>
    </p>
    <img alt="Step 4" class="fit" :src="path+'/images/'+imgGroup+'-step4.png'" />
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
    <p>Click "Save".</p>
    <img alt="Step 5" class="fit" :src="path+'/images/'+imgGroup+'-step5.png'" />
  </li>
  <li>
    <small class="step">Step 6)</small>
    <p>Open Minecraft.</p>
    <img alt="Step 6" class="fit" :src="path+'/images/'+imgGroup+'-step6.png'" />
  </li>
  <li>
    <small class="step">Step 7)</small>
    <p>Choose "Servers" Tab</p>
    <p>Click any "Featured Servers" listed.</p>
    <p><small>(This step opens the "Servers List" screen.)</small></p>
    <!--consoles-->
    <img v-if="section == 'console'" alt="Step 7" class="fit" :src="path+'/images/console-step7.png'" />
    <!--others-->
    <img v-if="section != 'console'" alt="Step 7" class="fit" :src="path+'/images/'+imgGroup+'-step7.png'" />
  </li>
  <li>
    <small class="step">Step 8)</small>
    <p>Choose "Connect to a Server" in "Server List" screen.</p>
    <!--consoles-->
    <img v-if="section == 'console'" alt="Step 8" class="fit" :src="path+'/images/console-step8.png'" />
    <!--others-->
    <img v-if="section != 'console'" alt="Step 8" class="fit" :src="path+'/images/'+imgGroup+'-step8.png'" />
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
    <img v-if="section == 'console'" alt="Step 9" class="fit" :src="path+'/images/console-step9.png'" />
    <!--others-->
    <img v-if="section != 'console'" alt="Step 9" class="fit" :src="path+'/images/'+imgGroup+'-step9.png'" />
  </li>
  <li>
    <small class="step">Step 10)</small>
    <p>Optional: Toggle "Add to server list" to "On" for update visits.</p>
    <p>Click "Submit"</p>
    <img alt="Step 10" class="fit" :src="path+'/images/'+imgGroup+'-step10.png'" />
  </li>
  <li>
    <small class="step">Step 11)</small>
    <p>Join the Phantom Frames Add-on Server.</p>
    <p>Accept the "Add-on Required" download to join.</p>
    <!--consoles-->
    <img v-if="section == 'console'" alt="Step 11" class="fit" :src="path+'/images/console-step10.png'" />
    <!--others-->
    <img v-if="section != 'console'"alt="Step 11" class="fit" :src="path+'/images/'+imgGroup+'-step10.png'" />
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
    const git_user = 'seeit360',
    const project = 'mc-pfaos',
    const branch = 'main',
    const dir = 'public',
    return {
      // git project cdn as path - use `path+images/image_name` to get image hosting in html
      path: 'https://cdn.jsdelivr.net/gh/'+git_user+'/'+project+'@'+branch+'/'+dir
    }
  }
}
</script>