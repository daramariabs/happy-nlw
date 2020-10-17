const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados
    await saveOrphanage(db, {
        lat: "-10.1931962",
        lng: "-48.3523408",
        name: "Lar das meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"55 37474747",
        images: [
            "https://images.unsplash.com/photo-1576024267263-70f1caffd6fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1591593443255-db4646e739b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
        opening_hours: "Horário de visitas das 18h até as 8h",
        open_on_weekends: "0"
    })

    //consultar dados
    const selectedOrphanages = await db.all("SELECT * FROM orphanages ")
    console.log(selectedOrphanages)

    //consultar somente um dado
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages WHERE id=2")
    //console.log(selectedOrphanages)

    //deletar dados
    //console.log(await db.run("DELETE FROM orphanages WHERE id=5"))  
    
    //await db.all("SELECT * FROM orphanages ")
    //console.log(selectedOrphanages)
})