// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @patch

  This code is automatically generated and will be over-written. Do not edit directly.
*/
SC.Patch.create( /** @scope XM.Incident.prototype */ { 
  
  target: 'XM.Incident',

  body: {
  
    /**
      @type XM.IncidentVendor
    */
    vendors: SC.Record.toMany('XM.IncidentVendor', {
      isNested: true,
      inverse: 'source'
    })

  }

});
