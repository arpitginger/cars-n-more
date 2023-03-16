<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
 require "controllerUserData.php"; 
 require "config.php";
 ?>
 <?php
//  session_start();
// if($_SESSION['info'] == false){
//     header('Location: login.php');  
// }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css">
</head>

<body>

    <div class="main-container">
        <div class="form-container">

            <div class="srouce"><a title="Login Page" href="index.php">Cars & More</a></div>

            <div class="form-body">
                <h2 class="title">Log in with</h2>
                <div class="social-login">
                    <ul>
                        <li class="google"><a href="#">Google</a></li>
                        <li class="fb">
                            <!--<a href="#">Facebook</a>-->
                                    	<?php
		//If no $accessToken is set then user should log in first
		if(isset($accessToken)) {
			if(isset($_SESSION['facebook_access_token'])){
				$fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
			} else {
				// Put short-lived access token in session
				$_SESSION['facebook_access_token'] = (string) $accessToken;
				
				// The OAuth 2.0 client handler helps us manage access tokens
				$oAuth2Client = $fb->getOAuth2Client();
				
				if(!$accessToken->isLongLived()) {
					//Exchanges a short-lived access token for a long-lived one
					try {
						$accessToken = $oAuth2Client->getLongLivedAccessToken($accessToken);
						$_SESSION['facebook_access_token'] = (string) $accessToken;
					} catch (Facebook\Exceptions\FacebookSDKException $e) {
						echo "<p>Error getting long-lived access token: " . $helper->getMessage() . "</p>\n\n";
						exit;
					}
				}			
			}
			
			// Redirect the user back to the same page if url has "code" parameter in query string
			if(isset($_GET['code'])){
				header('Location: ./');
			}
			
			
			// Getting user facebook profile info
			try {
				$profileRequest = $fb->get('/me?fields=name,first_name,last_name,email,link,gender,locale,picture');
				$fbUserData = $profileRequest->getGraphNode()->asArray();
				
				//Ceate an instance of the OauthUser class
				$oauth_user_obj = new OauthUser();
				$userData = $oauth_user_obj->verifyUser($fbUserData);
			} catch(\FacebookResponseException $e) {
				echo 'Graph returned an error: ' . $e->getMessage();
				session_destroy();
				// Redirect user back to app login page
				header("Location: ./");
				exit;
			} catch(FacebookSDKException $e) {
				echo 'Facebook SDK returned an error: ' . $e->getMessage();
				session_destroy();
				// Redirect user back to app login page
				header("Location: ./");
				exit;
			}
		
		
			// Get logout url
			//$logoutURL = $helper->getLogoutUrl($accessToken, 'http://localhost/mit-demos/facebook-login/logout.php');
			
		
			
		} else {
			// Get login url
			$loginUrl = $helper->getLoginUrl($redirectUrl);
			echo '<a href="'.htmlspecialchars($loginUrl).'"><img class="login_image" src="/images/fblogin-btn.jpg"></a>';
		}
	?>
                        </li>
                    </ul>
                </div>

                <div class="_or">or
                                     <?php
                    if(count($errors) == 1){
                        ?>
                         <div class="alert alert-danger text-center" style="color: red;">
                             <center>
                             <?php
                            foreach($errors as $showerror){
                                echo $showerror;
                            }
                             ?>
                             </center>
                         </div>
                         <?php
                    }elseif(count($errors) > 1){
                         ?>
                         <div class="alert alert-danger" style="color:red;">
                             <center>
                             <?php
                             foreach($errors as $showerror){
                                 ?>
                                 <li><?php echo $showerror;?></li>
                                 <?php
                            }
                             ?>
                            </center>
                         </div>
                         <?php
                    }
                    ?>
                </div>


                <form class="the-form" name="form" id="form" method="post" action="controllerUserData.php">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" required>
                    <div>
                    <label for="keepLogin" style="width: 50%;">Keep me login:</label>
                    <input type="checkbox" value="1" id="check" name="remember" style="width: 50%;" required>
                    </div>
                    <input type="submit" name="login" value="Login" id="button" >
                    <center><a href="forgot.php">Forgot Password? Click Here</a></center>
                </form>
            </div>
        </div>

        <div class="form-footer">
            <div>
                <span>Don't have an account?</span>
                <a href="signup.php">Sign Up</a>
            </div>
        </div>

    </div>
</body>

</html>