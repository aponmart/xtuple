// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.CharacteristicAssignment
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._CharacteristicAssignment = {
  /** @scope XM.CharacteristicAssignment.prototype */
  
  className: 'XM.CharacteristicAssignment',

  

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": true,
      "read": true,
      "update": false,
      "delete": false
    }
  },

  //..................................................
  // ATTRIBUTES
  //
  
  /**
    @type Number
  */
  guid: SC.Record.attr(Number),

  /**
    @type String
  */
  targetType: SC.Record.attr(String),

  /**
    @type XM.Characteristic
  */
  target: SC.Record.toOne('XM.Characteristic'),

  /**
    @type Number
  */
  characteristic: SC.Record.attr(Number),

  /**
    @type String
  */
  value: SC.Record.attr(String)

};
