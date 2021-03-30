const formId = "1FAIpQLScZYuj0XFB5lOPiPss8TIlZAw0iTj6jriAjgByC9nshsTQAFA" ;
const entry1 = "entry.1057196889" ;
const entry2 = "entry.1278327841" ;
const entry3 = "entry.1443776988" ;
const getPath = formId => `https://docs.google.com/forms/d/e/1FAIpQLScZYuj0XFB5lOPiPss8TIlZAw0iTj6jriAjgByC9nshsTQAFA/formResponse` ; 

//Use form id to get path, use path & data to get URL with Query String. Use URL and
//'POST' (HTTP verb) to initialize a HTTP request. Requires 3 helper functions.
const postToGoogleDB = function ( data ){
	const path = getPath ( formId );
	const url = getURL ( path , data )
	sendRequest ( 'POST' , url )
 		.then ( responseEvent ); 
}

//: Helper function, Instantiate URL object & set data to its searchParams attribute
const getURL = function ( path , params ){
	const url = new URL ( path );
	for ( let key in params ){
	url.searchParams.set ( key , params [ key ] );
	}
	return url ;
} 

//: Helper function, Initializes a request. Uses the form to do so. Sets form action with URL
//string & sets form method with the HTTP verb. Both passed in as parameters.
const initRequest = function ( verb , url ){
	const init = new Object ();
	init.method = verb ;
	init.mode = 'no-cors' ;
	return new Request ( url , init ); 
}

//Helper function, Asynchronous function sends a Request to server with a fetch &
//returns a Response object
const sendRequest = async function ( verb , url ) {
	const request = initRequest ( verb , url );
	const response = await fetch ( request );
	return response ;
}

//Helper function, Given a Response object, renders a success message
const responseEvent = response => alert ( 'Success!' ); 