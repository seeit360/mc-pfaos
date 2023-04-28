<template>
  <li v-if="hasVideo == 'true'">
    <p class="title">{{title}} Tutorial</p>
    <div class="video">
      <YouTube :channel="channel" :videoId="videoId" :start="start" />
    </div>
    <div class="fireball"></div>
  </li>
  <li>
    <p class="title">{{ title }} Step-by-step</p>
    <!--bedrocktogether-->
    <p v-if="assist == 'BedrockTogether'"><small>Method: {{assist}}</small></p>
  </li>
  <li>
    <small class="step">Step 1)</small>
    <p>Go to the store on your device</p>
    <img alt="Step 1" class="fit" :src="path+imgGroup+'-step1.png'" />
  </li>
  <li>
    <small class="step">Step 2)</small>
    <p>Search for the "BedrockTogether" App</p
    <img alt="Step 2" class="fit" :src="path+imgGroup+'-step2.png'" />
  </li>
  <li>
    <small class="step">Step 3)</small>
    <p>Install the Free version (ad supported)</p>
    <img alt="Step 3" class="fit" :src="path+imgGroup+'-step3.png'" />
  </li>
  <li>
    <small class="step">Step 4)</small>
    <p>Open the Bedrock Together App</p>
    <p>Enter "{{pfdns}}" as Server Address.</p>
    <p>Enter "19132" as Server Port.</p>
    <p><small>(This is the Phantom Frames Distribution BDS Server)</small></p>
    <img alt="Step 4" class="fit" :src="path+imgGroup+'-step4.png'" />
  </li>
  <li>
    <small class="step">Step 5)</small>
    <p>Click "Watch Ad and run" (:30 seconds)</p>
    <img alt="Step 5" class="fit" :src="path+imgGroup+'-step5.png'" />
    <!--bedrocktogether-->
    <p v-if="assist == 'BedrockTogether'">
      <small>(Issues? Send a support ticket:
        <a
          title="BedrockTogether"
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/mxJvy7PPTM"
          >BedrockTogether Discord</a>)
      </small>
    </p>
  </li>
  <li>
    <small class="step">Step 6)</small>
    <p>Leave The App running until you complete the next steps</p>
    <img alt="Step 6" class="fit" :src="path+imgGroup+'-step6.png'" />
    <p><small>(The BedrockTogether App is now a Local Network Minecraft "Friend")</small></p>
  </li>
  <li>
    <small class="step">Step 7)</small>
    <p>Open Minecraft.</p>
    <p>Select "Friends" tab > Click "BedrockTogether"</p>
    <img alt="Step 7" class="fit" :src="path+imgGroup+'-step7.png'" />
  </li>
  <li>
    <small class="step">Step 8)</small>
    <p></p>
    <img alt="Step 8" class="fit" :src="path+imgGroup+'-step8.png'" />
    <p><small>BedrockTogether will autoforward you to the Phantom Frames BDS Server.</small></p>
  </li>
  <li>
    <small class="step">Step 9)</small>
    <p>Accept the "Add-on Required" download to join.</p>
    <img alt="Step 9" class="fit" :src="path+imgGroup+'common-laststep.png'" />

    <p>Congratulations. You now have Phantom Frames.</p>
    <p><small>You are logged in as "Guest". As a courtesy to others, please keep visits to under 5 minutes, so others may join this Add-On distribution Minecraft World to download/update.</small></p>
  </li>
</template>
<script>
import YouTube from './YouTube.vue';
export default {

  name: 'MobileSteps',
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
    const imgDir = 'img'
    return {
      // git project cdn as path - use `path+<image_name>` to use image hosting in html
      path: 'https://cdn.jsdelivr.net/gh/'+git_user+'/'+project+'@'+branch+'/'+dir+'/'+imgDir+'/'
    }
  }
}
</script>