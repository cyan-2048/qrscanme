let history = [];
      let scanResult;
      let currentResult;
      let prevResult;
      const html5QrCode = new Html5Qrcode("reader");
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        prevResult = currentResult;
        currentResult = decodedText;
        scanResult = currentResult;
        if (prevResult !== currentResult) {
          history.push(currentResult);
          console.log(history);
        }
        render();
      };
      const config = { fps: 10, qrbox: { width: "auto", height: "auto" } };
      html5QrCode.start(
        { facingMode: "environment" },
        config,
        qrCodeSuccessCallback
      );
      function scanResultRenderer(result) {
        if (view === "scanResult") {
          $(".scan-result").text(result);
          $(".scan-result").addClass("active");
        } else {
          $(".scan-result").removeClass("active");
        }

        if (scanResult && view !== "scanResult") {
          setView("scanResult");
          render();
        } else {
          scanResult = null;
        }
      }