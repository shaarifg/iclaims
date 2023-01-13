const express = require('express');
const router = express.Router();

const {
    createClaim, 
    getClaimById, 
    getAllClaimsByPolicyId, 
    getCliamsByHospitalName, 
    updateClaim, 
    deleteClaim,
    getAllClaims} = require('./claim.controller');


//Create a new claim
router.post('/claims', (req, res)=>{
    // console.log(req.body);
    createClaim(req.body)
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
}) 


// * Get all claims
router.get('/all-claims', (req, res)=>{
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

//* Get a claim by its id
router.get('/claim/:id',(req, res)=>{
    // console.log(req.params.id);
    getClaimById(req.params.id)
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
} )
    
//* Get all claims for given policy id  
router.get('/claims/policyId', (req, res)=>{
    getAllClaimsByPolicyId(req.query.policyId)
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
}); 

//*Get all claims for given hospital Name
router.get('/claims/hospital', (req, res)=>{
    console.log('Sharif')
    console.log(req.query.hospital)
    if(req.query.hospital=='') res.end('Please Enter Hospital Name')
    else{
    const {hospital} = req.query
    getCliamsByHospitalName( {hospital} )
    .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
    }
    
});

//*Update the claim status by its id
router.put('/claim/:id', (req, res)=>{
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
router.delete('/claim/:id', (req, res)=>{
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
