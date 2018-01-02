angular.module('Example', []).controller('TestController', [
    '$scope', '$parse',
    function ($scope,$parse) {
        $scope.list = [
            { name : 'Example 1' , id: "parent1" , comment : false },
            { name : 'Example 2' , id: "parent2" , comment : false },
            { name : 'Example 3' , id: "parent3" , comment : false },
        ];
      	
      
        
      	$scope.addComments =function(item){
			
			$scope.div = document.getElementById(item.id);
			
			$scope.input = document.createElement("textarea");
				
			$scope.button1 = document.createElement("button");
				$scope.button1.innerHTML="Add Comments";
				$scope.button1.onclick = function() { 
				$scope.add(item);
				 
				}
				$scope.input.id="comment" + item.id;
				$scope.input.name = "post";
				$scope.input.maxLength = "50";
				$scope.input.cols = "10";
				$scope.input.rows = "10";
				$scope.div.appendChild($scope.input); //appendChild
				$scope.div.appendChild($scope.button1);
      
	
        };
		
    
        $scope.add = function (item) {
			//console.log("df",document.getElementById("comment" + item.id).value); 
			item.children = (item.children || []);
            var count = item.children.length + 1;
            /* item.children.push({
                name : 'fdsfdsffs',
                id : item.id + 'child' + count
            }) */
			console.log(item.children);
			setTimeout(function(){
				 item.children.push({
                name : document.getElementById("comment" + item.id).value,
                id : item.id + 'child' + count
            })
			$scope.$apply();
			$scope.div.removeChild($scope.input);
			$scope.div.removeChild($scope.button1);
			},100)
			
        };
        $scope.addChildren = function (item) {
        console.log(item);
            item.subChildren = (item.subChildren || []);
            var count = item.subChildren.length + 1;
            item.subChildren.push({
                name : 'subChildren ' + count
            })
        };
        
    }
]);