const claimModel = require("./claim.enitity");

//Function to post or create a cliam && passing status and policyID is mandatory
const createClaim = (claimData) => {
  return new Promise((reject, resolve) => {
    const newClaim = new claimModel();
    newClaim.name = claimData.name;
    newClaim.age = claimData.age;
    newClaim.hospital = claimData.hospital;
    newClaim.address = claimData.address;
    newClaim.phone = claimData.phone;
    newClaim.date = claimData.date;
    newClaim.status = claimData.status;
    newClaim.policyId = claimData.policyId;
    if (!newClaim.status || !newClaim.policyId) {
      reject({ message: "Please Enter PolicyId & Status 🎈", status: 500 });
    }
    newClaim.save((error, data) => {
      if (error) {
        reject({ message: "Somentging went wrong 😢", status: 500 });
      } else {
        resolve({
          message: "Claim is CREATED successfully ✔😊",
          status: 201,
          addedData: data,
        });
      }
    });
  });
};

const getAllClaims = () => {
  return new Promise(async (reject, resolve) => {
    const claims = await claimModel.find();
    // console.log(claim);
    if (!claims) {
      reject({ message: "Claims not found 🎈", status: 500 });
    } else {
      resolve({
        message: "FOUND ALL claims successfully ✔😊",
        status: 201,
        claims: claims,
      });
    }
  });
};

//Function to get a claim by it's id
const getClaimById = (id) => {
  return new Promise(async (reject, resolve) => {
    const claim = await claimModel.findById(id);
    // console.log(claim);
    if (!claim) {
      reject({ message: "Claim not found 🎈", status: 500 });
    } else {
      resolve({
        message: "FOUND claim for given Id successfully ✔😊",
        status: 201,
        claim: claim,
      });
    }
  });
};

//Function to get all claims of same policyID
const getAllClaimsByPolicyId = (policyId) => {
  return new Promise(async (reject, resolve) => {
    const claims = await claimModel.find({ policyId: policyId });
    // console.log(claim);
    if (!claims) {
      reject({ message: "Claims not found 🎈", status: 500 });
    } else {
      resolve({
        message: "FOUND all claims for given policyId successfully ✔😊",
        status: 201,
        claims: claims,
      });
    }
  });
};

// Function to Get all claims for given hospital name and claim date
const getCliamsByHospitalName = ({ hospital }) => {
  return new Promise(async (reject, resolve) => {
    const claims = await claimModel.find({ hospital: hospital });
    // console.log(claim);
    if (!claims) {
      reject({ message: "Claims not found 🎈", status: 500 });
    } else {
      resolve({
        message: "FOUND all claims for given hospital name successfully ✔😊",
        status: 201,
        claims: claims,
      });
    }
  });
};

// Function to Get all claims for given hospital name and claim date
const getClaimsByName = ( name ) => {
  return new Promise(async (reject, resolve) => {
    const claims = await claimModel.find({ name: name });
    // console.log(claim);
    if (!claims) {
      reject({ message: "Claims not found 🎈", status: 500 });
    } else {
      resolve({
        message:
          "FOUND all claims for given Benerficiary's name successfully ✔😊",
        status: 201,
        claims: claims,
      });
    }
  });
};

//Function to update the status of a claim by using its Id
const updateClaim = (claimId, updateData) => {
  return new Promise(async (reject, resolve) => {
    const updatedClaim = await claimModel.findByIdAndUpdate(claimId, {
      status: updateData.status,
      name: updateData.name,
      policyId: updateClaim.policyId,
      hospital: updateClaim.hospital,
      date: updateClaim.date,
      age: updateClaim.age
    });

    // console.log(claim);
    if (!updatedClaim) {
      reject({ message: "Claims not found 🎈", status: 500 });
    } else {
      resolve({
        message: "Claim is UPDATED successfully ✔😊",
        status: 201,
      });
    }
  });
};

//Function to delete a claim by using its Id
const deleteClaim = (claimId) => {
  return new Promise(async (reject, resolve) => {
    const claim = await claimModel.findByIdAndDelete(claimId);
    // console.log(claim);
    if (!claim) {
      reject({ message: "Claims not found 🎈", status: 500 });
    } else {
      resolve({
        message: "Claim of given id is DELETED successfully ✔😊",
        status: 201,
        deletedClaim: claim,
      });
    }
  });
};

module.exports = {
  createClaim,
  getClaimById,
  getAllClaims,
  getAllClaimsByPolicyId,
  getCliamsByHospitalName,
  updateClaim,
  deleteClaim,
  getClaimsByName,
};
