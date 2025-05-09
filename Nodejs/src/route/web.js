import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";

let router = express.Router();

let initWebRoutes = (app) => {
  // homeController
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  // userController
  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-user", userController.handleCreateNewUser); // create user api
  router.put("/api/edit-user", userController.handleEditUser); // edit user api
  router.delete("/api/delete-user", userController.handleDeleteUser); // delete user api

  router.get("/api/allcode", userController.getAllCode);

  // doctorController
  router.get("/api/top-doctor-home", doctorController.getTopDoctor); // get top doctor a week
  router.get("/api/get-all-doctors", doctorController.getAllDoctors); // get all doctor
  router.post("/api/save-infor-doctors", doctorController.postInforDoctor); // save infor doctor
  router.get(
    "/api/get-detail-doctor-by-id",
    doctorController.getDetailDoctorById
  ); // get detail information a doctor by id
  router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule); // create many schedule a time
  router.get(
    "/api/get-schedule-doctor-by-date",
    doctorController.getScheduleByDate
  ); // get detail infor schedule doctor
  router.get(
    "/api/get-extra-infor-doctor-by-id",
    doctorController.getExtraInforDoctorById
  ); // get extra information a doctor by id
  router.get(
    "/api/get-profile-doctor-by-id",
    doctorController.getProfileDoctorById
  ); // get profile a doctor by id

  router.get("/api/get-list-patient-for-doctor", doctorController.getListPatient4Doctor);
  router.post("/api/send-remedy", doctorController.sendRemedy);

  // patientController
  router.post(
    "/api/patient-booking-appointment",
    patientController.postBookingAppointment
  ); // patient booking appointment

  router.post(
    "/api/verify-booking-appointment",
    patientController.postVerifyBookingAppointment
  ); // verify token booking appointment

  // specialty
  router.post("/api/create-new-specialty", specialtyController.createSpecialty); // Create a new specialty
  router.get("/api/get-all-specialty", specialtyController.getAllSpecialty); // Get all specialty
  router.get(
    "/api/get-detail-specialty-by-id",
    specialtyController.getDetailSpecialtyById
  ); // Get all specialty

  // clinic
  router.post("/api/create-new-clinic", clinicController.createClinic); // Create a new clinic
  router.get("/api/get-all-clinic", clinicController.getAllClinic); // Get all clinic
  router.get("/api/get-detail-clinic-by-id", clinicController.getDetailClinicById); // Get all clinic 

  return app.use("/", router);
};

module.exports = initWebRoutes;
