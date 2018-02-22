angular.module('jgs').controller('main', function($scope, $timeout, alunoService) {

	$scope.lista = [];
	$scope.aula = {};
	$scope.tema = {};
	$scope.turmaSelecionada = {};	 
	$scope.enviado = false;
	$scope.loading = true;

	$scope.turmas = [{"turma" : 701, "diaSemana": "terça-feira"}, {"turma" : 702, "diaSemana": "terça-feira"}, {"turma" : 703, "diaSemana": "terça-feira"}];

	$scope.dia = alunoService.getDia();
	
	$scope.listarAlunos = function(){

   		alunoService.getAlunos().then(function(data){
    		$scope.lista = data;
      });}

   $scope.presenca = function(x){

   		objIndex = $scope.lista.indexOf(x);

   		$scope.lista[objIndex].presenca = !$scope.lista[objIndex].presenca;}

  /* $scope.presencaTodos = function(){
   		for (var i = 0; i < $scope.lista.length; i++) {
   			$scope.lista[i].presenca = true;
   		}}*/

   $scope.faltaTodos = function(){
   		for (var i = 0; i < $scope.lista.length; i++) {
   			$scope.lista[i].presenca = false;
   		}}

   $scope.inverter = function(){

   		for (var i = 0; i < $scope.lista.length; i++) {

   			$scope.lista[i].presenca = !$scope.lista[i].presenca;

   		}}

   
 /* $scope.enviadoBtnOnOff = function(value){

		$scope.enviado = value;

   }*/

  $scope.loadingScreenOnOff = function(value){

		$scope.loading = value;

   }

  $scope.finalizarChamada = function(){

   	 $scope.loadingScreenOnOff(false);

	   $scope.aula = {"dia": $scope.dia, "tema": $scope.tema, "alunos": $scope.lista};

	   $timeout(function(){ $scope.enviadoBtnOnOff(false);  }, 3000);

	   $timeout(function(){ Materialize.toast("Chamada finalizada com sucesso!!!", 4000);  }, 4000);

	   $scope.listarAlunos();

  	  console.log($scope.aula);

  	  $scope.loadingScreenOnOff(true);
   }

   $scope.listarAlunos();
}
);

angular.module('jgs').controller('tema', function($scope, serieService) {

  $scope.series = [];
  $scope.serieSelecionada = {};
	$scope.titulo= {};
	$scope.descricao = {};

  $scope.series = serieService.getSeries();

  $scope.salvarTema = function(){

  }

});
