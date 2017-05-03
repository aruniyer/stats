TwoSampleTesting = {
    TTest: function (x, y, callback) {
        ocpu.seturl("//public.opencpu.org/ocpu/library/stats/R")
        var result = "";
        var req = ocpu.call("t.test", { x: x, y: y }, function (session) {
            session.getConsole(callback(outtxt));
        });

        req.fail(function () {
            console.log("OCPU request for t-test failed!");
        });
    }
}