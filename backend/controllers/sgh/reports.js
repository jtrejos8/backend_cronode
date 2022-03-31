const {Op} = require('sequelize');
const group = require('../../models/group');
const Programation = require('../../models').Programation;
const Schedule = require('../../models').Schedule;
const Group = require('../../models').Group;
const User = require('../../models').User;
const Ambient = require('../../models').Ambient;
const Zone = require('../../models').Zone;
const Municipality = require('../../models').Municipality;
const moment = require('moment');
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
module.exports = {
    instructors:{
        get40hours:async function(req, res){
            try {
                let instructors = await User.findAll({
                    where:{
                        rolId:2,
                        contractTypeId:3
                    },
                    include:[{
                        model: require('../../models').Schedule,
                        as:'schedules',
                        required:false,
                        include:[{
                            model: Programation,
                            as:'programation',
                            required:true,
                            where:{
                                isActive: true
                            }
                        }]
                    }]
                });
                let withSchedules = [];
                for (let i = 0; i < instructors.length; i++) {
                    if(instructors[i].schedules.length>0){
                        withSchedules.push(instructors[i]);
                    }
                }
                let withmore40 = [];
                for (let i = 0; i < withSchedules.length; i++) {
                    let hours = 0;
                    for (let j = 0; j < withSchedules[i].schedules.length; j++) {
                        let endDate = moment(withSchedules[i].schedules[j].endDate);
                        let startDate = moment(withSchedules[i].schedules[j].startDate);
                        endDate.subtract(startDate.hours(), 'hours');
                        endDate.subtract(startDate.minutes(), 'minutes');
                        hours+=(endDate.hours()*60+endDate.minutes())/60;
                    }
                    console.log(hours);
                    if(hours>40){
                        withmore40.push(withSchedules[i]);
                    }
                }
                return res.json({instructors: withmore40});
            } catch (error) {
                console.log(error);
            }
        },
        get32hours:async function(req, res){
            try {
                let instructors = await User.findAll({
                    where:{
                        rolId:2,
                        contractTypeId:2
                    },
                    include:[{
                        model: require('../../models').Schedule,
                        as:'schedules',
                        required:false,
                        include:[{
                            model: Programation,
                            as:'programation',
                            required:true,
                            where:{
                                isActive: true
                            }
                        }]
                    }]
                });
                let withSchedules = [];
                for (let i = 0; i < instructors.length; i++) {
                    if(instructors[i].schedules.length>0){
                        withSchedules.push(instructors[i]);
                    }
                }
                let withmore32 = [];
                for (let i = 0; i < withSchedules.length; i++) {
                    let hours = 0;
                    for (let j = 0; j < withSchedules[i].schedules.length; j++) {
                        let endDate = moment(withSchedules[i].schedules[j].endDate);
                        let startDate = moment(withSchedules[i].schedules[j].startDate);
                        endDate.subtract(startDate.hours(), 'hours');
                        endDate.subtract(startDate.minutes(), 'minutes');
                        hours+=(endDate.hours()*60+endDate.minutes())/60;
                    }
                    console.log(hours);
                    if(hours>32){
                        withmore32.push(withSchedules[i]);
                    }
                }
                return res.json({instructors: withmore32});
            } catch (error) {
                console.log(error);
            }
        },
        getArtMedia:async function(req, res){
            try {
                let groups = await Group.findAll({
                    where:{
                        modalityId:6
                    },
                    include:[{
                        model:Programation,
                        as:'programation',
                        required:true,
                        where:{
                            isActive:true
                        },
                        include:[{
                            model: require('../../models').Schedule,
                            as:'schedule',
                            required:true,
                            include:['constantUser']
                        }]
                    }]
                });
                let instructorsIds = [];
                for (let i = 0; i < groups.length; i++) {
                    for (let j = 0; j < groups[i].programation.length; j++) {
                        for (let k = 0; k < groups[i].programation[j].schedule.length; k++) {
                            if(groups[i].programation[j].schedule[k].constantUserId){
                                instructorsIds.push(groups[i].programation[j].schedule[k].constantUserId);
                            }
                        }
                    }
                }
                let unique = instructorsIds.filter(onlyUnique);
                let instructors = [];
                for (let i = 0; i < unique.length; i++) {
                    let instructor = await User.findByPk(unique[i]);
                    instructors.push(instructor);
                }
                return res.json({instructors});
            } catch (error) {
                console.log(error);
            }
        },
        getPerContract: async function(req, res){
            try {
                let users = await User.findAll({
                    where:{
                        contractTypeId: 3
                    },
                    include:[{
                        model: require('../../models').Contract,
                        required:true,
                        as:'contract',
                        where:{
                            endDate: {
                                [Op.between]: [req.body.startDate, req.body.endDate]
                            }
                        }
                    }]
                });
                return res.json({users});
            } catch (error) {
                console.log(error);
                return res.json({error});
            }
        },
        getPerZone:async function(req, res){
            try {
                let zone = await Zone.findOne({
                    where:{
                        id: req.params.id
                    },
                    include:[{
                        model:User,
                        as:'users',
                        required:false,
                        attributes:['id', 'username', 'misena_email', 'document', 'phone']
                    }]
                });
                return res.json({zone});
            } catch (error) {
                console.log(error);
                return res.json({error});
            }
        },
        getPerContractType: async function(req, res){
            try {
                let users = await User.findAll({
                    where:{
                        contractTypeId:req.params.id
                    },
                    attributes:['id', 'username', 'misena_email', 'document', 'phone']
                });
                return res.json({users});
            } catch (error) {
                console.log(error);
                return res.json({error});
            }
        },
        getMunicipality:async function(req, res){
           try {
               let zones = await Zone.findAll({
                   where:{
                       id:{
                           [Op.ne]:7
                       }
                   },
                   include:['users']
               });
               let users = [];
               for (let i = 0; i < zones.length; i++) {
                   for (let j = 0; j < zones[i].users.length; j++) {
                       users.push(zones[i].users[j]);
                   }
               }
               return res.json({users});
           } catch (error) {
               console.log(error);
           } 
        }
    },
    groups:{
        getPerDay:async function(req, res){
            try {
                let groups = await Group.findAll({
                    include:[{
                        model: Programation,
                        as:'programation',
                        where:{
                            isActive:true
                        }
                    }]
                });
                return res.json({groups});
            } catch (error) {
                console.log(error);
            }
        },
        getPerPractice: async function(req, res){
            try {
                let groups = await Group.findAll({
                    where:{
                        practiceStartDate: {
                            [Op.gte]: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
                        }
                    }
                });
                return res.json({groups});
            } catch (error) {
                console.log(error);
                return res.json(error);
            }
        },
        getPerFirstTrimester: async function(req, res){
            try {
                let groups = await Group.findAll({
                    include:[{
                        model: Programation,
                        required:true,
                        as:'programation',
                        where:{
                            trimester: 1,
                            isActive: true
                        }
                    }]
                });
                return res.json({groups});
            } catch (error) {
                console.log(error);
                res.json(error);
            }
        },
        getPerModality: async function(req, res){
            try {
                let groups = await Group.findAll({
                    where:{
                        modalityId: req.params.id
                    }
                });
                return res.json({groups});
            } catch (error) {
                console.log(error);
                return res.status(500).json({error});
            }
        },
        getManagers: async function(req, res){
            try {
                let managers = await User.findAll({
                    include:[{
                        model: Group,
                        as: 'group',
                        required: true
                    }]
                });
                return res.json({managers});
            } catch (error) {
                console.log(error);
                return res.json({error});
            }
        },
        getElectiveLast: async function(req, res){
            try {
                let groups = await Group.findAll({
                    include:[{
                        model:require('../../models').FormationProgram,
                        as:'formationProgram',
                        required:true,
                        include:[{
                            model:require('../../models').FormationProgramType,
                            as:'formationType',
                            required:true
                        }]
                    }]
                });
                let gr = [];
                groups.forEach(group => {
                    gr.push({groupId: group.id, electiveMonth:group.formationProgram.formationType.electiveMonths});
                });
                const eg = [];
                for (let i = 0; i < gr.length; i++) {
                    let programation = await Programation.findOne({
                        where:{
                            groupId: gr[i].groupId,
                            trimester: gr[i].electiveMonth,
                            isActive: true
                        }
                    });
                    if(programation){
                        let group = await Group.findByPk(programation.groupId);
                        eg.push(group);
                    }
                }
                return res.json({groups: eg});
            } catch (error) {
                console.log(error);
                return res.json({error});
            }
        }
    },
    ambients:{
        getHourUsedInWeek:async function(req, res){
            try {
                let ambient = await Ambient.findByPk(req.params.ambientId);
                let schedules = await Schedule.findAll({
                    where:{
                        ambientId: req.params.ambientId
                    },
                    include:[{
                        model: Programation, 
                        as:'programation',
                        required: true,
                        where:{
                            isActive: true
                        }
                    }]
                });
                let hours = 0;
                for (let i = 0; i < schedules.length; i++) {
                    let startdate = moment(schedules[i].startDate);
                    let enddate = moment(schedules[i].endDate);
                    let sdm = (startdate.hours()*60) + startdate.minutes();
                    let edm = (enddate.hours()*60) + enddate.minutes();
                    hours+= (edm-sdm)/60;
                }
                return res.json({ambient, hours});
            } catch (error) {
                console.log(error);
            }
        },
        getFreeByHours: async function(req, res){
            try {
                const {sd, ed, day} = req.body;
                startDate = moment(sd);
                endDate = moment(ed);

                console.log(startDate.calendar());

                let schedules = await Schedule.findAll({
                    where:{
                        day: day
                    },
                    include:['ambient']
                });
                let ambients = await Ambient.findAll();
                let schedulesAmbients = [];
                for (let i = 0; i < schedules.length; i++) {
                    if(!schedulesAmbients.includes(schedules[i].ambientId)){
                        schedulesAmbients.push(schedules[i].ambientId);
                    }
                }
                let freeAmbients = [];
                for (let i = 0; i < ambients.length; i++) {
                    if(!schedulesAmbients.includes(ambients[i].id)){
                        freeAmbients.push(ambients[i]);
                    }
                }
                let isFree = true;
                for (let i = 0; i < schedules.length; i++) {
                    let sd = moment(schedules[i].startDate);
                    let ed = moment(schedules[i].endDate);
                    let sdm = (moment(schedules[i].startDate).hours()*60)+moment(schedules[i].startDate).minutes();
                    let edm = (moment(schedules[i].endDate).hours()*60)+moment(schedules[i].endDate).minutes();
                    let rsdm = (startDate.hours()*60) + startDate.minutes();
                    let redm = (endDate.hours()*60) + endDate.minutes();
                    if(rsdm >= sdm && redm <= edm){
                        console.log(`1. ${sdm}:${edm} - ${rsdm}:${redm}`);
                        isFree = false;
                    }
                    if(rsdm < sdm && (redm >= sdm && redm < edm)){
                        console.log(`2. ${sdm}:${edm} - ${rsdm}:${redm}`);
                        isFree = false;
                    }
                    if(redm>edm && (rsdm<edm && rsdm >= sdm )){
                        console.log(`3. ${sdm}:${edm} - ${rsdm}:${redm}`);
                        isFree = false;
                    }

                    if(isFree){
                        let exists = freeAmbients.filter(ambient => ambient.id == schedules[i].ambientId).length == 0 ? false : true;
                        if(!exists){
                            freeAmbients.unshift(schedules[i].ambient)
                        }
                    }else{
                        for (let j = 0; j < freeAmbients.length; j++) {
                            if(freeAmbients[j].id == schedules[i].ambientId){
                                freeAmbients.splice(j, 1);
                            }
                        }
                    }
                }
                return res.json({freeAmbients});
            } catch (error) {
                console.log(error);
            }
        }
    }
}