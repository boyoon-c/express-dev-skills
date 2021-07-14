import * as skillsDb from "../data/skills-db.js"

export {
	index,
    show
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