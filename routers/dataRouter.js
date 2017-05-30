var express = require('express');
var db=require('./../model/dataModel');
var dataController = require('./../cotroller/dataController')(db);
var someRouter = express.Router();

someRouter.route('')
	.get(dataController.get)
	.post(dataController.add);
someRouter.route('/:id')
	.get(dataController.getById)
	.put(dataController.updateById)
	.patch(dataController.delt);
module.exports=someRouter;
