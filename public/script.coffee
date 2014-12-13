s4 = ->
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring 1

app = angular.module('xfair', [])
app.controller "ResumeDropController",[
  '$scope'
  '$timeout'
  '$http'
  ($scope,$timeout,$http) ->
    $scope.worktypes= require "./coffee/worktypes.coffee"
    $scope.citizenships= require "./coffee/citizenships.coffee"
    $scope.universities= require "./coffee/universities.coffee"
    $scope.majors= require "./coffee/majors.coffee"
    $scope.classyears= require "./coffee/classyears.coffee"
    $scope.degrees= require "./coffee/degrees.coffee"
    $scope.industries= require "./coffee/industries.coffee"
    
    $scope.student = {}
    $scope.uploadResume = ->
      filepicker.pick 
        mimetype: 'application/pdf'
      ,(InkBlob)=>
        $timeout =>
          $scope.student.resume = 
            filename: InkBlob.filename
            url: InkBlob.url

    $scope.removeDegree = (idx)=>
      $scope.student.degreeinfos.splice idx,1
      return
    $scope.removeIndustry = (idx)=>    
      $scope.student.industries.splice idx,1
      return
    $scope.addDegree = =>
      $scope.student.degreeinfos?=[]
      $scope.student.degreeinfos.push {_id:s4()}
      return
    $scope.addIndustry = =>    
      $scope.student.industries?=[]
      $scope.student.industries.push {_id:s4()}
      return
    $scope.submit = ->
      r = $http.post '/drop',$scope.student
      r.success ->
        $scope.success = 'dropped'
      r.error ->
        $scope.error = 'error'
]


app.controller "ResumeBrowseController",[
  '$scope'
  '$timeout'
  '$http'
  '$q'
  ($scope,$timeout,$http,$q) ->
    $scope.worktypes= require "./coffee/worktypes.coffee"
    $scope.citizenships= require "./coffee/citizenships.coffee"
    $scope.universities= require "./coffee/universities.coffee"
    $scope.majors= require "./coffee/majors.coffee"
    $scope.classyears= require "./coffee/classyears.coffee"
    $scope.degrees= require "./coffee/degrees.coffee"
    $scope.industries= require "./coffee/industries.coffee"
    
    $scope.worktypes.splice 0,0, 
      label:"ALL"
    $scope.citizenships.splice 0,0, 
      label:"ALL"
    $scope.universities.splice 0,0, 
      label:"ALL"
    $scope.majors.splice 0,0, 
      label:"ALL"
    $scope.classyears.splice 0,0, 
      label:"ALL"
    $scope.degrees.splice 0,0, 
      label:"ALL"
    $scope.industries.splice 0,0, 
      label:"ALL"
        
    r = $http.post '/search',{}
    r.success (results)->
      $scope.items = results
    r.error ->
      $scope.error = 'error'
    
    $scope.showFilter = true
    $scope.filterObj = {}
    
    $scope.clearFilter = (cb=->)->
      $scope.selectedWorktypes = ["ALL"]
      $scope.selectedCitizenships = ["ALL"]
      $scope.selectedUniversities = ["ALL"]
      $scope.selectedMajors = ["ALL"]
      $scope.selectedClassyears = ["ALL"]
      $scope.selectedDegrees = ["ALL"]
      $scope.selectedIndustries = ["ALL"]
      $scope.changeFilter()
      return
    
    $scope.changeFilter = (searchText)->
      $scope.filterObj = (value, index)->
        tw = "ALL" in $scope.selectedWorktypes or true in (val in (value.worktypes or []) for val in $scope.selectedWorktypes)
        tc = "ALL" in $scope.selectedCitizenships or true in (val in (value.citizenships or []) for val in $scope.selectedCitizenships)
        tu = "ALL" in $scope.selectedUniversities or true in (val in (value.universities or []) for val in $scope.selectedUniversities)
        tm = "ALL" in $scope.selectedMajors or true in (val in (value.majors or []) for val in $scope.selectedMajors)
        tcl = "ALL" in $scope.selectedClassyears or true in (val in (value.classyears or []) for val in $scope.selectedClassyears)
        td = "ALL" in $scope.selectedDegrees or true in (val in (value.degrees or []) for val in $scope.selectedDegrees)
        ti = "ALL" in $scope.selectedIndustries or true in (val in (value.industries or []) for val in $scope.selectedIndustries)
        return tw and tc and tu and tm and tcl and td and ti

    $scope.clearFilter()
    
    deferredAddZip = (url, filename, zip) ->
      deferred = $q.defer()
      JSZipUtils.getBinaryContent url, (err, data) ->
        if err
          deferred.reject err
        else
          zip.file filename, data,
            binary: true

          deferred.resolve data
        return

      deferred.promise

    $scope.downloadAll = (students, btn)=>
      if not btn or btn.text=="Downloading..."
        return
      btn.text = "Downloading..."
      if(!JSZip.support.blob)
        window.alert "This functionality only works for recent browser."
        return
      zip = new JSZip()
      deferreds = []
      for student in students
        if student.resume?.url? and student.resume?.filename?
          deferreds.push deferredAddZip student.resume.url,student.email+"-"+student.resume.filename,zip
      $q.all(deferreds).then =>
        $timeout =>
          btn.text = "Download"
        content = zip.generate({type:"blob"})
        saveAs(content, "resume.zip");

]

