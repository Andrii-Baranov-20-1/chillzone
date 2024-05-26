async function submitForm(event) {
    event.preventDefault(); //--- вимикаємо перезавантаження/перенаправлення сторінки
    try {
        //--- Формуємо запит
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: new FormData(event.target)
        });
        //--- Перевіряємо, що відповідь є
        if (!response.ok) throw (`Помилка під час звернення до сервера: ${response.status}`);
        //--- Перевіряємо, що відповідь дійсно JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw ('Помилка. Відповідь не JSON');
        }
        //--- Обробляємо запит
        const json = await response.json();
        if (json.result === "success") {
            //--- У разі успіху
            alert(json.info);
        } else {
            //---  У разі помилки
            console.log(json.desc);
            throw (json.info);
        }
    } catch (error) { //--- Обробка помилки
        alert(error);
    }
}