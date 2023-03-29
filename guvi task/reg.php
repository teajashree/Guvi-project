$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
function registerUser($username, $password, $email, $date of birth) {
  global $redis;
  $redis->hmset('users:'.$username, array('username' => $username, 'password' => $password));
  $redis->hmset('email:'.$email,array('email'=> $email, 'password'=>$password));
}
function loginUser($username, $password) {
  global $redis;
  $stored_password = $redis->hget('users:'.$username, 'password');
  if ($stored_password == $password) {
    return true;
  } else {
    return false;
  }
}