module.exports = {

//fetch my houses
getAllHouses: ( req, res ) => {
    const dbInstance = req.app.get( "db" );

    dbInstance.getAll_houses()

    .then(response => res.status(200).send(response))
    .catch(err => {
        res.status(500).send({errorMessage: "Server Side Error: Can't fight it can't take it!"})
        console.log(err)
    });
},

createHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const {name, address, city, state, zip, 
            img, mortgage, rent} = req.body;    //destruct
        console.log(req.body);

    dbInstance.create_house([name, address, city, state, zip, img, mortgage, rent])
    .then( () => res.sendStatus(200))
    .catch( err => {
        res.status(500).send({errorMessage: "Server Error: Can't create_house to db"})
        console.log(err)
    });
},






deleteHouse: (req, res) => {
    const dbInstance = req.app.get("db");

    const { id } = req.params;          //destruct
    
    dbInstance.delete_house([id])
    .then(() => res.sendStatus(200))
    .catch( err => {
        res.status(500).send({errorMessage: "Server Error: Can't touch this!"})
        console.log(err)
    });
}
}
