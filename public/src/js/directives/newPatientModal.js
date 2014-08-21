angular.module('newPatientModal',[]).directive('newPatientModal', function(PatientsService){
	return {
 		restrict: 'A',
        scope: {
            modalVisible: '=',
           // corfirm: '&'
        },
        //replace: true, 
        //transclude: true, 
        link: function(scope, element, attrs) {
            /*scope.hideModal = function() {
            scope.show = false;
        	};
            */
        
            scope.showModal = function(visible){
                if(visible){
                    element.modal('show');
                }else{
                    element.modal('hide');
                }
            }

            //if modalVisible attribute exists
            if(!attrs.modalVisible){
                scope.showModal

            }else{
                //watch changes to modal-visible attr
                scope.$watch("modalVisible", function(newVal, oldVal){
                    scope.showModal(newVal);
                })

                //update modalVisible from Modal actions
                element.bind("hide.bs.modal", function(){
                    scope.modalVisible = false;
                    if(!scope.$$phase && !scope.$root.$$phase)
                        scope.$apply();
                })

            }

           
                      
           scope.save = function(){
                console.log('dfsg');
           }
           
     	},
		templateUrl: 'views/patients/newPatientModal.html',
	}
})
