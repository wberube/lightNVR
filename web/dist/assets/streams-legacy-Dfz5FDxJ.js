System.register(["./query-client-legacy-DpGFWkK1.js","./layout-legacy-TbEyfw4s.js","./Footer-legacy-DqOCiyV5.js","./LoadingIndicator-legacy-CgixVNwJ.js"],(function(e,r){"use strict";var a,t,s,d,n,o,i,l,c,m,u,g,h,p,b;return{setters:[e=>{a=e.d,t=e.a,s=e.b,d=e.f,n=e.u,o=e.g,i=e.c,l=e.E,c=e.e,m=e.Q},null,e=>{u=e.h,g=e.c,h=e.H,p=e.F},e=>{b=e.C}],execute:function(){function e({streamId:e,streamName:r,onClose:t,onDisable:s,onDelete:d}){const[n,o]=a(!1);return u`
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
        <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium">${n?"Confirm Permanent Deletion":"Stream Actions"}</h3>
          <span class="text-2xl cursor-pointer" onClick=${t}>×</span>
        </div>
        
        <div class="p-6">
          ${n?u`
            <div class="mb-6">
              <div class="flex items-center justify-center mb-4 text-red-600 dark:text-red-500">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h4 class="text-lg font-medium mb-2 text-center">Are you sure you want to permanently delete "${r}"?</h4>
              <p class="text-gray-600 dark:text-gray-400 mb-4 text-center">
                This action cannot be undone. The stream configuration will be permanently removed from the database.
              </p>
            </div>
            
            <div class="flex justify-center space-x-3">
              <button 
                class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                onClick=${()=>o(!1)}
              >
                Cancel
              </button>
              <button 
                class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                onClick=${()=>{d(e),t()}}
              >
                Yes, Delete Permanently
              </button>
            </div>
          `:u`
            <div class="mb-6">
              <h4 class="text-lg font-medium mb-2">What would you like to do with "${r}"?</h4>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Please choose one of the following options:
              </p>
              
              <div class="space-y-4">
                <div class="p-4 border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-900/30 rounded-lg">
                  <h5 class="font-medium text-yellow-800 dark:text-yellow-500 mb-2">Disable Stream (Soft Delete)</h5>
                  <p class="text-gray-600 dark:text-gray-400 mb-2">
                    This option will disable the stream but keep its configuration in the database. You can re-enable it later.
                  </p>
                  <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <li>Stream will stop processing</li>
                    <li>Live streaming will be disabled</li>
                    <li>Recording will be disabled</li>
                    <li>Audio recording will be disabled</li>
                    <li>Detection-based recording will be disabled</li>
                    <li>Configuration is preserved</li>
                    <li>Existing recordings are kept</li>
                    <li>Can be re-enabled later</li>
                  </ul>
                  <button 
                    class="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    onClick=${()=>{s(e),t()}}
                  >
                    Disable Stream
                  </button>
                </div>
                
                <div class="p-4 border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900/30 rounded-lg">
                  <h5 class="font-medium text-red-800 dark:text-red-500 mb-2">Delete Stream (Permanent)</h5>
                  <p class="text-gray-600 dark:text-gray-400 mb-2">
                    This option will permanently delete the stream configuration from the database. This action cannot be undone.
                  </p>
                  <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <li>Stream will be completely removed</li>
                    <li>Configuration is deleted</li>
                    <li>Recordings remain accessible</li>
                    <li>Cannot be recovered</li>
                  </ul>
                  <button 
                    class="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    onClick=${()=>{o(!0)}}
                  >
                    Delete Stream
                  </button>
                </div>
              </div>
            </div>
          `}
        </div>
      </div>
    </div>
  `}function r(){const r=t(),[l,c]=a(!1),[m,u]=a(!1),[h,p]=a(!1),[f,y]=a(!1),[x,v]=a([]),[w,N]=a([]),[k,C]=a(null),[E,S]=a(null),[_,D]=a(""),[I,A]=a({username:"",password:""}),[T,$]=a(!1),[M,j]=a(!1),{data:P=[],isLoading:B,error:R}=s(["streams"],"/api/streams",{timeout:1e4,retries:2,retryDelay:1e3}),{data:F}=s(["detectionModels"],"/api/detection/models",{timeout:5e3,retries:1,retryDelay:1e3}),L=Array.isArray(P)?P:P.streams||[];console.log("API Response:",P),console.log("Streams data:",L),console.log("hasData:",L&&L.length>0);const[V,O]=a({name:"",url:"",enabled:!0,streamingEnabled:!0,width:1280,height:720,fps:15,codec:"h264",protocol:"0",priority:"5",segment:30,record:!0,recordAudio:!0,detectionEnabled:!1,detectionModel:"",detectionThreshold:50,detectionInterval:10,preBuffer:10,postBuffer:30}),[z,H]=a(!1),[U,q]=a(!1),[Q,K]=a(null),X=L&&L.length>0,W=F?.models||[],Y=d("/api/streams",{timeout:15e3,retries:1,retryDelay:1e3},{onSuccess:()=>{g("Stream added successfully"),te(),r.invalidateQueries({queryKey:["streams"]})},onError:e=>{g(`Error adding stream: ${e.message}`,5e3,"error")}}),G=n({mutationFn:async e=>{const{streamName:r,...a}=e,t=`/api/streams/${encodeURIComponent(r)}`;return await o(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),timeout:15e3,retries:1,retryDelay:1e3})},onSuccess:()=>{g("Stream updated successfully"),te(),r.invalidateQueries({queryKey:["streams"]})},onError:e=>{g(`Error updating stream: ${e.message}`,5e3,"error")}}),J=(e,r)=>{z?G.mutate({...e,streamName:e.name},r):Y.mutate(e,r)},Z=d("/api/streams/test",{timeout:2e4,retries:1,retryDelay:2e3},{onMutate:()=>{g("Testing stream connection...")},onSuccess:e=>{e.success?g("Stream connection successful!",3e3,"success"):g(`Stream connection failed: ${e.message}`,5e3,"error")},onError:e=>{g(`Error testing stream: ${e.message}`,5e3,"error")}}),ee=n({mutationFn:async e=>{const{streamId:r}=e,a=`/api/streams/${encodeURIComponent(r)}?permanent=true`;return await o(a,{method:"DELETE",timeout:15e3,retries:1,retryDelay:1e3})},onSuccess:()=>{g("Stream successfully deleted."),ae(),r.invalidateQueries({queryKey:["streams"]})},onError:e=>{g(`Error deleting stream: ${e.message}`,5e3,"error")}}),re=n({mutationFn:async e=>{const{streamId:r}=e,a=`/api/streams/${encodeURIComponent(r)}`;return await o(a,{method:"DELETE",timeout:15e3,retries:1,retryDelay:1e3})},onSuccess:()=>{g("Stream successfully disabled."),ae(),r.invalidateQueries({queryKey:["streams"]})},onError:e=>{g(`Error disabling stream: ${e.message}`,5e3,"error")}}),ae=()=>{q(!1),K(null)},te=()=>{c(!1)},se=e=>{const{name:r,value:a,type:t,checked:s}=e.target;O((e=>({...e,[r]:"checkbox"===t?s:a})))},de=e=>{const{name:r,value:a}=e.target;A((e=>({...e,[r]:a})))},ne=d("/api/onvif/discovery/discover",{timeout:12e4,retries:0},{onMutate:()=>{$(!0)},onSuccess:e=>{v(e.devices||[]),$(!1)},onError:e=>{g(`Error discovering ONVIF devices: ${e.message}`,5e3,"error"),$(!1)}}),oe=n({mutationFn:({device:e,credentials:r})=>(j(!0),fetch("/api/onvif/device/profiles",{method:"GET",headers:{"X-Device-URL":`http://${e.ip_address}/onvif/device_service`,"X-Username":r.username,"X-Password":r.password}}).then((e=>{if(!e.ok)throw new Error(`HTTP error ${e.status}`);return e.json()}))),onSuccess:e=>{N(e.profiles||[]),j(!1)},onError:e=>{g(`Error loading device profiles: ${e.message}`,5e3,"error"),j(!1)}}),ie=d("/api/onvif/device/test",{timeout:15e3,retries:0},{onMutate:()=>{j(!0)},onSuccess:(e,r)=>{e.success?(g("Connection successful!",3e3,"success"),k&&le(k)):(g(`Connection failed: ${e.message}`,5e3,"error"),j(!1))},onError:e=>{g(`Error testing connection: ${e.message}`,5e3,"error"),j(!1)}}),le=e=>{C(e),N([]),oe.mutate({device:e,credentials:I})};return i("section",{id:"streams-page",className:"page",children:[i("div",{className:"page-header flex justify-between items-center mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[i("h2",{className:"text-xl font-bold",children:"Streams"}),i("div",{className:"controls flex space-x-2",children:[i("button",{id:"discover-onvif-btn",className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",onClick:()=>u(!0),children:"Discover ONVIF Cameras"}),i("button",{id:"add-stream-btn",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",onClick:()=>{O({name:"",url:"",enabled:!0,streamingEnabled:!0,width:1280,height:720,fps:15,codec:"h264",protocol:"0",priority:"5",segment:30,record:!0,recordAudio:!0,detectionEnabled:!1,detectionModel:"",detectionThreshold:50,detectionInterval:10,preBuffer:10,postBuffer:30}),H(!1),c(!0)},children:"Add Stream"})]})]}),i(b,{isLoading:B,hasData:X,loadingMessage:"Loading streams...",emptyMessage:"No streams configured yet. Click 'Add Stream' to create one.",children:i("div",{className:"streams-container bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden",children:i("div",{className:"overflow-x-auto",children:i("table",{id:"streams-table",className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[i("thead",{className:"bg-gray-50 dark:bg-gray-700",children:i("tr",{children:[i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Name"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"URL"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Resolution"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"FPS"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Recording"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Actions"})]})}),i("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700",children:L.map((e=>i("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700",children:[i("td",{className:"px-6 py-4 whitespace-nowrap",children:i("div",{className:"flex items-center",children:[i("span",{className:"status-indicator w-2 h-2 rounded-full mr-2 "+(e.enabled?"bg-green-500":"bg-red-500")}),e.name]})}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:e.url}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:[e.width,"x",e.height]}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:e.fps}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:[e.record?"Enabled":"Disabled",e.detection_based_recording?" (Detection)":""]}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:i("div",{className:"flex space-x-2",children:[i("button",{className:"p-1 rounded-full text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900 focus:outline-none",onClick:()=>(async e=>{try{const a=await r.fetchQuery({queryKey:["stream",e],queryFn:async()=>{const r=await fetch(`/api/streams/${encodeURIComponent(e)}`);if(!r.ok)throw new Error(`HTTP error ${r.status}`);return r.json()},staleTime:1e4});O({...a,width:a.width||1280,height:a.height||720,fps:a.fps||15,protocol:a.protocol?.toString()||"0",priority:a.priority?.toString()||"5",segment:a.segment_duration||30,detectionThreshold:a.detection_threshold||50,detectionInterval:a.detection_interval||10,preBuffer:a.pre_detection_buffer||10,postBuffer:a.post_detection_buffer||30,streamingEnabled:void 0===a.streaming_enabled||a.streaming_enabled,isOnvif:void 0!==a.is_onvif&&a.is_onvif,detectionEnabled:a.detection_based_recording||!1,detectionModel:a.detection_model||"",recordAudio:void 0===a.record_audio||a.record_audio}),H(!0),c(!0)}catch(a){console.error("Error loading stream details:",a),g("Error loading stream details: "+a.message)}})(e.name),title:"Edit",children:i("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),i("button",{className:"p-1 rounded-full text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900 focus:outline-none",onClick:()=>(e=>{K(e),q(!0)})(e),title:"Delete",children:i("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})]})})]},e.name)))})]})})})}),U&&Q&&i(e,{streamId:Q.name,streamName:Q.name,onClose:ae,onDisable:e=>{re.mutate({streamId:e})},onDelete:e=>{ee.mutate({streamId:e})}}),l&&i("div",{id:"stream-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300",children:i("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto",children:[i("div",{className:"flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700",children:[i("h3",{className:"text-lg font-medium",children:z?"Edit Stream":"Add Stream"}),i("span",{className:"text-2xl cursor-pointer",onClick:te,children:"×"})]}),i("div",{className:"p-4",children:i("form",{id:"stream-form",className:"space-y-4",children:[i("div",{className:"form-group",children:[i("label",{for:"stream-name",className:"block text-sm font-medium mb-1",children:"Name"}),i("input",{type:"text",id:"stream-name",name:"name",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white "+(z?"bg-gray-100 dark:bg-gray-800":""),value:V.name,onChange:se,disabled:z,required:!0})]}),i("div",{className:"form-group",children:[i("label",{for:"stream-url",className:"block text-sm font-medium mb-1",children:"URL"}),i("input",{type:"text",id:"stream-url",name:"url",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"rtsp://example.com/stream",value:V.url,onChange:se,required:!0})]}),i("div",{className:"form-group flex items-center",children:[i("input",{type:"checkbox",id:"stream-enabled",name:"enabled",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",checked:V.enabled,onChange:se}),i("label",{for:"stream-enabled",className:"ml-2 block text-sm",children:"Stream Active"}),i("span",{className:"ml-2 text-xs text-gray-500 dark:text-gray-400",children:"Enable/disable all stream processing"})]}),i("div",{className:"form-group flex items-center",children:[i("input",{type:"checkbox",id:"stream-streaming-enabled",name:"streamingEnabled",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",checked:V.streamingEnabled,onChange:se}),i("label",{for:"stream-streaming-enabled",className:"ml-2 block text-sm",children:"Live View Enabled"}),i("span",{className:"ml-2 text-xs text-gray-500 dark:text-gray-400",children:"Enable/disable live viewing in browser"})]}),i("div",{className:"form-group flex items-center",children:[i("input",{type:"checkbox",id:"stream-is-onvif",name:"isOnvif",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",checked:V.isOnvif,onChange:se}),i("label",{for:"stream-is-onvif",className:"ml-2 block text-sm",children:"ONVIF Camera"}),i("span",{className:"ml-2 text-xs text-gray-500 dark:text-gray-400",children:"Mark this stream as an ONVIF camera for special handling"})]}),i("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i("div",{className:"form-group",children:[i("label",{for:"stream-width",className:"block text-sm font-medium mb-1",children:"Width"}),i("input",{type:"number",id:"stream-width",name:"width",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",min:"320",max:"1920",value:V.width,onChange:se})]}),i("div",{className:"form-group",children:[i("label",{for:"stream-height",className:"block text-sm font-medium mb-1",children:"Height"}),i("input",{type:"number",id:"stream-height",name:"height",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",min:"240",max:"1080",value:V.height,onChange:se})]})]}),i("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[i("div",{className:"form-group",children:[i("label",{for:"stream-fps",className:"block text-sm font-medium mb-1",children:"FPS"}),i("input",{type:"number",id:"stream-fps",name:"fps",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",min:"1",max:"30",value:V.fps,onChange:se})]}),i("div",{className:"form-group",children:[i("label",{for:"stream-codec",className:"block text-sm font-medium mb-1",children:"Codec"}),i("select",{id:"stream-codec",name:"codec",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",value:V.codec,onChange:se,children:[i("option",{value:"h264",children:"H.264"}),i("option",{value:"h265",children:"H.265"})]})]}),i("div",{className:"form-group",children:[i("label",{for:"stream-protocol",className:"block text-sm font-medium mb-1",children:"Protocol"}),i("select",{id:"stream-protocol",name:"protocol",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",value:V.protocol,onChange:se,children:[i("option",{value:"0",children:"TCP"}),i("option",{value:"1",children:"UDP"})]}),i("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Connection protocol (ONVIF cameras use either TCP or UDP)"})]})]}),i("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i("div",{className:"form-group",children:[i("label",{for:"stream-priority",className:"block text-sm font-medium mb-1",children:"Priority"}),i("select",{id:"stream-priority",name:"priority",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",value:V.priority,onChange:se,children:[i("option",{value:"1",children:"Low (1)"}),i("option",{value:"5",children:"Medium (5)"}),i("option",{value:"10",children:"High (10)"})]})]}),i("div",{className:"form-group",children:[i("label",{for:"stream-segment",className:"block text-sm font-medium mb-1",children:"Segment Duration (seconds)"}),i("input",{type:"number",id:"stream-segment",name:"segment",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",min:"60",max:"3600",value:V.segment,onChange:se})]})]}),i("div",{className:"form-group flex items-center",children:[i("input",{type:"checkbox",id:"stream-record",name:"record",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",checked:V.record,onChange:se}),i("label",{for:"stream-record",className:"ml-2 block text-sm",children:"Record"})]}),i("div",{className:"form-group flex items-center",children:[i("input",{type:"checkbox",id:"stream-record-audio",name:"recordAudio",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",checked:V.recordAudio,onChange:se}),i("label",{for:"stream-record-audio",className:"ml-2 block text-sm",children:"Record Audio"}),i("span",{className:"ml-2 text-xs text-gray-500 dark:text-gray-400",children:"Include audio in recordings if available in the stream"})]}),i("div",{className:"mt-6 mb-2 pb-1 border-b border-gray-200 dark:border-gray-700",children:i("h4",{className:"text-md font-medium",children:"Detection-Based Recording"})}),i("div",{className:"form-group flex items-center",children:[i("input",{type:"checkbox",id:"stream-detection-enabled",name:"detectionEnabled",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",checked:V.detectionEnabled,onChange:se}),i("label",{for:"stream-detection-enabled",className:"ml-2 block text-sm",children:"Enable Detection-Based Recording"}),i("span",{className:"ml-2 text-xs text-gray-500 dark:text-gray-400",children:"Only record when objects are detected"})]}),i("div",{className:"form-group",style:V.detectionEnabled?"":"display: none",children:[i("label",{for:"stream-detection-model",className:"block text-sm font-medium mb-1",children:"Detection Model"}),i("div",{className:"flex space-x-2",children:[i("select",{id:"stream-detection-model",name:"detectionModel",className:"flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",value:V.detectionModel,onChange:se,children:[i("option",{value:"",children:"Select a model"}),W.map((e=>i("option",{value:e.id,children:e.name},e.id)))]}),i("button",{id:"refresh-models-btn",className:"p-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none",title:"Refresh Models",onClick:()=>{r.invalidateQueries({queryKey:["detectionModels"]})},type:"button",children:i("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:i("path",{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"})})})]})]}),i("div",{className:"form-group",style:V.detectionEnabled?"":"display: none",children:[i("label",{for:"stream-detection-threshold",className:"block text-sm font-medium mb-1",children:"Detection Threshold"}),i("div",{className:"flex items-center space-x-2",children:[i("input",{type:"range",id:"stream-detection-threshold",name:"detectionThreshold",className:"flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",min:"0",max:"100",step:"1",value:V.detectionThreshold,onInput:e=>{const r=e.target.value;O((e=>({...e,detectionThreshold:r})))}}),i("span",{id:"stream-threshold-value",className:"font-medium text-blue-600 dark:text-blue-400 min-w-[3rem] text-center",children:[V.detectionThreshold,"%"]})]})]}),i("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",style:V.detectionEnabled?"":"display: none",children:[i("div",{className:"form-group",children:[i("label",{for:"stream-detection-interval",className:"block text-sm font-medium mb-1",children:"Detection Interval (frames)"}),i("input",{type:"number",id:"stream-detection-interval",name:"detectionInterval",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",min:"1",max:"100",value:V.detectionInterval,onChange:se}),i("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Detect on every Nth frame"})]}),i("div",{className:"form-group",children:[i("label",{for:"stream-pre-buffer",className:"block text-sm font-medium mb-1",children:"Pre-detection Buffer (seconds)"}),i("input",{type:"number",id:"stream-pre-buffer",name:"preBuffer",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",min:"0",max:"60",value:V.preBuffer,onChange:se}),i("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Seconds to keep before detection"})]}),i("div",{className:"form-group",children:[i("label",{for:"stream-post-buffer",className:"block text-sm font-medium mb-1",children:"Post-detection Buffer (seconds)"}),i("input",{type:"number",id:"stream-post-buffer",name:"postBuffer",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",min:"0",max:"300",value:V.postBuffer,onChange:se}),i("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Seconds to keep after detection"})]})]})]})}),i("div",{className:"flex justify-between p-4 border-t border-gray-200 dark:border-gray-700",children:[i("button",{id:"stream-test-btn",className:"px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",onClick:()=>{Z.mutate({url:V.url,protocol:parseInt(V.protocol,10)})},type:"button",children:"Test Connection"}),i("div",{className:"space-x-2",children:[i("button",{id:"stream-save-btn",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",onClick:e=>{(e=>{e.preventDefault();const r={name:V.name,url:V.url,enabled:V.enabled,streaming_enabled:V.streamingEnabled,width:parseInt(V.width,10),height:parseInt(V.height,10),fps:parseInt(V.fps,10),codec:V.codec,protocol:parseInt(V.protocol,10),priority:parseInt(V.priority,10),segment_duration:parseInt(V.segment,10),record:V.record,detection_based_recording:V.detectionEnabled,detection_model:V.detectionModel,detection_threshold:parseInt(V.detectionThreshold,10),detection_interval:parseInt(V.detectionInterval,10),pre_detection_buffer:parseInt(V.preBuffer,10),post_detection_buffer:parseInt(V.postBuffer,10),record_audio:V.recordAudio};z&&(r.is_deleted=!1),J(r)})(e)},type:"button",children:"Save"}),i("button",{id:"stream-cancel-btn",className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",onClick:te,type:"button",children:"Cancel"})]})]})]})}),m&&i("div",{id:"onvif-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300",children:i("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[i("div",{className:"flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700",children:[i("h3",{className:"text-lg font-medium",children:"ONVIF Camera Discovery"}),i("span",{className:"text-2xl cursor-pointer",onClick:()=>u(!1),children:"×"})]}),i("div",{className:"p-4",children:[i("div",{className:"mb-4 flex justify-between items-center",children:[i("h4",{className:"text-md font-medium",children:"Discovered Devices"}),i("button",{id:"discover-btn",className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors focus:outline-none",onClick:()=>{ne.mutate({})},disabled:T,type:"button",children:T?i("span",{className:"flex items-center",children:["Discovering",i("span",{className:"ml-1 flex space-x-1",children:[i("span",{className:"animate-pulse delay-0 h-1.5 w-1.5 bg-white rounded-full"}),i("span",{className:"animate-pulse delay-150 h-1.5 w-1.5 bg-white rounded-full"}),i("span",{className:"animate-pulse delay-300 h-1.5 w-1.5 bg-white rounded-full"})]})]}):"Start Discovery"})]}),i("div",{className:"overflow-x-auto",children:i("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[i("thead",{className:"bg-gray-50 dark:bg-gray-700",children:i("tr",{children:[i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"IP Address"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Manufacturer"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Model"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Actions"})]})}),i("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700",children:0===x.length?i("tr",{children:i("td",{colSpan:"4",className:"px-6 py-4 text-center text-gray-500 dark:text-gray-400",children:T?i("div",{className:"flex items-center justify-center",children:[i("span",{children:"Discovering devices"}),i("span",{className:"ml-1 flex space-x-1",children:[i("span",{className:"animate-pulse delay-0 h-1.5 w-1.5 bg-gray-500 dark:bg-gray-400 rounded-full"}),i("span",{className:"animate-pulse delay-150 h-1.5 w-1.5 bg-gray-500 dark:bg-gray-400 rounded-full"}),i("span",{className:"animate-pulse delay-300 h-1.5 w-1.5 bg-gray-500 dark:bg-gray-400 rounded-full"})]})]}):'No devices discovered yet. Click "Start Discovery" to scan your network.'})}):x.map((e=>i("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700",children:[i("td",{className:"px-6 py-4 whitespace-nowrap",children:e.ip_address}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:e.manufacturer||"Unknown"}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:e.model||"Unknown"}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:i("button",{className:"px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none",onClick:()=>(e=>{C(e),ie.mutate({url:`http://${e.ip_address}/onvif/device_service`,username:I.username,password:I.password})})(e),disabled:M&&k&&k.ip_address===e.ip_address,type:"button",children:M&&k&&k.ip_address===e.ip_address?i("span",{className:"flex items-center",children:["Loading",i("span",{className:"ml-1 flex space-x-1",children:[i("span",{className:"animate-pulse delay-0 h-1.5 w-1.5 bg-white rounded-full"}),i("span",{className:"animate-pulse delay-150 h-1.5 w-1.5 bg-white rounded-full"}),i("span",{className:"animate-pulse delay-300 h-1.5 w-1.5 bg-white rounded-full"})]})]}):"Connect"})})]},e.ip_address)))})]})}),i("div",{className:"mt-6 mb-4",children:[i("h4",{className:"text-md font-medium mb-2",children:"Authentication"}),i("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-3",children:"Enter credentials to connect to the selected ONVIF device. Credentials are not needed for discovery, only for connecting to devices."}),i("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i("div",{className:"form-group",children:[i("label",{for:"onvif-username",className:"block text-sm font-medium mb-1",children:"Username"}),i("input",{type:"text",id:"onvif-username",name:"username",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"admin",value:I.username,onChange:de})]}),i("div",{className:"form-group",children:[i("label",{for:"onvif-password",className:"block text-sm font-medium mb-1",children:"Password"}),i("input",{type:"password",id:"onvif-password",name:"password",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"password",value:I.password,onChange:de})]})]})]}),k&&w.length>0&&i("div",{className:"mt-6",children:[i("h4",{className:"text-md font-medium mb-2",children:["Available Profiles for ",k.ip_address]}),i("div",{className:"overflow-x-auto",children:i("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[i("thead",{className:"bg-gray-50 dark:bg-gray-700",children:i("tr",{children:[i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Name"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Resolution"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Encoding"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"FPS"}),i("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider",children:"Actions"})]})}),i("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700",children:w.map((e=>i("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700",children:[i("td",{className:"px-6 py-4 whitespace-nowrap",children:e.name}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:[e.width,"x",e.height]}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:e.encoding}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:e.fps}),i("td",{className:"px-6 py-4 whitespace-nowrap",children:i("button",{className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors focus:outline-none",onClick:()=>(e=>{S(e),D(`${k.name||"ONVIF"}_${e.name||"Stream"}`),p(!0)})(e),type:"button",children:"Add as Stream"})})]},e.token)))})]})})]})]}),i("div",{className:"flex justify-end p-4 border-t border-gray-200 dark:border-gray-700",children:i("button",{id:"onvif-close-btn",className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",onClick:()=>u(!1),type:"button",children:"Close"})})]})}),h&&i("div",{id:"custom-name-modal",className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300",children:i("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full",children:[i("div",{className:"flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700",children:[i("h3",{className:"text-lg font-medium",children:"Stream Name"}),i("span",{className:"text-2xl cursor-pointer",onClick:()=>p(!1),children:"×"})]}),i("div",{className:"p-4",children:i("div",{className:"mb-4",children:[i("label",{for:"custom-stream-name",className:"block text-sm font-medium mb-1",children:"Enter a name for this stream:"}),i("input",{type:"text",id:"custom-stream-name",className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",value:_,onChange:e=>D(e.target.value)}),i("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"This name will be used to identify the stream in the system."})]})}),i("div",{className:"flex justify-end p-4 border-t border-gray-200 dark:border-gray-700 space-x-2",children:[i("button",{className:"px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors",onClick:()=>p(!1),type:"button",children:"Cancel"}),i("button",{className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors",onClick:()=>{if(!k||!E||!_.trim())return void g("Missing required information",5e3,"error");y(!0);const e={name:_.trim(),url:E.stream_uri,enabled:!0,streaming_enabled:!0,width:E.width,height:E.height,fps:E.fps||15,codec:"H264"===E.encoding?"h264":"h265",protocol:"0",priority:"5",segment_duration:30,record:!0,record_audio:!0,is_onvif:!0};console.log("Adding ONVIF stream with data:",e),J(e,{onSuccess:()=>{y(!1),p(!1),u(!1)},onError:()=>{y(!1)},isEditing:!1})},type:"button",disabled:!_.trim()||f,children:f?i("span",{className:"flex items-center",children:["Adding",i("span",{className:"ml-1 flex space-x-1",children:[i("span",{className:"animate-pulse delay-0 h-1.5 w-1.5 bg-white rounded-full"}),i("span",{className:"animate-pulse delay-150 h-1.5 w-1.5 bg-white rounded-full"}),i("span",{className:"animate-pulse delay-300 h-1.5 w-1.5 bg-white rounded-full"})]})]}):"Add Stream"})]})]})})]})}document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("main-content");e&&l(i(m,{client:c,children:[i(h,{}),i(r,{}),i(p,{})]}),e)}))}}}));
//# sourceMappingURL=streams-legacy-Dfz5FDxJ.js.map
