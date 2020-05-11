const formId = "1FAIpQLScIldW6HGGzcv6RzXrEPEgXCfEDxyYLJmdK25eKy3ySgA2NWw"
const entry1 = "entry.537523559" //name
const entry2 = "entry.373802943" //email
const entry3 = "entry.860133815" //subject
const entry4 = "entry.992873772" //message

const getPath = formId => `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const postToGoogleDb = function(data){
    const path = getPath(formId);
    const url = getUrl(path,data);
    sendRequest('POST', url)
        .then( responseEvent );
}

const getUrl = function(path, params){
    const url = new URL(path);
    for(let key in params){
        url.searchParams.set(key, params[key]);
    }
    return url;
}

const initRequest = function(verb, url){
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
}

const sendRequest = async function(verb, url){
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
}

const responseEvent = response => alert('Success!');
