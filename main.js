<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="resources/css/form.css"
  <script src="main.js"> </script>

  <title>Document</title>


</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Create Account</h2>
    </div>
    <form id="form" class="form">
      <div class="form-control">
        <label for="username">Username</label>
        <input type="text" placeholder="Name" id="username" />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="username">Email</label>
        <input type="email" placeholder="jonsmith@gmail.com" id="email" />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="username">Password</label>
        <input type="password" placeholder="Password" id="password"/>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="username">Password check</label>
        <input type="password" placeholder="Re-enter Password" id="password2"/>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <button>Submit</button>
    </form>
  </div>
  
  
  
</body>
</html>
