angular.module('Example', []).controller('TestController', [
    '$scope', '$parse','$timeout',
    function ($scope,$parse,$timeout) {
    	$scope.list = [
    	               { name : 'At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.', id: "parent1" , comment : false },
    	               { name : 'At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.' , id: "parent2" , comment : false },
    	               { name : 'At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.' , id: "parent3" , comment : false },
    	               ];



    	$scope.addComments =function(item){

    		$scope.div = document.getElementById(item.id);

    		$scope.input = document.createElement("textarea");

    		$scope.submitComment = document.createElement("button");
    		$scope.submitComment.innerHTML="Add Comments";
    		$scope.submitComment.className="submit-comment";
    		
    		$scope.submitComment.onclick = function() { 
    			$scope.add(item);

    		}
    		$scope.input.id="comment" + item.id;
    		$scope.input.className = "text-area";
    		$scope.input.cols = "70";
    		$scope.input.rows = "6";
    		$scope.div.appendChild($scope.input); //appendChild
    		$scope.div.appendChild($scope.submitComment);


    	};


    	$scope.add = function (item) {
    		console.log("df",item); 
    		item.children = (item.children || []);
    		var count = item.children.length + 1;
    		console.log(item.children);
    		$timeout(function(){
    			item.children.push({
    				name : document.getElementById("comment" + item.id).value,
    				id : item.id + 'child' + count
    			})
    			$scope.div.removeChild($scope.input);
    			$scope.div.removeChild($scope.submitComment);
    			console.log(item.children);
    		},100)
    		
    		

    	};

    }
]);