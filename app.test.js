describe('raceResults',function(){
    it('should return an object ranking each medal winner and grouping the rest in an array',function(){
        let raceArr=['Mark','Brandon','Johns','Is','Coding'];
        expect(raceResults(raceArr)).toEqual({gold:'Mark',silver:'Brandon',bronze:'Johns',rest:['Is','Coding']});
    })
})