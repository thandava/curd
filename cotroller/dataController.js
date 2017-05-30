var  datacontrol = function(db){
var get = function(req,res){
	db.query("select * from account" ,function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send(result);
		}
	});
};

 var add = function(req,res){
	 db.query("insert into account values(?,?,?)",[req.body.id,req.body.name,req.body.bal],function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send("sucessfully Inserted the Record");
		}

	 });
 };

 var getById = function(req,res){
	 db.query("select * from account where accno = ?",[req.params.id],function(err,result){
		if(err){
			res.send(err);
		}
		else{
			console.log('Entered in getById');
			res.send(result);
		}
	 });
 };

 var updateById = function(req,res){
	 db.query("update account set name=? where accno=?",[req.body.name,req.body.id],function(err,result){
		 if(err){
			 res.send(err);
		 }
		 else{
			 res.send(result);
		 }
	 });
 };

var delt = function(req,res){
	db.query("delete from account where accno = ?",[req.body.id],function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send("Record Deleted");
		}
	});
};
return {
	add:add,
	get:get,
	getById:getById,
	updateById:updateById,
	delt:delt
}
};
//module.exports=get;
//module.exports.get=get;
/*module.exports ={
	add:add,
	get:get,
	getById:getById,
	updateById:updateById,
	delt:delt
};*/
module.exports = datacontrol;
