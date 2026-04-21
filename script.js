// 1. getSettings
async function getSettings() {
    const id = document.getElementById('idInstance').value
    const token = document.getElementById('apiToken').value

    const url = `https://api.green-api.com/waInstance${id}/getSettings/${token}`

    if(!id || !token) {
        alert("Please input the id and the token")
        return
    } 

    try {
        const response = await fetch(url)
        const data = await response.json()

        document.getElementById('result').value = JSON.stringify(data, null, 2)
    } catch (error) {
        console.log(error)
        document.getElementById('result').value = "Ошибка " + error
    }
}

// 2. getStateInstance
async function getStateInstance() {
    const id = document.getElementById('idInstance').value
    const token = document.getElementById('apiToken').value

    const url = `https://api.green-api.com/waInstance${id}/getStateInstance/${token}`

    if(!id || !token) {
        alert("Please input the id and the token")
        return
    } 

    try {
        const response = await fetch(url)
        const data = await response.json()

        document.getElementById('result').value = JSON.stringify(data, null, 2)
    } catch (error) {
        document.getElementById('result').value = "Ошибка " + error
    }
}

// 3. sendMessage
async function sendMessage() {
    const id = document.getElementById('idInstance').value
    const token = document.getElementById('apiToken').value
    let phone = document.getElementById('phone').value
    const message = document.getElementById('message').value

    const url = `https://api.green-api.com/waInstance${id}/sendMessage/${token}`

    const body = {
        chatId: phone + "@c.us", 
        message: message
    }

    if(!id || !token) {
        alert("Please input the id and the token")
        return
    } 


    if(!phone.trim() || !message.trim()) {
        alert("Please inout the phone number and the message")
        return
    }

    phone = phone.replace(/\D/g, '')

    if(phone.startsWith('8')) {
        phone = '7' + phone.slice(1)
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data?.message || JSON.stringify(data, null, 2))
        }

        document.getElementById('result').value = JSON.stringify(data, null, 2)

    } catch (error) {
        document.getElementById('result').value = "Ошибка: " + error.message
    }
}

// 4. sendFileByUrl
async function sendFileByUrl() {
    const id = document.getElementById('idInstance').value
    const token = document.getElementById('apiToken').value
    let phone = document.getElementById('filePhone').value

    const fileUrl = document.getElementById('fileUrl').value
    const fileName = document.getElementById('fileName').value
    const fileCaption = document.getElementById('caption').value

    if(!id || !token) {
        alert("Please input the id and the token")
        return
    } 


    if(!phone.trim() || !fileUrl.trim() || !fileName.trim()) {
        alert('Please fill phone, file URL and file name')
        return
    }

    phone = phone.replace(/\D/g, '')

    if(phone.startsWith('8')) {
        phone = '7' + phone.slice(1)
    }

    const url = `https://api.green-api.com/waInstance${id}/sendFileByUrl/${token}`

    const body = {
        chatId: phone + "@c.us",
        urlFile: fileUrl,
        fileName: fileName,
        caption: fileCaption
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const data = await response.json()

        if(!response.ok) {
            throw new Error (
                data?.message || JSON.stringify(data, null, 2)
            )
        }

        document.getElementById('result').value = JSON.stringify(data, null, 2)
    } catch (error) {
        document.getElementById('result').value = "Ошибка " + error.message
    }
}
