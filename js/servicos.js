angular.module('jgs').service('alunoService', function($http) {

    this.getDia = function () {

    	let dia = new Date();

        return dia.getDate()+"/"+(dia.getMonth()+1)+"/"+dia.getFullYear();

    }

    this.getAlunos = function () {

        return $http.get('./json/alunos.json').then(function(data){

        	return data.data;
        	
        });    
    }    
});

angular.module('jgs').service('serieService', function($http) {

    this.getSeries = function () {

        return $http.get('./json/series.json').then(function(data){

            return data.data;
            
        });    
    }    
});


