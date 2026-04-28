
<!DOCTYPE html>
<html>
<head>
  <title>Malware analysis - Edition 2026</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/files/cf8328ba8175aab8dae1af9d65381c96/favicon.png" type="image/x-icon">

  

  
    <link rel="stylesheet" href="/themes/core-beta/static/assets/main.0c7144ba.css">
  

  

  <script  src="/themes/core-beta/static/assets/color_mode_switcher.52334129.js"></script>

  <script type="text/javascript">
      window.init = {
          'urlRoot': "",
          'csrfNonce': "e34b4f538083e32e70b0ed786d155fe67bddd4904a9347a0f7f4e277d01f1690",
          'userMode': "users",
          'userId': 73,
          'userName': "Alaint\u00e9rieur",
          'userEmail': "r.rais@myskolae.fr",
          'teamId': null,
          'teamName': null,
          'start': null,
          'end': null,
          'themeSettings': {"challenge_category_order": "function compare(a, b) {\r\n  if (a \u003c b) {\r\n    return -1;\r\n  }\r\n  if (a \u003e b) {\r\n    return 1;\r\n  }\r\n  return 0;\r\n}", "challenge_order": "", "challenge_window_size": "norm", "use_builtin_code_highlighter": true},
          'eventSounds': [
            "/themes/core/static/sounds/notification.webm",
            "/themes/core/static/sounds/notification.mp3",
          ],
      }
  </script>

  <style id="theme-color">
:root {--theme-color: #000000;}
.navbar{background-color: var(--theme-color) !important;}
.jumbotron{background-color: var(--theme-color) !important;}
</style>

</head>
<body>
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div class="container">
    <a href="/" class="navbar-brand">
      
        <img
            class="img-responsive ctf_logo"
            src="/files/91c07b3c1fb7610c75de88523ce2a513/logo.jpeg"
            alt="Malware analysis - Edition 2026"
            height="25"
        >
      
    </a>

    <button
        class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#base-navbars"
        aria-controls="base-navbars" aria-expanded="false" aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="base-navbars">
      <ul class="navbar-nav me-auto">
        
          <li class="nav-item">
            <a class="nav-link" href="/documentation" >
              Supports de cours
            </a>
          </li>
        

        
          <li class="nav-item">
            <a class="nav-link" href="/users">
              Utilisateurs
            </a>
          </li>

          
        

        
          <li class="nav-item">
            <a class="nav-link" href="/scoreboard">
              Classement
            </a>
          </li>
        

        <li class="nav-item">
          <a class="nav-link" href="/challenges">
            Challenges
          </a>
        </li>
      </ul>

      <hr class="d-sm-flex d-md-flex d-lg-none">

      <ul class="navbar-nav ms-md-auto d-block d-sm-flex d-md-flex">
        

          

          <li class="nav-item">
            <a class="nav-link" href="/notifications">
              <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications">
                <i class="fas fa-bell d-none d-md-inline d-lg-none"></i>
              </span>
              <span class="d-sm-inline d-md-none d-lg-inline">
                  <i class="fas fa-bell pe-1"></i>
                  <span x-data x-show="$store.unread_count > 0" x-text="$store.unread_count" class="badge rounded-pill bg-danger badge-notification"></span>
                  Notifications
              </span>
            </a>
          </li>

          

          <li class="nav-item">
            <a class="nav-link" href="/user">
              <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Compte">
                <i class="fas fa-user-circle d-none d-md-inline d-lg-none"></i>
              </span>
              <span class="d-sm-inline d-md-none d-lg-inline">
                <i class="fas fa-user-circle pe-1"></i>
                Compte
              </span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/settings">
              <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Paramètres">
                <i class="fas fa-cogs d-none d-md-inline d-lg-none"></i>
              </span>
              <span class="d-sm-inline d-md-none d-lg-inline">
                <i class="fas fa-cogs pe-1"></i>
                Paramètres
              </span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/logout">
              <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Se déconnecter">
                <i class="fas fa-sign-out-alt d-none d-md-inline d-lg-none"></i>
              </span>
              <span class="d-sm-inline d-md-none d-lg-inline">
                <i class="fas fa-sign-out-alt pe-1"></i><span class="d-lg-none">
                  Se déconnecter
                </span>
              </span>
            </a>
          </li>
        
        <li class="nav-item">
          <button class="nav-link theme-switch" type="button">
            <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Toggle theme">
              <i class="fas fa-sun d-none d-md-inline"></i>
            </span>
            <span class="d-sm-inline d-md-none">
              <i class="fas fa-sun pe-1"></i>
              Toggle theme
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<main role="main">
  
  <div class="jumbotron">
    <div class="container">
      <h1>
        Challenges
      </h1>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
  

  
</div>
      </div>
    </div>

    <div 
      x-data="ChallengeBoard" 
      @load-challenges.window="loadChallenges()" 
      @load-challenge.window="loadChallenge($event.detail)"
    >
      <div
          x-ref="challengeWindow" id="challenge-window" class="modal fade" tabindex="-1" role="dialog" x-data=""
          x-html="$store.challenge.data.view"
      ></div>

      <div x-show="!loaded">
        <div class="min-vh-50 d-flex align-items-center">
          <div class="text-center w-100">
            <i class="fas fa-circle-notch fa-spin fa-3x fa-fw spinner"></i>
          </div>
        </div>
      </div>

      <div x-show="loaded">
        <template x-for="(category, idx) in getCategories()" :key="idx">
          <div class="pt-5">
            <div class="category-header mb-3">
              <h3 x-text="category"></h3>
            </div>

            <div class="category-challenges d-flex flex-column">
              <div class="challenges-row row">
                <template x-for="(c, idx) in getChallenges(category)" :key="c.id">
                  <div class="col-sm-6 col-md-4 col-lg-3 my-3">
                    <button
                        class="challenge-button btn btn-dark w-100 h-100"
                        :class="c.solved_by_me ? 'challenge-solved' : ''"
                        :value="c.id" @click="loadChallenge(c.id)"
                    >

                      <div class="challenge-inner my-3">
                        <p x-text="c.name"></p>
                        <span x-text="c.value"></span>
                      </div>
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

</main>

<footer class="footer">
</footer>

<div x-data>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div x-ref="toast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto" x-text="$store.toast.title"></strong>
        <small>just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" x-html="$store.toast.html">
      </div>
    </div>
  </div>
</div>


<div x-data>
  <div class="modal fade" x-ref="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" x-text="$store.modal.title"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p x-html="$store.modal.html"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Got it!</button>
        </div>
      </div>
    </div>
  </div>
</div>


  <script type="module"  src="/themes/core-beta/static/assets/index.2e31e3b8.js"></script><script type="module"  src="/themes/core-beta/static/assets/challenges.369de531.js"></script>




<div class="container text-center text-secondary">
  classe ESGI 2026 - cours d'analyse de malware - @AAA
</div>
</body>
</html>