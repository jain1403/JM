angular.module('Example', []).controller('TestController', [
    '$scope', '$parse','$timeout',
    function ($scope,$parse,$timeout) {
    	$scope.list = [];
    	$scope.commentsCount=0;
		$scope.initialComment="";
    	$scope.alreadyHaveComment=false;
    	$scope.addComments =function(item){

    		$scope.div = document.getElementById(item.id);
    		for (var i = 0; i < $scope.div.childNodes.length; i++) {
    		    if ($scope.div.childNodes[i].className == "submit-comment") {
    		    	$scope.alreadyHaveComment=true;
    		      break;
    		    }        
    		}

    		if(!$scope.alreadyHaveComment){
    		
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
    		}

    	};


    	$scope.add = function (item) {
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
    		$scope.alreadyHaveComment=false;
    	};
    	$scope.delete = function(data) {
			document.getElementById(data.id).remove();
			/* if(data.children.length == 0){
				$scope.list = $scope.list.filter(function(item) { 
					return item.id !== data.id
				})
			}else{
				data.children = [];
				
			} */
    		  
        };
        $scope.count = 0;
        $scope.addComment=function(){
        	if($scope.initialComment !== ""){
        	$scope.list.push({
        		name : $scope.initialComment,
        		id : 'parent' + $scope.count
        	});
        	$scope.count++;
        	$scope.commentsCount++;
        	$scope.initialComment="";
			}
        }

    }
]);