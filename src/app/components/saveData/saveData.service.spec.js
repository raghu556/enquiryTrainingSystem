(function() {
  'use strict';

  describe('service saveData', function() {
    var saveData;

    beforeEach(module('angular1Proj'));
    beforeEach(inject(function(_saveData_) {
      saveData = _saveData_;
    }));

    it('should be registered', function() {
      expect(saveData).not.toEqual(null);
    });

    describe('getTec function', function() {
      it('should exist', function() {
        expect(saveData.getData).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = saveData.getData();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
