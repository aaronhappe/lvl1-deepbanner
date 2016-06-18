var app = angular.module('instructApp',[]);
app.controller('instructCtrl',function($scope) {
  //VARIABLE DEFINITIONS
  $scope.projectType = 0;
  $scope.codepenId = "";
  $scope.trelloLink = "";
  $scope.monLink = "";
  $scope.previewLink = "";
  $scope.passoffLink = "";
  $scope.showEmail = false;
  $scope.showStg = false;
  $scope.showMon = false;
  $scope.showHP = false;
  $scope.showMonInput = false;
  $scope.showPenIDInput = true;
  $scope.showTrelloInput = true;
  $scope.showCreateButton = true;
  $scope.whichBrand = {};
  $scope.brands = {
    famous: {
      name: "Famous",
      id: 1,
      website: "www.famousfootwear.com"
    },
    naturalizer: {
      name: "Naturalizer",
      id: 2,
      website: "www.naturalizer.com"
    },
    francosarto: {
      name: "Franco Sarto",
      id: 3,
      website: "www.francosarto.com"
    },
    ryka: {
      name: "Ryka",
      id: 4,
      website: "www.ryka.com"
    },
    carlos: {
      name: "Carlos",
      id: 5,
      website: "www.carlosshoes.com"
    },
    scholls: {
      name: "Dr. Scholl's",
      id: 6,
      website: "www.drschollsshoes.com"
    },
    fergie: {
      name: "Fergie",
      id: 7,
      website: "www.fergieshoes.com"
    },
    lifestride: {
      name: "Life Stride",
      id: 8,
      website: "www.lifestride.com"
    },
    viaspiga: {
      name: "Via Spiga",
      id: 9,
      website: "www.viaspiga.com"
    }
  };
  $scope.hpBrands = {
    famous: {
      name: "Fergie",
      id: 1,
      website: "wwww.fergieshoes.com",
      codepen: "http://codepen.io/team/bwswebdev/pen/aZmBNg"
    },
    naturalizer: {
      name: "Carlos",
      id: 2,
      website: "www.carlosshoes.com",
      codepen: ""
    },
    francosarto: {
      name: "Life Stride",
      id: 3,
      website: "www.lifestride.com",
      codepen: ""
    },
  };
  
  //LOGIC TO SET WHICH DELIVERABLE IS SELECTED
  $scope.setProject = function(selection) {
    $scope.projectType = selection;
    if(selection === 3) {
      $scope.showMonInput = true;
      $scope.showPenIDInput = false;
    } else if(selection === 4) {
      $scope.showMonInput = false;
      $scope.showPenIDInput = false;
      $scope.showTrelloInput = false;
      $scope.showCreateButton = false;
    } else {
      $scope.showMonInput = false;
      $scope.showPenIDInput = true;
    }
  };
  
  //FUNCTION TO SWAP WHICH DELIVERABLE IS SHOWN
  //CALLED IN showInstructions FUNCTION
  $scope.showWhich = function(selection) {
    if (selection===1) {
      $scope.showEmail = true;
      $scope.showStg = false;
      $scope.showMon = false;
      $scope.showHP = false;
    } else if (selection===2) {
      $scope.showEmail = false;
      $scope.showStg = true;
      $scope.showMon = false;
      $scope.showHP = false;
    } else if (selection===3) {
      $scope.showEmail = false;
      $scope.showStg = false;
      $scope.showMon = true;
      $scope.showHP = false;
    } else if (selection===4) {
      $scope.showEmail = false;
      $scope.showStg = false;
      $scope.showMon = false;
      $scope.showHP = true;
    }
  };
  
  //LOGIC FOR SELECTING WHICH BRAND DELIVERABLE IS FOR
  $scope.selectBrand = function(brand) {
    $scope.whichBrand = brand;
  }
  
  //LOGIC FOR 'CREATE' BUTTON
  $scope.showInstructions = function(pType,id) {
    /*if(typeof(codepenId) === 'undefined' && pType!==3) {
      alert("You did not enter a Codepen ID");
      return;
    }*/
    switch (pType) {
      case 1:
        $scope.previewLink = "http://www.codepen.io/bwswebdev/debug/" + id;
        $scope.passoffLink = "http://www.codepen.io/bwswebdev/pen/" + id + "?editors=1000";
        $scope.showWhich(pType);
        break;
        case 2:
        $scope.previewLink = "http://stg." + $scope.whichBrand.website + "/en-US/Content/Dev_Asset_Previewer.aspx?codepenid=" + id + "&locationid=header";
        if($scope.whichBrand.id === 6) {
          $scope.previewLink = $scope.previewLink.replace('header','fixed-header');
        }
        if($scope.whichBrand.id === 9) {
          $scope.previewLink = $scope.previewLink.replace('header','tippyTopBanner');
        }
        $scope.passoffLink = "http://www.codepen.io/bwswebdev/pen/" + id + "?editors=1000";
        $scope.showWhich(pType);
        break;
      case 3:
        $scope.showWhich(pType);
        break;
        case 4:
        $scope.showWhich(pType);
        break;
    }
  };
  
}); //END CONTROLLER

//DEFINITION OF DELIVERABLES
app.directive("emailInstructions", function() {
  return {
    template : "<p><br>\
---<br>\
<br>\
Hi there,<br>\
<br>\
We are finished building your development asset!<br>\
<br>\
Your development asset preview can be found here:<br>\
<br>\
{{previewLink}}<br>\
<br>\
Your development asset can be found here:<br>\
<br>\
{{passoffLink}}<br>\
<br>\
If you have any concerns about this development asset, please contact glabarre@caleres.com.<br>\
<br>\
Project reference link:<br>\
<br>\
{{trelloLink}}<br>\
<br>\
Thank you!<br>\
<br>\
- Your Web Development Team<br>\
<br>\
---<p>"
  };
});
app.directive("stgbannerInstructions", function() {
  return {
    template : "<p><br>\
---<br>\
<br>\
Hi there,<br>\
<br>\
We are finished building your development asset!<br>\
<br>\
Your development asset preview can be found here:<br>\
<br>\
{{previewLink}}<br>\
<br>\
Your development asset can be found here:<br>\
<br>\
{{passoffLink}}<br>\
<br>\
Your development asset can be promoted here:<br>\
<br>\
{urlAdmin}<br>\
<br>\
If you have any concerns about this development asset, please contact glabarre@caleres.com.<br>\
<br>\
Project reference link:<br>\
<br>\
{{trelloLink}}<br>\
<br>\
Thank you!<br>\
<br>\
- Your Web Development Team<br>\
<br>\
---<p>"
  }
});
app.directive("monetateInstructions", function() {
  return {
    template : "<p><br>\
---<br>\
<br>\
Hi there,<br>\
<br>\
We are finished building your development asset!<br>\
<br>\
Your development asset can be found here:<br>\
<br>\
{{monLink}}<br>\
<br>\
If you have any concerns about this development asset, please contact glabarre@caleres.com.<br>\
<br>\
Project reference link:<br>\
<br>\
{{trelloLink}}<br>\
<br>\
Thank you!<br>\
<br>\
- Your Web Development Team<br>\
<br>\
---</p>"
  }
});
app.directive("hpForm", function() {
  return {
    template : "<p>Getting Somewhere, ok? <p>"
  }
});
