async function getSettings() {
    const id = document.getElementById('idInstance').value
    const token = document.getElementById('apiToken').value

    const url = `https://api.green-api.com/waInstance${id}/getSettings/${token}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        document.getElementById('result').value = JSON.stringify(data, null, 2)
    } catch (error) {
        document.getElementById('result').value = "Ошибка" + error
    }
}