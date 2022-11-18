const { Schema, model } = require("mongoose");

const applicationDetailsSchema = new Schema({
  workPermit: {
    type: Boolean,
    required: true,
  },
  locatedInBerlin: {
    type: Boolean,
    required: true,
  },
  relocateToBerlin: {
    type: Boolean,
  },
  studyTrack: {
    type: String,
    required: true,
  },
  reasonToChooseStudyTrack: {
    type: String,
  },
  industryExperience: {
    type: String,
  },
  goals: {
    type: String,
  },
  howToSupport: {
    type: String,
  },
  thinkAboutCODE: {
    type: String,
  },
  typicalWeekActivities: {
    type: String,
  },
  personalityDescribe: {
    type: String,
  },
  timeToAttendCourse: {
    type: String,
  },
  timeToAttendEvent: {
    type: String,
  },
});

const applicationSchema = new Schema({
  pronoun: {
    type: String,
    enum: ["She/Her", "He/Him", "They/Them", "Discreet"],
  },
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  secondNationality: {
    type: String,
  },
  applicationDetails: applicationDetailsSchema,
}, {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
});

const Application = model("Application", applicationSchema);

module.exports = Application;
