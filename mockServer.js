const express = require('express')
const app = express()
const port = 4000

app.get('/property-details/:id', async (req, res) => {
    const id = req.params.id;
    console.log(`/property-details/${id} requested`);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return res.json({
        id,
        name: 'Marlin Waterloo',
        location: '111 Westminster Bridge Road, Lambeth, SE1 7HR, London, United Kingdom',
        rooms: [
            { id: '1', name: 'Classic Double Room', size: '23 sqm', price: 100, facilities: ['WiFi', 'TV', 'Air Conditioning'] },
            { id: '2', name: 'Deluxe King Room', size: '30 sqm', price: 150, facilities: ['WiFi', 'TV', 'Air Conditioning'] },
            { id: '3', name: 'Executive Suite', size: '45 sqm', price: 200, facilities: ['WiFi', 'TV', 'Air Conditioning'] },
        ],
        facilities: ['Pool', 'Gym', 'Spa'],
        generatedAt: new Date().toISOString(),

    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})