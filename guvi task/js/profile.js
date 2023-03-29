const url = 'https://example.com/api/user/123'; 

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('profile-image').src = data.profileImage;
    document.getElementById('profile-name').textContent = data.name;
    document.getElementById('profile-bio').textContent = data.bio;
    document.getElementById('profile-location').textContent = `Location: ${data.location}`;
    document.getElementById('profile-email').textContent = `Email: ${data.email}`;
    document.getElementById('profile-website').textContent = `Website: ${data.website}`;
  })
  .catch(error => console.error(error));
