let submiBtn = document.getElementById('submiBtn')
submiBtn.onclick = async ()=>{
    const form = document.getElementById('formulaire')
    const val = document.querySelectorAll('input')
    let formClient = [
        {
            "Company": "Cerealis",
            "Last_Name": val[0].value,
            "First_Name": val[1].value,
            "Email": val[2].value,
            "State": "France"
        }
    ]
    let requestDetails = {
        method : "POST",
        headers: {'Content-Type': 'application/json'},
        body :  JSON.stringify(formClient),
        encoding: "utf8",
        throwHttpErrors : false
    };
    const data = await fetch('/api', requestDetails)
    const json = await data.json()
    console.log(json);
    if(json.response === 'SUCCESS'){
        document.getElementById('btnSave').innerHTML='<input class="form-control" type="text" value="Enregistrement avec succes !" aria-label="Disabled input example" disabled readonly>'
        document.getElementById('emailId').innerText = 'E-mail'
        document.getElementById('emailId').setAttribute('style' ,'color : black;' )

    }
    if(json.response ==='DUPLICATE_DATA'){
        document.getElementById('emailId').innerText = `Erreur: ${json.response}`
        document.getElementById('emailId').setAttribute('style' ,'color : red;' )
    }
}

let downloadLink = document.getElementById('btnApk')
downloadLink.onclick = async ()=>{
    const data = await fetch('/dowloandApk')
    const json = await data.json()
    let linkSource = json.data
    let fileName = 'apps.apk'
    let dowloandApk = document.createElement('a')
    dowloandApk.href = linkSource
    dowloandApk.download = fileName
    dowloandApk.click()
}






