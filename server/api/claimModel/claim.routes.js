const express = require('express');
const router = express.Router();

const {
    createClaim, 
    getClaimById, 
    getAllClaimsByPolicyId, 
    getCliamsByHospitalAndDate, 
    updateClaim, 
    deleteClaim,
    getAllClaims} = require('./claim.controller');


//Create a new claim
router.post('/claims', (req, res)=>{
    console.log(req.body);
    createClaim(req.body)
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
}) 


// * Get all claims
router.get('/claims', (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    // console.log(req.body);
    getAllClaims()
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
})

//Get an claim by its id
router.get('/claims/:id',(req, res)=>{
    console.log(req.params.id);
    getClaimById(req.params.id)
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
} )
    
//Get all claims for given policy id  
router.get('/claims/policy/:id', (req, res)=>{
    getAllClaimsByPolicyId(req.params.id)
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
}); 

//Get all claims for given hospital Name and claim date
router.get('/claims', (req, res)=>{
    if(req.query.hospital=='' || req.query.date=='') res.end('Enter Hospital name and claim date')
    else{
    const {hospital, date} = req.query
    getCliamsByHospitalAndDate( {hospital, date} )
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
    }
    
});

//Update the claim status by its id
router.put('/claims/:id', (req, res)=>{
    // console.log(req.params.id);
    updateClaim(req.params.id, req.body)
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
}); 



//Delete a claim by claim id 
router.delete('/claims/:id', (req, res)=>{
    // console.log(req.params.id);
    deleteClaim(req.params.id)
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
});

module.exports = router
