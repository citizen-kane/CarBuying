var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res) {
    res.render('new', { title: 'Express' });
});

router.get('/makes', function(req, res) {

    var makes = [];
    /*require the ibm_db module*/
    var ibmdb = require('ibm_db');

    console.log("Test program to access DB2 sample database");

    /*Connect to the database server
  param 1: The DSN string which has the details of database name to connect to, user id, password, hostname, portnumber 
  param 2: The Callback function to execute when connection attempt to the specified database is completed
*/
    ibmdb.open("DRIVER={DB2};DATABASE=team5;UID=db2inst1;PWD=db2inst1;HOSTNAME=152.1.26.119;port=50000", function(err, conn) {
        if (err) {
            /*
	  On error in connection, log the error message on console 
	*/
            console.log("am I here?");
            console.error("error: ", err.message);
        } else {

            /*
		On successful connection issue the SQL query by calling the query() function on Database
		param 1: The SQL query to be issued
		param 2: The callback function to execute when the database server responds
	*/
            conn.query("select DISTINCT(MAKE) from CAR_INFO", function(err, carInfo, moreResultSets) {


                /*
    			Loop through the carInfo list returned from the select query and print the Make and Model of the employee	
    		*/
                for (var i = 0; i < carInfo.length; i++) {
                    makes.push(carInfo[i].MAKE);
                }
                console.log("-----------------------");


                /*
    			Close the connection to the database
    			param 1: The callback function to execute on completion of close function.
    		*/
                conn.close(function() {
                    console.log("Connection Closed");
                });

                res.send({ makes_list: makes });
            });
        }
    });


});

router.get('/years', function (req, res) {
    
    var years = [];
    /*require the ibm_db module*/
    var ibmdb = require('ibm_db');
    
    console.log("Test program to access DB2 sample database");
    
    /*Connect to the database server
  param 1: The DSN string which has the details of database name to connect to, user id, password, hostname, portnumber 
  param 2: The Callback function to execute when connection attempt to the specified database is completed
*/
    ibmdb.open("DRIVER={DB2};DATABASE=team5;UID=db2inst1;PWD=db2inst1;HOSTNAME=152.1.26.119;port=50000", function (err, conn) {
        if (err) {
            /*
	  On error in connection, log the error message on console 
	*/
            console.log("am I here?");
            console.error("error: ", err.message);
        } else {
            
            /*
		On successful connection issue the SQL query by calling the query() function on Database
		param 1: The SQL query to be issued
		param 2: The callback function to execute when the database server responds
	*/
            conn.query("select DISTINCT(YEAR) from CAR_INFO ORDER BY YEAR desc", function (err, carInfo, moreResultSets) {
                
                
                /*
    			Loop through the carInfo list returned from the select query and print the Make and Model of the employee	
    		*/
                for (var i = 0; i < carInfo.length; i++) {
                    years.push(carInfo[i].YEAR);
                }
                console.log("-----------------------");
                
                
                /*
    			Close the connection to the database
    			param 1: The callback function to execute on completion of close function.
    		*/
                conn.close(function () {
                    console.log("Connection Closed");
                });
                
                res.send({ years_list: years });
            });
        }
    });


});

router.get('/models', function(req, res) {

    var make = req.query.make;
    var models = [];
    /*require the ibm_db module*/
    var ibmdb = require('ibm_db');

    console.log("Test program to access DB2 sample database");

    /*Connect to the database server
  param 1: The DSN string which has the details of database name to connect to, user id, password, hostname, portnumber 
  param 2: The Callback function to execute when connection attempt to the specified database is completed
*/
    ibmdb.open("DRIVER={DB2};DATABASE=team5;UID=db2inst1;PWD=db2inst1;HOSTNAME=152.1.26.119;port=50000", function(err, conn) {
        if (err) {
            /*
	  On error in connection, log the error message on console 
	*/
            console.log("am I here?");
            console.error("error: ", err.message);
        } else {

            /*
		On successful connection issue the SQL query by calling the query() function on Database
		param 1: The SQL query to be issued
		param 2: The callback function to execute when the database server responds
	*/
            conn.query("select DISTINCT(MODEL) from CAR_INFO where MAKE='" + make + "'", function(err, carInfo, moreResultSets) {


                /*
    			Loop through the carInfo list returned from the select query and print the Make and Model of the employee	
    		*/
                for (var i = 0; i < carInfo.length; i++) {
                    models.push(carInfo[i].MODEL);
                }
                console.log("-----------------------");


                /*
    			Close the connection to the database
    			param 1: The callback function to execute on completion of close function.
    		*/
                conn.close(function() {
                    console.log("Connection Closed");
                });

                res.send({ models_list: models });
            });
        }
    });


});


router.get('/yearsbymake', function(req, res) {

    var make = req.query.make;
    var years = [];
    /*require the ibm_db module*/
    var ibmdb = require('ibm_db');

    console.log("Test program to access DB2 sample database");

    /*Connect to the database server
  param 1: The DSN string which has the details of database name to connect to, user id, password, hostname, portnumber 
  param 2: The Callback function to execute when connection attempt to the specified database is completed
*/
    ibmdb.open("DRIVER={DB2};DATABASE=team5;UID=db2inst1;PWD=db2inst1;HOSTNAME=152.1.26.119;port=50000", function(err, conn) {
        if (err) {
            /*
	  On error in connection, log the error message on console 
	*/
            console.log("am I here?");
            console.error("error: ", err.message);
        } else {

            /*
		On successful connection issue the SQL query by calling the query() function on Database
		param 1: The SQL query to be issued
		param 2: The callback function to execute when the database server responds
	*/
            conn.query("select DISTINCT(YEAR) from CAR_INFO where MAKE='" + make + "'", function(err, carInfo, moreResultSets) {


                /*
    			Loop through the carInfo list returned from the select query and print the Make and Model of the employee	
    		*/
                for (var i = 0; i < carInfo.length; i++) {
                    years.push(carInfo[i].YEAR);
                }
                console.log("-----------------------");


                /*
    			Close the connection to the database
    			param 1: The callback function to execute on completion of close function.
    		*/
                conn.close(function() {
                    console.log("Connection Closed");
                });

                res.send({ years_list: years });
            });
        }
    });


});


router.get('/yearsbymodel', function(req, res) {

    var model = req.query.model;
    var years = [];
    /*require the ibm_db module*/
    var ibmdb = require('ibm_db');

    console.log("Test program to access DB2 sample database");

    /*Connect to the database server
  param 1: The DSN string which has the details of database name to connect to, user id, password, hostname, portnumber 
  param 2: The Callback function to execute when connection attempt to the specified database is completed
*/
    ibmdb.open("DRIVER={DB2};DATABASE=team5;UID=db2inst1;PWD=db2inst1;HOSTNAME=152.1.26.119;port=50000", function(err, conn) {
        if (err) {
            /*
	  On error in connection, log the error message on console 
	*/
            console.log("am I here?");
            console.error("error: ", err.message);
        } else {

            /*
		On successful connection issue the SQL query by calling the query() function on Database
		param 1: The SQL query to be issued
		param 2: The callback function to execute when the database server responds
	*/
            conn.query("select DISTINCT(YEAR) from CAR_INFO where MODEL='" + model + "'", function(err, carInfo, moreResultSets) {


                /*
    			Loop through the carInfo list returned from the select query and print the Make and Model of the employee	
    		*/
                for (var i = 0; i < carInfo.length; i++) {
                    years.push(carInfo[i].YEAR);
                }
                console.log("-----------------------");


                /*
    			Close the connection to the database
    			param 1: The callback function to execute on completion of close function.
    		*/
                conn.close(function() {
                    console.log("Connection Closed");
                });

                res.send({ years_list: years });
            });
        }
    });


});


router.get('/search/suggest', function(req, res) {
    
    
    var pricemin = req.query.pricemin;
    var pricemax = req.query.pricemax;
    var typesArr = [];
    if (req.query.types != undefined) {
        temp = req.query.types.split(".");
        typesArr = req.query.types.split(".");
        for (var i = 0; i < temp.length; i++) {
            temp[i] = "'" + temp[i] + "'";
        }
        var types = temp.join(",");
    }
    var cars = [];
    /*require the ibm_db module*/
    var ibmdb = require('ibm_db');

    console.log("Test program to access DB2 sample database");

    /*Connect to the database server
  param 1: The DSN string which has the details of database name to connect to, user id, password, hostname, portnumber 
  param 2: The Callback function to execute when connection attempt to the specified database is completed
*/
    ibmdb.open("DRIVER={DB2};DATABASE=team5;UID=db2inst1;PWD=db2inst1;HOSTNAME=152.1.26.119;port=50000", function(err, conn) {
        if (err) {
            /*
	  On error in connection, log the error message on console 
	*/
            console.log("am I here?");
            console.error("error: ", err.message);
        } else {

            /*
		On successful connection issue the SQL query by calling the query() function on Database
		param 1: The SQL query to be issued
		param 2: The callback function to execute when the database server responds
	*/
            var qTypes = "";
            if (req.query.types != undefined) {
                qTypes = " and CAR_INFO.TYPE IN (" + types + ")";
            }
            var q = "select * from CAR_INFO INNER JOIN OBJ_FEATURES ON CAR_INFO.CAR_ID = OBJ_FEATURES.CAR_ID INNER JOIN SUB_FEATURES ON CAR_INFO.CAR_ID = SUB_FEATURES.CAR_ID  where OBJ_FEATURES.PRICE >" + pricemin + " and OBJ_FEATURES.PRICE <" + pricemax + qTypes;
            conn.query(q, function(err, carInfo, moreResultSets) {


                /*
    			Loop through the carInfo list returned from the select query and print the Make and Model of the employee	
    		*/
                for (var i = 0; i < carInfo.length; i++) {
                    cars.push({ make: carInfo[i].MAKE, model: carInfo[i].MODEL, year: carInfo[i].YEAR, image: carInfo[i].IMG_THUMBNAIL_LINK, price: carInfo[i].PRICE, transmission: carInfo[i].DT_TRANSMISSION, drivetype: carInfo[i].DT_DRIVE_TYPE, mileage: carInfo[i].FUEL_EPA_MILEAGE_EST, score: {fuelefficient: carInfo[i].FUELEFFICIENT, trunk: carInfo[i].TRUNK, outdoor: carInfo[i].OUTDOOR, family: carInfo[i].FAMILY, appearance: (carInfo[i].LUXAPPEARANCE + carInfo[i].APPEARANCE)/2.0, sound: carInfo[i].SOUND, infocenter: carInfo[i].INFOCENTER, reliable: (carInfo[i].WINTER + carInfo[i].RELIABLE)/2.0, comfort: (carInfo[i].CABINROOMY + carInfo[i].COMFSEATS + carInfo[i].SMOOTH)/3.0, power: carInfo[i].POWER, value: carInfo[i].VALUE, usersatisfaction: carInfo[i].USERSATISFACTION} });
                }
                console.log("-----------------------");


                /*
    			Close the connection to the database
    			param 1: The callback function to execute on completion of close function.
    		*/
                conn.close(function() {
                    console.log("Connection Closed");
                });

                var model = { cars_list: cars, prev_filters: { suggest: { pricemin: pricemin, pricemax: pricemax, types: typesArr } } };
                
                res.render('search', model);

            });
        }
    });


});


router.get('/search/know', function(req, res) {

    var makes = req.query.makes;
    var temp = req.query.makes.split(".");
    var makesArr = req.query.makes.split(".");
    for (var i = 0; i < temp.length; i++) {
        temp[i] = "'" + temp[i] + "'";
    }
    makes = temp.join(",");
    
    var modelsArr = [];
    if (req.query.models != undefined) {
        temp = req.query.models.split(".");
        modelsArr = req.query.models.split(".");
        for (var i = 0; i < temp.length; i++) {
            temp[i] = "'" + temp[i] + "'";
        }
        var models = temp.join(",");
    }
    
    var yearsArr = [];
    if (req.query.years != undefined) {
        temp = req.query.years.split(".");
        yearsArr = req.query.years.split(".");
        for (var i = 0; i < temp.length; i++) {
            temp[i] = "'" + temp[i] + "'";
        }
        var years = temp.join(",");
    }


    var cars = [];
    /*require the ibm_db module*/
    var ibmdb = require('ibm_db');

    console.log("Test program to access DB2 sample database");

    /*Connect to the database server
  param 1: The DSN string which has the details of database name to connect to, user id, password, hostname, portnumber 
  param 2: The Callback function to execute when connection attempt to the specified database is completed
*/
    ibmdb.open("DRIVER={DB2};DATABASE=team5;UID=db2inst1;PWD=db2inst1;HOSTNAME=152.1.26.119;port=50000", function(err, conn) {
        if (err) {
            /*
	  On error in connection, log the error message on console 
	*/
            console.log("am I here?");
            console.error("error: ", err.message);
        } else {

            /*
		On successful connection issue the SQL query by calling the query() function on Database
		param 1: The SQL query to be issued
		param 2: The callback function to execute when the database server responds
	*/
            var qModels = "";
            if (req.query.models != undefined) {
                qModels = " and CAR_INFO.MODEL IN (" + models + ")";
            }

            var qYears = "";
            if (req.query.years != undefined) {
                qYears = " and CAR_INFO.YEAR IN (" + years + ")";
            }


            var q = "select * from CAR_INFO INNER JOIN OBJ_FEATURES ON CAR_INFO.CAR_ID = OBJ_FEATURES.CAR_ID INNER JOIN SUB_FEATURES ON CAR_INFO.CAR_ID = SUB_FEATURES.CAR_ID where MAKE IN (" + makes + ")" + qModels + qYears;
            conn.query(q, function(err, carInfo, moreResultSets) {


                /*
    			Loop through the carInfo list returned from the select query and print the Make and Model of the employee	
    		*/
                for (var i = 0; i < carInfo.length; i++) {
                    cars.push({ make: carInfo[i].MAKE, model: carInfo[i].MODEL, year: carInfo[i].YEAR, image: carInfo[i].IMG_THUMBNAIL_LINK, price: carInfo[i].PRICE, transmission: carInfo[i].DT_TRANSMISSION, drivetype: carInfo[i].DT_DRIVE_TYPE, mileage: carInfo[i].FUEL_EPA_MILEAGE_EST, score: { fuelefficient: carInfo[i].FUELEFFICIENT, trunk: carInfo[i].TRUNK, outdoor: carInfo[i].OUTDOOR, family: carInfo[i].FAMILY, appearance:(carInfo[i].LUXAPPEARANCE + carInfo[i].APPEARANCE) / 2.0, sound: carInfo[i].SOUND, infocenter: carInfo[i].INFOCENTER, reliable:(carInfo[i].WINTER + carInfo[i].RELIABLE) / 2.0, comfort: (carInfo[i].CABINROOMY + carInfo[i].COMFSEATS + carInfo[i].SMOOTH) / 3.0, power: carInfo[i].POWER, value: carInfo[i].VALUE, usersatisfaction: carInfo[i].USERSATISFACTION} });
                }
                console.log("-----------------------");


                /*
    			Close the connection to the database
    			param 1: The callback function to execute on completion of close function.
    		*/
                conn.close(function() {
                    console.log("Connection Closed");
                });

                var model = { cars_list: cars, prev_filters: { suggest : "undefined", know: {makes: makesArr, models:modelsArr, years: yearsArr} } };
                
                res.render('search', model);

            });
        }
    });


});

module.exports = router;