var cs = document.getElementById('cs');
    var ip = document.getElementById('ip')


    if (navigator.onLine) {
        cs.innerHTML = "Connection Status: Connected"
        fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(data => {
                const ipAddress = data.ip;
                ip.innerHTML = "IP Adress: " + ipAddress
            })

    }
    else {
        cs.innerHTML = "Connection Status: Disconnected"
        ip.innerHTML = "IP Adress: -"

    }