export const Code = {
  Libs: {
    php: [
      {
        name: "Sendrequest",
        language: "php",
        code: `
                session_start();
            header(&amp;amp;amp;amp;amp;quot;Access-Control-Allow-Origin: *&amp;amp;amp;amp;amp;quot;);
                   $message=array();
                   $message['msisdn']=$_POST['msisdn'];
                   $message['amount']=$_POST['amount'];
                   $message['firstname']=$_POST['firstname'];
                   $message['lastname']=$_POST['lastname'];
                   $message['transref']=time();
                   $message['clientid']=$_POST['clientid']; 
                 $message['comment']=&amp;amp;amp;amp;amp;quot;null&amp;amp;amp;amp;amp;quot;;
                   $context  = &amp;amp;amp;amp;amp;quot;http://example_url_or_ip&amp;amp;amp;amp;amp;quot;;  
                   $username = &amp;amp;amp;amp;amp;quot;user&amp;amp;amp;amp;amp;quot;;  
                   $password = &amp;amp;amp;amp;amp;quot;password&amp;amp;amp;amp;amp;quot;;
                   function callAPI($method, $url, $data){
              $curl = curl_init();
              switch ($method){
                 case &amp;amp;amp;amp;amp;quot;POST&amp;amp;amp;amp;amp;quot;:
                    curl_setopt($curl, CURLOPT_POST, 1);
                    if ($data)
                       curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                    break;
                 case &amp;amp;amp;amp;amp;quot;PUT&amp;amp;amp;amp;amp;quot;:
                    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, &amp;amp;amp;amp;amp;quot;PUT&amp;amp;amp;amp;amp;quot;);
                    if ($data)
                       curl_setopt($curl, CURLOPT_POSTFIELDS, $data);                         
                    break;
                 default:
                    if ($data)
                       $url = sprintf(&amp;amp;amp;amp;amp;quot;%s?%s&amp;amp;amp;amp;amp;quot;, $url, http_build_query($data));
              }
              // OPTIONS:
              curl_setopt($curl, CURLOPT_URL, $url);
              curl_setopt($curl, CURLOPT_HTTPHEADER, array(
                 //'APIKEY: 111111111111111111111',
                 'Content-Type: application/json',
                 'Authorization: Basic '. base64_encode(&amp;amp;amp;amp;amp;quot;$username:$password&amp;amp;amp;amp;amp;quot;)
              ));
              curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
              curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
              // EXECUTE:
              $result = curl_exec($curl);
              if(!$result){die(&amp;amp;amp;amp;amp;quot;Connection Failure&amp;amp;amp;amp;amp;quot;);}
              curl_close($curl);
              return $result;
           }
           ////////////////////////////////////////////////////////////////////////////////
            $make_call = callAPI(
               'POST',
               &amp;amp;amp;amp;amp;quot;$context/QosicBridge/user/requestpayment&amp;amp;amp;amp;amp;quot;,
               json_encode($message)
               );
            
            $response = json_decode($make_call, true);
           /////////////////////////////////////////////////////////////////
            
             $_SESSION['transref']=$response['transref'];
             $_SESSION['clientid']=$message['clientid'];`,
      },
      {
        name: "getResponse",
        language: "php",
        code: `<? session_start();
            header(&amp;amp;amp;amp;amp;quot;Access-Control-Allow-Origin: *&amp;amp;amp;amp;amp;quot;);
                   $message=array();
                   $message['transref']=$_SESSION['transref'];
                 $message['clientid']=$_SESSION['clientid'];
                 $context  = &amp;amp;amp;amp;amp;quot;http://example_url_or_ip&amp;amp;amp;amp;amp;quot;;  
                   $username = &amp;amp;amp;amp;amp;quot;user&amp;amp;amp;amp;amp;quot;;  
                   $password = &amp;amp;amp;amp;amp;quot;password&amp;amp;amp;amp;amp;quot;; 
               
                   /////////////////////////////////////////////////////////
                   function callAPI($method, $url, $data){
              $curl = curl_init();
              switch ($method){
                 case &amp;amp;amp;amp;amp;quot;POST&amp;amp;amp;amp;amp;quot;:
                    curl_setopt($curl, CURLOPT_POST, 1);
                    if ($data)
                       curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                    break;
                 case &amp;amp;amp;amp;amp;quot;PUT&amp;amp;amp;amp;amp;quot;:
                    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, &amp;amp;amp;amp;amp;quot;PUT&amp;amp;amp;amp;amp;quot;);
                    if ($data)
                       curl_setopt($curl, CURLOPT_POSTFIELDS, $data);                         
                    break;
                 default:
                    if ($data)
                       $url = sprintf(&amp;amp;amp;amp;amp;quot;%s?%s&amp;amp;amp;amp;amp;quot;, $url, http_build_query($data));
              }
              // OPTIONS:
              curl_setopt($curl, CURLOPT_URL, $url);
              curl_setopt($curl, CURLOPT_HTTPHEADER, array(
                  
                 'Content-Type: application/json',
                 'Authorization: Basic '. base64_encode(&amp;amp;amp;amp;amp;quot;$username:$password&amp;amp;amp;amp;amp;quot;)
              ));
              curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
              curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
              // EXECUTE:
              $result = curl_exec($curl);
              if(!$result){die(&amp;amp;amp;amp;amp;quot;Connection Failure&amp;amp;amp;amp;amp;quot;);}
              curl_close($curl);
              return $result;
           }
           ///////////////////////////////////////////////////////////////////////////////////////////////
           $make_call = callAPI(
               'POST',
                 &amp;amp;amp;amp;amp;quot;$context/api/web/QosicBridge/user/gettransactionstatus&amp;amp;amp;amp;amp;quot;,
               // &amp;amp;amp;amp;amp;quot;$context/QosicBridge/user/gettransactionstatus&amp;amp;amp;amp;amp;quot;,
               json_encode($message)
               );
           $response = json_decode($make_call, true);
           /////////////////////////////////////////////////////////////////////////////////////////
            
           if($response['responsecode']==01){
                   echo &amp;amp;amp;amp;amp;quot;Pending&amp;amp;amp;amp;amp;quot;;}
           elseif($response['responsecode']==00){
                   echo &amp;amp;amp;amp;amp;quot;success&amp;amp;amp;amp;amp;quot;;}
           else {
                   echo &amp;amp;amp;amp;amp;quot;Failed &amp;amp;amp;amp;amp;quot;;
           }`,
      },
    ],
    django: [
      {
        name: "request",
        language: "python",
        code: `def api(request):
                context = {  
                    'status':&amp;quot;info&amp;quot;,
                    'text':&amp;quot;Not Set&amp;quot;,
                    'code':&amp;quot;Neutral&amp;quot;,
                }
                return render(request, 'index.html',context)
            def post(request):
                if request.method == &amp;amp;amp;quot;POST&amp;amp;amp;quot;:
                    #keys
                    context = 'http://ip_link'
                    headers = {'content-type':'application/json'}
                    url = context + '/QosicBridge/user/requestpayment'
                    raw_url = url;
                    msisdn = request.POST['msisdn']
                    amount = request.POST['amount']
                    firstname = request.POST['firstname']
                    lastname = request.POST['lastname']
                    clientid = request.POST['clientid']
                    transref = (randint(1000000, 9999999))##integer
                    transref_str = str(transref) ##to string
                    server_pass = 'server_pass'
                    server_user = 'server_user'
                    url = context +&amp;amp;amp;quot;/QosicBridge/user/requestpayment?msisdn=&amp;amp;amp;quot;+msisdn+&amp;amp;amp;quot;&amp;amp;amp;amp;amount=&amp;amp;amp;quot;+amount+&amp;amp;amp;quot;&amp;amp;amp;amp;firstname=&amp;amp;amp;quot;+firstname+&amp;amp;amp;quot;&amp;amp;amp;amp;lastname=&amp;amp;amp;quot;+lastname+&amp;amp;amp;quot;&amp;amp;amp;amp;transref=&amp;amp;amp;quot;+transref_str+&amp;amp;amp;quot;&amp;amp;amp;amp;ClientID=&amp;amp;amp;quot;+clientid
                    data = json.dumps({
                        &amp;amp;amp;quot;msisdn&amp;amp;amp;quot;: msisdn,
                        &amp;amp;amp;quot;amount&amp;amp;amp;quot;: amount,
                        &amp;amp;amp;quot;firstname&amp;amp;amp;quot;:firstname,
                        &amp;amp;amp;quot;lastname&amp;amp;amp;quot;:lastname,
                        &amp;amp;amp;quot;transref&amp;amp;amp;quot; :transref,
                        &amp;amp;amp;quot;clientid&amp;amp;amp;quot;: clientid,
                        })
                         
                    # return HttpResponse(str(url)) ###--##TEST##--##
                     
                    r = requests.post(url, auth=(server_user, server_pass), headers=headers, data=data,timeout=20)
                    # //load the json to a string
                    resp = json.loads(r.text)
                     
                    # return HttpResponse(str(resp['transref']))
                    if r.status_code == 200:
                            data = r.json() ##response from server
                            # return HttpResponse(str(url))
                            # return HttpResponse(pprint(data))#console
                            # return HttpResponse(print(data)) #console
                            context = {  
                                'status':&amp;amp;amp;quot;success&amp;amp;amp;quot;,
                                'text':'Status is OKAY',
                                'code':r.status_code,
                                'responsecode':resp['responsecode'],
                                'responsemsg':resp['responsemsg'],
                                'transref':resp['transref'],
                                'comment':resp['comment']+', '+clientid,
                                'clientid':clientid,
                                 
                                'server_link':raw_url,
                                'server_user':server_user,
                                'server_pass':server_pass,
                            }
                            return render(request, 'index.html',context)
                    elif r.status_code == 202:
                            context = {  
                                'status':&amp;amp;amp;quot;success&amp;amp;amp;quot;,
                                'text':&amp;amp;amp;quot;
             
            Expires in &amp;amp;amp;lt;span id=&amp;amp;amp;quot;time&amp;amp;amp;quot;&amp;amp;amp;gt;05:00&amp;amp;amp;lt;/span&amp;amp;amp;gt;
             
            Check Your Phone; Awaiting Confirmation
             
            &amp;amp;amp;lt;i class=&amp;amp;amp;quot;fa fa-spinner fa-spin&amp;amp;amp;quot; style=&amp;amp;amp;quot;font-size: 60px;&amp;amp;amp;quot;&amp;amp;amp;gt;&amp;amp;amp;lt;/i&amp;amp;amp;gt;&amp;amp;amp;quot;,
                                'code':r.status_code,
                                'responsecode':resp['responsecode'],
                                'responsemsg':resp['responsemsg'],
                                'transref':resp['transref'],
                                'comment':resp['comment'],
                                'clientid':clientid,
                            }
                            return render(request, 'index.html',context)
                    elif r.status_code == 401:
                            context = {  
                                'status':&amp;amp;amp;quot;danger&amp;amp;amp;quot;,
                                'text':'Unauthorized',
                                'code':r.status_code,
                                'responsecode':resp['responsecode'],
                                'responsemsg':resp['responsemsg'],
                                'transref':resp['transref'],
                                'comment':resp['comment'],
                            }
                            return render(request, 'index.html',context)
                    else:
                            context = {  
                                'status':&amp;amp;amp;quot;danger&amp;amp;amp;quot;,
                                'text':'Failed',
                                'code':r.status_code,
                                'responsecode':resp['responsecode'],
                                'responsemsg':resp['responsemsg'],
                                'transref':resp['transref'],
                                'comment':resp['comment'],
                            }
                            # return JsonResponse({'error': 'Some error'}, status=400)
                            return render(request, 'index.html',context)
                else:
                            context = {  
                                'status':&amp;amp;amp;quot;warning&amp;amp;amp;quot;,
                                'text':'Invalid Method;',
                                'code':&amp;amp;amp;quot;-&amp;amp;amp;quot;,
                                'responsecode':'-',
                                'responsemsg':'-',
                                'transref':'-',
                                'comment':'-',
                            }
                            return render(request, 'index.html',context)`,
      },
      {
        name: "response",
        language: "jq",
        code: `//add starting script tag here
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                  var responseText = xhr.responseText;
                  console.log(responseText);
                  // process the response.
                 };
             
             
              $('#response').show();
              $('#spinner').show();
              $('#success').hide();
            //add closing script tag here
             
            //add starting script tag here
            var token = '{{csrf_token}}';
              var c_i = 0;
              function executeQuery() {
                c_i++;
                console.log(c_i+ &amp;amp;amp;quot; Run&amp;amp;amp;quot;)
             
              $.ajax({
                type: 'POST',
                //type: 'GET',
                dataType: 'json',
                crossDomain: true,
                headers:{
                  &amp;amp;amp;quot;Authorization&amp;amp;amp;quot;: &amp;amp;amp;quot;Basic &amp;amp;amp;quot; + btoa(&amp;amp;amp;quot;{{server_user}}&amp;amp;amp;quot; + &amp;amp;amp;quot;:&amp;amp;amp;quot; + &amp;amp;amp;quot;{{server_pass}}&amp;amp;amp;quot;),
                  &amp;amp;amp;quot;X-CSRFToken&amp;amp;amp;quot;: token,
                  &amp;amp;amp;quot;accept&amp;amp;amp;quot;: &amp;amp;amp;quot;application/json&amp;amp;amp;quot;,
                  &amp;amp;amp;quot;Access-Control-Allow-Origin&amp;amp;amp;quot;:&amp;amp;amp;quot;*&amp;amp;amp;quot;
                },
                contentType:&amp;amp;amp;quot;application/json; charset=utf-8&amp;amp;amp;quot;,
                //beforeSend: function (xhr) {
                //  xhr.setRequestHeader (&amp;amp;amp;quot;Authorization&amp;amp;amp;quot;, &amp;amp;amp;quot;Basic &amp;amp;amp;quot; + btoa(&amp;amp;amp;quot;{{server_user}}&amp;amp;amp;quot; + &amp;amp;amp;quot;:&amp;amp;amp;quot; + &amp;amp;amp;quot;{{server_pass}}&amp;amp;amp;quot;));
              //},
                data: JSON.stringify({
                  transref: &amp;amp;amp;quot;{{transref}}&amp;amp;amp;quot;,
                  clientid: &amp;amp;amp;quot;{{clientid}}&amp;amp;amp;quot;, 
                }),
               url: &amp;amp;amp;quot;{{server_link}}/QosicBridge/user/gettransactionstatus&amp;amp;amp;quot;,
                success: function(data,jqXHR, textStatus) {
                  if (textStatus.status == 200) {
                    var json = data;
                    //console.log(json)
                    console.log(json.responsemsg +' '+ json.responsecode)
                    if (json.responsecode == 00) {
                      $('#response').hide();
                      $('#spinner').hide();
                      $('#success').show();
                    }
                    //console.log(JSON.parse(this.responseText));
                     
                  ///////////////////////////////////////////////
                    }
                  //console.log(textStatus.status)
                },
                error: function(jqXHR, textStatus, errorThrown) {
                  console.log(textStatus, errorThrown);
                }
                 
             
              });
               
              if(c_i &amp;amp;amp;lt; 60){ // to run 60 times thats 5 mins
                setTimeout(executeQuery, 5000); // you could choose not to continue on failure...
              }
               
            }
             
            $(document).ready(function() { 
              setTimeout(executeQuery, 5000);// run the first time;
            });
          
              function startTimer(duration, display) {
                  var timer = duration, minutes, seconds;
                  var end =setInterval(function () {
                      minutes = parseInt(timer / 60, 10)
                      seconds = parseInt(timer % 60, 10);
             
                      minutes = minutes &amp;amp;amp;lt; 10 ? &amp;amp;amp;quot;0&amp;amp;amp;quot; + minutes : minutes;
                      seconds = seconds &amp;amp;amp;lt; 10 ? &amp;amp;amp;quot;0&amp;amp;amp;quot; + seconds : seconds;
             
                      display.textContent = minutes + &amp;amp;amp;quot;:&amp;amp;amp;quot; + seconds;
             
                      if (--timer &amp;amp;amp;lt; 0) {
                          //Do somthing on timeout
                          $('#response').hide();
                          $('#spinner').hide();
                          clearInterval(end);
                      }
                  }, 1000);
              }
             
              window.onload = function () {
                  var fiveMinutes = 300,
                      display = document.querySelector('#time');
                  startTimer(fiveMinutes, display);
              };
            //add closing script tag here`,
      },
    ],
    laravel: [
      {
        name: "Laravel library",
        language: "php",
        code: `//web.php
            // Route::get('/',[
            //     'uses'=&amp;gt;'ApiController@index',
            //     'as'=&amp;gt;'index'
            // ]);
             
            // Route::get('/get_status',[
            //     'uses'=&amp;gt;'ApiController@get_status',
            //     'as'=&amp;gt;'get_status'
            // ]);
            //web.php
             
            namespace App\\Http\\Controllers;
             
            use Illuminate\\Http\\Request;
            use Goutte\\Clients;
            class ApiController extends Controller
            {
                public function index(Request $request)
                {
                    
                    //testing 
                    $context = 'ip_address';
                    $url = $context .'/QosicBridge/user/requestpayment';
                    $msisdn = &amp;quot;123456789&amp;quot;;
                    $amount = &amp;quot;350&amp;quot;;
                    $firstname = &amp;quot;John&amp;quot;;
                    $lastname = &amp;quot;Wick&amp;quot;;
                    $clientid = 'client_id';
                    $transref = str_random(20);
                    $server_user = 'server_user';
                    $server_pass = 'server_pass';
                    $data = array(
                        &amp;quot;msisdn&amp;quot;=&amp;gt; $msisdn,
                        &amp;quot;amount&amp;quot;=&amp;gt; $amount,
                        &amp;quot;firstname&amp;quot;=&amp;gt;$firstname,
                        &amp;quot;lastname&amp;quot;=&amp;gt;$lastname,
                        &amp;quot;transref&amp;quot; =&amp;gt;$transref,
                        &amp;quot;clientid&amp;quot;=&amp;gt; $clientid,
                    ); 
                     
                    $client = new \\GuzzleHttp\\Client(['headers' =&amp;gt; ['content-type' =&amp;gt; 'application/json']]);
                    $response = $client-&amp;gt;request('POST', $url, [
                        'auth' =&amp;gt; [$server_user, $server_pass],
                        'json' =&amp;gt; $data,
                    ]); 
                    ///////////DUMPS///////////
                    dump(&amp;quot;Request Transaction&amp;quot;);
                    dump($data);
                    dump(&amp;quot;Status Code: &amp;quot; .$response-&amp;gt;getStatusCode());
                    $response = $response-&amp;gt;getBody()-&amp;gt;getContents();
                    dump ($response);
                    dump (json_decode($response));
                    $response = json_decode($response);//json proper
                    dump(&amp;quot;Response: &amp;quot;.$response-&amp;gt;responsecode);
                    dump(&amp;quot;Responsemsg: &amp;quot;.$response-&amp;gt;responsemsg);
                    dump(&amp;quot;Transref: &amp;quot;.$response-&amp;gt;transref);
                    dump(&amp;quot;Comment: &amp;quot;.$response-&amp;gt;comment);
                    return dd('-------------------');
                }
                 
                public function get_status()
                {
                    $context = 'ip_address';
                    $url = $context .'/QosicBridge/user/gettransactionstatus';
                    $clientid = 'UBHQ';
                    $transref = &amp;quot;5P5fU2GYDJnltqH&amp;quot;;// transaction ref
                    $server_user = 'server_user';
                    $server_pass = 'server_pass';
                    $data = array(
                        &amp;quot;transref&amp;quot; =&amp;gt;$transref,
                        &amp;quot;clientid&amp;quot;=&amp;gt; $clientid,
                    ); 
                    $client = new \\GuzzleHttp\\Client(['headers' =&amp;gt; ['content-type' =&amp;gt; 'application/json']]);
                    $response = $client-&amp;gt;request('POST', $url, [
                        'auth' =&amp;gt; [$server_user, $server_pass],
                        'json' =&amp;gt; $data,
                    ]); 
                    dump(&amp;quot;Get Transaction Status&amp;quot;);
                    dump($data);
                    dump(&amp;quot;Status Code: &amp;quot; .$response-&amp;gt;getStatusCode());
                    $response = $response-&amp;gt;getBody()-&amp;gt;getContents();
                    dump ($response);
                    dump (json_decode($response));
                    $response = json_decode($response);//json proper
                    dump(&amp;quot;Response: &amp;quot;.$response-&amp;gt;responsecode);
                    dump(&amp;quot;Responsemsg: &amp;quot;.$response-&amp;gt;responsemsg);
                    dump(&amp;quot;Transref: &amp;quot;.$response-&amp;gt;transref);
                    dump(&amp;quot;Comment: &amp;quot;.$response-&amp;gt;comment);
                    return dd('-------------');
                     
                }
            }
            `,
      },
    ],
    javascript: [
      {
        name: "Js library",
        language: "html",
        code: `<!DOCTYPE html>
            <html>
            
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>Momo client api</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <!-- <link rel="stylesheet" type="text/css" media="screen" href="main.css" /> -->
            
                <!--<link rel="stylesheet" href="./libs/css/intlTelInput.css">-->
                <!--<link rel="stylesheet" href="./libs/css/momoApiClient.css">-->
            </head>
            
            <body>
            <div id="momo">
                <!--<div class="momo-contenaire">
                    <div class="momo-row-1">
                        <img id="imageBusiness" src="./libs/img/businessLogo.png" alt="momo">
                    </div>
                    <div class="momo-row-1-1">
                        <p>Customer Info</p>
                        <strong id="amountHead"> Pay 10000 XOF</strong>
                    </div>
                    <div class="momo-row-2">
                        <hr>
                        <p id="textIntro">
                            Enter your Mobile Monney details
                        </p>
                    </div>
                    <div class="momo-row-3">
                        <img src="./libs/img/mmlogo.png" alt="">
                        <input id="phone" type="tel">
                    </div>
                    <div class="momo-row-4">
                        <input id="btnPayment" onclick="sendPayemnt()" type="submit" value="Pay 1000 XOF" class="btn">
                        <div id="loader"></div>
                    </div>
                </div>-->
            </div>
            <div id="app"></div>
            
            <!-- plugin initialization -->
            <script>
                // import {MomoApi} from "./src/core/momo-api";
            
                document.addEventListener('DOMContentLoaded', function () {
                    // create instance of a plugin
            
                    var instance = new MomoControler("momo", 'UBHQ', 'USR06', 'YG739G5XFVPYYV4ADJVW', 1, {
                        'pathImageBusiness': './assets//img/businessLogo.png',
                        'amountHead': 'Payé {amount} XOF'
                    });
                    instance._init();
            
                    // initialize
                    // instance.init();
            
                    // add new users
            
                });
            </script>
            
            <!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>-->
            <!--<script src="./libs/js/intlTelInput.js"></script>-->
            <!--  <script>
                  var input = document.querySelector("#phone"),
                      output = document.querySelector("#output");
                  var iti = window.intlTelInput(input, {
                      nationalMode: true,
                      initialCountry: "auto",
                      geoIpLookup: function(success, failure) {
                          $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                              var countryCode = (resp && resp.country) ? resp.country : "BJ";
                              // console.log(countryCode)
                              success(countryCode);
                          });},
                      utilsScript: "./libs/js/utils.js?1537727621611" // just for formatting/placeholders etc
                  });
                  var handleChange = function () {
                      var text = (iti.isValidNumber()) ? "International: " + iti.getNumber() : "Please enter a number below";
                      var textNode = document.createTextNode(text);
                      output.innerHTML = "";
                      output.appendChild(textNode);
                  };
                  // listen to "keyup", but also "change" to update when the user selects a country
                  input.addEventListener('change', handleChange);
                  input.addEventListener('keyup', handleChange);
              </script>-->
            <!--<script src="./dist/main.js"></script>-->
            
            
            <script>
            
            
                //  import initMomoApi from "momo.bundle.js";
            
                // initMomoApi();
            </script>
            <!--<script src="index.js"></script>-->
            <script type="text/javascript" src="./momo.bundle.js"></script></body>
            
            </html>`,
      },
    ],
  },
  Endpoints: {
    SuccessCode: "HTTP Status Code: 202",
    FailedCode: "HTTP Status Code: 404",
    payment: {
      states: [
        {
          name: "Request",
          language: "json",
          code: `Content-Type: application/json[Basic Authentication headers]…

          {
            “msisdn”: “22967307747”,
            “amount”: “2000”,
            “firstname”:”David”,
            “lastname”:”Ashaolu”,
            “transref” :”12345″,
            “clientid”: “QOS3P001”
          }`,
        },
        {
          name: "Success",
          language: "json",
          code: `
          {
            “responsecode”: “01”,
            “responsemsg”: “PENDING”,
            “transref”: “12345”,
            “comment”: null
          }`,
        },
        {
          name: "Error",
          language: "json",
          code: `
          {
            “responsecode”: “-2”,
            “responsemsg”: “Invalid Client Id”,
            “transref”: “12345”,
            “comment”: null
          }`,
        },
      ],
      uri: `POST {baseUrl}/QosicBridge/user/requestpayment`,
    },
    transaction: {
      states: [
        {
          name: "Request",
          language: "json",
          code: `Content-Type: application/json[Basic Authentication headers]…
          
        {
            “transref” :”12345″,
            “clientid”: “QOS3P001”
        }`,
        },
        {
          name: "Success",
          language: "json",
          code: `
          {
            “responsecode”: “00”,
            “responsemsg”: “SUCCESSFUL”,
            “transref”: “12345”,
            “comment”: “TRANSACTION APPROVED AND PROCESSED SUCCESSFULLY”
          }`,
        },
        {
          name: "Error",
          language: "json",
          code: `
            {
                “responsecode”: “-2”,
                “responsemsg”: “INVALID CLIENT ID”,
                “transref”: “12345”,
                “comment”: “CLIENT ID DOES NOT EXIST”
            }`,
        },
      ],
      uri: "POST {context}/QosicBridge/user/gettransactionstatus",
    },
    refund: {
      states: [
        {
          name: "Request",
          language: "json",
          code: `Content-Type: application/json[Basic Authentication headers]…

        {
            “transref” :”56789″,
            “clientid”: “QOS3P001”
        }`,
        },
        {
          name: "Success",
          language: "json",
          code: `
          {
            “responsecode”: “00”,
            “responsemsg”: “OPERATION SUCCESSFUL”,
            “transref”: “56789”,
            “comment”: null
          }`,
        },
        {
          name: "Error",
          language: "json",
          code: `
          {
            “responsecode”: “-2”,
            “responsemsg”: “Invalid Client Id”,
            “transref”: “56789”,
            “comment”: null
          }`,
        },
      ],
      uri: "POST {context}/QosicBridge/user/refund ",
    },
  },
};

Code.LibsOverview = function () {
  return [
    {
      name: "php",
      language: this.Libs.php[0].language,
      code: this.Libs.php[0].code,
    },
    {
      name: "Javascript",
      language: this.Libs.javascript[0].language,
      code: this.Libs.javascript[0].code,
    },
    {
      name: "Django",
      language: this.Libs.django[0].language,
      code: this.Libs.django[0].code,
    },
    {
      name: "Laravel",
      language: this.Libs.laravel[0].language,
      code: this.Libs.laravel[0].code,
    },
  ];
};
