// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:8d72753e-604b-4637-af1e-cc66e9a6cd5c',
});


// Initialize the Cognito Sync client

AWS.config.credentials.get(function(){

   var syncClient = new AWS.CognitoSyncManager();

   syncClient.openOrCreateDataset('myDataset', function(err, dataset) {

      dataset.put('myKey', 'myValue', function(err, record){

         dataset.synchronize({

            onSuccess: function(data, newRecords) {
                // Your handler code here
            }

         });

      });
     
   });

});


// Called when an identity provider (providerName) has a token
// for a logged in user.
function userLoggedIn(providerName, token) {
  creds.params.Logins = {};
  creds.params.Logins[providerName] = token;

  // finally, expire the credentials so we refresh on the next request
  creds.expired = true;
}