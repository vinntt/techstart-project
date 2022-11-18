const express = require('express');
const moment = require('moment');
const Application = require("../models/Application");

const router = express.Router();

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

// Create or udpate a couch.
router.post('/', (req, res, next) => {
    const {
        pronoun,
        name,
        dateOfBirth,
        email,
        nationality,
        secondNationality,
        applicationDetails,
    } = req.body;

    if (!pronoun || pronoun.trim() === "") {
        res.status(400).json({ errorMessage: "Pronoun is required" })
        return
    }

    if (!name || name.trim() === "") {
        res.status(400).json({ errorMessage: "Name is required" })
        return
    }

    if (!dateOfBirth || dateOfBirth.trim() === "") {
        res.status(400).json({ errorMessage: "Date of Birth is required" })
        return
    } else if (!moment(dateOfBirth, "YYYY-MM-DD").isValid()) {
        res.status(400).json({ errorMessage: "Date of Birth is invalid" })
        return
    }

    if (!email || email.trim() === "") {
        res.status(400).json({ errorMessage: "Email is required" })
        return
    } else if (!emailRegex.test(email)) {
        res.status(400).json({ errorMessage: 'Email address is invalid' });
        return;
    }

    if (!nationality || nationality.trim() === "") {
        res.status(400).json({ errorMessage: "Nationality is required" })
        return
    }

    if (!applicationDetails) {
        res.status(400).json({ errorMessage: "Application Details is required" })
        return
    } else if (typeof applicationDetails !== "object" || Array.isArray(applicationDetails)) {
        res.status(400).json({ errorMessage: "Application Details is invalid" })
        return
    }

    if (!applicationDetails.workPermit) {
        res.status(400).json({ errorMessage: "Does application have a work permit" })
        return
    }

    if (!applicationDetails.locatedInBerlin) {
        res.status(400).json({ errorMessage: "Is applicant in Berlin" })
        return
    }

    if (!applicationDetails.studyTrack) {
        res.status(400).json({ errorMessage: "Study Track is required" })
        return
    }

    const {
        workPermit,
        locatedInBerlin,
        relocateToBerlin,
        studyTrack,
        reasonToChooseStudyTrack,
        industryExperience,
        goals,
        howToSupport,
        thinkAboutCODE,
        typicalWeekActivities,
        personalityDescribe,
        timeToAttendCourse,
        timeToAttendEvent,
    } = applicationDetails;

    const application = {
        pronoun: pronoun.trim(),
        name: name.trim(),
        dateOfBirth: dateOfBirth.trim(),
        email: email.trim(),
        nationality: nationality.trim(),
        secondNationality,
        applicationDetails: {
            workPermit,
            locatedInBerlin,
            relocateToBerlin,
            studyTrack,
            reasonToChooseStudyTrack,
            industryExperience,
            goals,
            howToSupport,
            thinkAboutCODE,
            typicalWeekActivities,
            personalityDescribe,
            timeToAttendCourse,
            timeToAttendEvent,
        },
    };

    Application.create(application)
        .then(application => {
            const {
                _id,
                pronoun,
                name,
                dateOfBirth,
                email,
                nationality,
                secondNationality,
                applicationDetails,
            } = application

            const {
                workPermit,
                locatedInBerlin,
                relocateToBerlin,
                studyTrack,
                reasonToChooseStudyTrack,
                industryExperience,
                goals,
                howToSupport,
                thinkAboutCODE,
                typicalWeekActivities,
                personalityDescribe,
                timeToAttendCourse,
                timeToAttendEvent,
            } = applicationDetails;

            res.status(200).json({
                id: _id,
                pronoun,
                name,
                dateOfBirth: moment(dateOfBirth).format("YYYY-MM-DD"),
                email,
                nationality,
                secondNationality,
                applicationDetails: {
                    workPermit,
                    locatedInBerlin,
                    relocateToBerlin,
                    studyTrack,
                    reasonToChooseStudyTrack,
                    industryExperience,
                    goals,
                    howToSupport,
                    thinkAboutCODE,
                    typicalWeekActivities,
                    personalityDescribe,
                    timeToAttendCourse,
                    timeToAttendEvent,
                },
            })
        })
        .catch(err => {
            if (err.code && err.code === 11000) {
                res.status(409).json({errorMessage: 'You already applied'})
            }

            next(err)
        });
})

module.exports = router;