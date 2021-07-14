import * as skillsDb from "../data/skills-db.js"

export {
	index,
  show, 
  newSkills as new,
  create
}

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills,
      error,
    })
  })
}

function show(req, res) {
    skillsDb.findById(req.params.id, function(error, skills) {
      res.render('skills/show', {
        skills,
        error
      })
    })
  }

function newSkills(req,res){
  res.render('skills/new')
}

function create(req,res){
  console.log(req.body)
  skillsDb.create(req.body, function(error, skill){
    res.redirect('/skills')
  })
}