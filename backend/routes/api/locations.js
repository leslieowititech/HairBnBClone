const express = require('express');
const asyncHandler = require('express-async-handler');
const { Location } = require('../../db/models');

// const {Image} = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler( async (req,res) => {
    const locations = await Location.findAll();
    // const images = await Image.findAll();    
    

    return res.json(
        locations  
       );
}));

router.get('/:state/:id', asyncHandler( async (req, res) => {//id matching
    // console.log(req.rawHeaders[15])
    // const id = req.params()
    // console.log('hello',req,'bye')
    // const url = req.rawHeaders[15]
    // const id = Number(url[url.length-1])
    // // console.log(id, 'id here')
    // // console.log('testing4231')
    // const location = await Location.findOne({ where: { id: id} })
    
    // return res.json(
    //      [location]
    // )
    // return req
}))

router.get('/:state', asyncHandler(async (req,res) => {//state matching
    // res.send(req.params
    console.log(req.params)
    // console.log(req)
    // console.log(await Location)
    const data = req.rawHeaders[17];
   
    let myState = []  
    for(let i = data.length-1 ; i > 0 ; i--){
        let char = data[i];        
       if (char.match(/%/) || char.match(/[0-9]+/)) { 
           if(myState.includes(' ')) {
               continue
           }         
            myState.unshift(' ')
            continue;
        }
        myState.unshift(char);
        if(char === '/'){
            break
        }
    }
    const state = myState.slice(1).join('')
    // req.params.state = state
    // console.log(req.params, 'params2')
    // console.log(state)
    const locations = await Location.findAll({
        where: {state: state}
    })  
    // console.log(locations)

    return res.json(
        locations
    )
}))

router.post('/new', asyncHandler(async (req, res) => {
    const {} = req.body;
    const location = Location.create({})

    return res.json(
        location
    )
}))

module.exports = router;