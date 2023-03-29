$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
function registerUser($username, $password) {
  global $redis;
  $redis->hmset('users:'.$username, array('username' => $username, 'password' => $password));
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
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['register'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];
  registerUser($username, $password);
}
