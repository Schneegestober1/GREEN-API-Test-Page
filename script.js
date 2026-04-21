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
        document.getElementById('result').value = "Ошибка " + error
    }
}

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