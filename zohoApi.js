import  fetch from 'node-fetch'

async function SaveContact(data){
    let urlToken = 'https://accounts.zoho.eu/oauth/v2/token?grant_type=refresh_token&client_id=1000.JFGTCHR5OPMCMP7BR3FI88JV5OXBHY&client_secret=b2d797218b022b4930df18a67ce330c88184870c85&refresh_token=1000.f84a7e9fd9ab5a2a16655f83fee5d112.1ff4f361d13800371ed9b6c618e06c19'
    let getTokenOptions = {
        method : "POST",
        // headers : headers,
        // body : JSON.stringify(requestBody),
        encoding: "utf8",
        throwHttpErrors : false
    };
    
    let getToken = await fetch(urlToken, getTokenOptions)
    .then(res => res.json())
    let urlContatct = 'https://www.zohoapis.eu/crm/v2/Contacts'
    let headers = {
        Authorization : `Zoho-oauthtoken ${getToken.access_token}`
    }
    let body = {
        "data": data,
        "trigger": [
            "approval",
            "workflow",
            "blueprint"
        ]
    }

    let requestDetails = {
        method : "POST",
        headers : headers,
        body :  JSON.stringify(body),
        encoding: "utf8",
        throwHttpErrors : false
    };
    let response = await fetch(urlContatct, requestDetails)
    .then(res => res.json())
    return response.data[0].code
}

export default SaveContact






// async function insertRecords() {
    
    

//     let url = 'https://www.zohoapis.com/crm/v2/Leads'

//     let headers = {
//         Authorization : "Zoho-oauthtoken 1000.a5b4128bda8c4790d0f1aa713a1234f5.8d0445e7706f3da2340de2ab8d0e5b11"
//     }

//     let requestBody = {}
//     let recordArray = []

//     let recordObject1 = {
//         'Company': 'Zylker',
//         'Email': 'p.daly@zylker.com',
//         'Last_Name': 'Daly',
//         'First_Name': 'Paul',
//         'Lead_Status': 'Contacted',
//     }

//     let recordObject2 = {
//         'Last_Name': 'Dolan',
//         'First_Name': 'Brian',
//         'Email': 'brian@villa.com',
//         'Company': 'Villa Margarita'
//     }

//     recordArray.push(recordObject1)
//     recordArray.push(recordObject2)

//     requestBody['data'] = recordArray

//     let trigger = ['approval', 'workflow', 'blueprint']
//     requestBody['trigger'] = trigger

//     let requestDetails = {
//         method : "POST",
//         headers : headers,
//         body : JSON.stringify(requestBody),
//         encoding: "utf8",
//         throwHttpErrors : false
//     };
    
//     let response = await got(url, requestDetails)
//     console.log(response);
    
//     if(response != null) {
//         console.log(response.statusCode);
//         console.log(response.body);
//     }
// }
// // insertRecords()