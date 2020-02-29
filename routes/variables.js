

var userEmail = '';

function updateEmail(data)
{
     userEmail = data;
}
function viewEmail ()
{
    return userEmail;
}
module.exports = { viewEmail:viewEmail,updateEmail:updateEmail};
