// api/yandex.js
export default async function handler(req, res) {
    // Разрешаем запросы с твоего сайта
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Твои ключи (вставь сюда)
        const FOLDER_ID = 'b1gqd5f3qariceg4oqht';
        const API_KEY = 'YCAJEOU3_ItuNmjc6jCtle_Uz';

        const response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/completion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Api-Key ${API_KEY}`,
                'x-folder-id': FOLDER_ID
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Yandex API Error:', error);
        res.status(500).json({ error: error.message });
    }
}
