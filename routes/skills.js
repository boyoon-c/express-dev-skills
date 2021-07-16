import { Router } from 'express'
//import * as skillsDb from '../data/skills-db.js'
const router = Router()
import * as skillsCtrl from "../controllers/skills.js"


export {
  router
}

router.get('/', skillsCtrl.index)
router.get('/:id', skillsCtrl.new)
router.post('/', skillsCtrl.create)
router.get('/:id', skillsCtrl.show)
router.delete('/:id', skillsCtrl.delete)

router.get('/skills', function(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills,
      error
    })
  })
})



