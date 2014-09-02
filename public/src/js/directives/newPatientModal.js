angular.module('newPatientModal',[]).directive('newPatientModal', function(PatientsService, Patient){
	return {
 		restrict: 'A',
        scope: { //isolates scope from parent
            modalVisible: '=', //2 way binding, both parent and directive can change state causing the modal to hide/show
            confirm: '&' //access to parent scope function
            newPatient: {}
        },
        //replace: true, 
        //transclude: true, 
        link: function(scope, element, attrs) {
            /*scope.hideModal = function() {
            scope.show = false;
        	};
            */
           //scope.newPatient.fname = '';
        
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
                //scope.confirm(); //calls parent function
                //$scope.patient.fname = newPatient.fname;
                //$scope.patient.sname = newPatient.sname;
                //$scope.patient.post();      
                PatientsService.createPatient({fname: 'z',sname:'w'});          
           }
           
     	},
        controller: function(){

        },
		templateUrl: 'views/patients/newPatientModal.html',
	}
})
