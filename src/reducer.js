const INITIAL_STATE = { 
    posts: [{
        image: "./derp.png",
        timestamp: "2020-01-01T00:00:00.0000Z",
        name: "Blarg",
        text: "Test asdfasdf asdf asdf asdf asdf  asd fasdfasdf adf SDF ADSF ASDF ADF ADF ASDF ASDF ADF     DSFSADFADSFADSF ADFSF ADSF asdfasdf adsf ad sfa sd adsf adf adsf dsfadsf SDF AD FA DSF ASDF DSF ADSF A SDFADFS   ASDF ASDF ASDF   ASFDF SDAF ADF ASDF ASDF ASDF ADF ASDF ASD FAS DF ADF SAD F ASDF FAD  AD DFS"
    }, {
        image: "./derp.png",
        timestamp: "2020-02-02T00:00:00.0000Z",
        name: "Flerg",
        text: "Test Again fasdf asdf asdf asdf asdf  asd fasdfasdf adf SDF ADSF ASDF ADF ADF ASDF ASDF ADF     DSFSADFADSFADSF ADFSF ADSF asdfasdf adsf ad sfa sd adsf adf adsf dsfadsf SDF AD FA DSF ASDF DSF ADSF A SDFADFS   ASDF ASDF ASDF   ASFDF SDAF ADF ASDF ASDF ASDF ADF ASDF ASD FAS DF ADF SAD F ASDF FAD  AD D"
    }]
}

module.exports = function reduce(state = INITIAL_STATE, action) {
    return state
}