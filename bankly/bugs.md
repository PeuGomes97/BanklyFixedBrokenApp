- Missing "await" keyword on user.authenticate..
- Get("/") request on users route should not list all fields.
- Allowed permission for users patch themselves
- USer shouldn't be allowed to patch username/admin and other fields.
- Delete request always returns Success
- Tricky Bug : 
The Authenticate function on middleware decode the JWT. It should be verify.