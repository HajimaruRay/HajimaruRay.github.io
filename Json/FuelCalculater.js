let calculationData = {};

function fuelcal(){
    var fuelPrice = document.getElementById("fuelPrice").value;
    var priceAmount = document.getElementById("priceAmount").value;
    var literAmount = document.getElementById("literAmount").value;
    var kmPerliter = "";
    fuelPrice = parseFloat(fuelPrice, 10);
    priceAmount = parseFloat(priceAmount, 10);

    if (document.getElementById("selector").value === 'Km/L') {
        kmPerliter = parseFloat(document.getElementById("kmPerliter").value);
    } else {
        kmPerliter = 100 / parseFloat(document.getElementById("kmPerliter").value);
    }

    console.log(kmPerliter, document.getElementById("selector").value);

    if ((!isNaN(fuelPrice) && !isNaN(priceAmount) && !isNaN(kmPerliter))){ // Have FuelPrice, PriceAmount, ConsumptionRate 
        kmPerliter = parseFloat(kmPerliter, 10);
        var calculateLiterpriceAmount = priceAmount/fuelPrice;
        var calculationDistance = calculateLiterpriceAmount*kmPerliter;
        document.getElementById("result").innerText = "ราคาน้ำมัน " + fuelPrice + " บาท/ลิตร\nราคาที่ต้องการเติม " + priceAmount + " บาท\nจะเติมได้ทั้งหมด " + calculateLiterpriceAmount.toFixed(3) + " ลิตร\nจะได้ระยะทางทั้งหมด " + calculationDistance.toFixed(3) + " กิโลเมตร";
    } else if (!isNaN(fuelPrice) && !isNaN(priceAmount)){ // Have FuelPrice, PriceAmount
        kmPerliter = 0;
        var calculateLiterpriceAmount = priceAmount/fuelPrice;
        document.getElementById("result").innerText = "ราคาน้ำมัน " + fuelPrice + " บาท/ลิตร\nราคาที่ต้องการเติม " + priceAmount + " บาท\nจะเติมได้ทั้งหมด " + calculateLiterpriceAmount.toFixed(3) + " ลิตร";
    } else if (!isNaN(fuelPrice) && !isNaN(literAmount) && !isNaN(kmPerliter)){ // Have FuelPrice, liter Want to fill, ConsumptionRate
        var calculationPriceNeeded = literAmount*fuelPrice;
        document.getElementById("result").innerText = "ราคาน้ำมัน " + fuelPrice + " บาท/ลิตร\nจำนวนลิตรที่ต้องการเติม " + literAmount + " ลิตร\nจะต้องเติมเป็นจำนวนเงิน " + calculationPriceNeeded.toFixed(3) + " บาท\nจะได้ระยะทางทั้งหมด " + calculationDistance.toFixed(3) + " กิโลเมตร";
    } else if (!isNaN(fuelPrice) && !isNaN(literAmount)){ // Have FuelPrice, liter Want to fill
        kmPerliter = 0;
        var calculationPriceNeeded = literAmount*fuelPrice;
        var calculationDistance = calculationPriceNeeded*kmPerliter;
        document.getElementById("result").innerText = "ราคาน้ำมัน " + fuelPrice + " บาท/ลิตร\nจำนวนลิตรที่ต้องการเติม " + literAmount + " ลิตร\nจะต้องเติมเป็นจำนวนเงิน " + calculationPriceNeeded.toFixed(3) + " บาท";
    } else {
        document.getElementById("result").innerText = "Invalid input";
    }

    calculationData = {
        fuelPrice: fuelPrice,
        priceAmount: priceAmount,
        literAmount: literAmount,
        kmPerliter: kmPerliter,
        calculateLiterpriceAmount: calculateLiterpriceAmount,
        distance: kmPerliter > 0 ? calculateLiterpriceAmount * kmPerliter : null
    };
}

function clearInputs() {
    document.getElementById("fuelPrice").value = '';
    document.getElementById("priceAmount").value = '';
    document.getElementById("literAmount").value = '';
    document.getElementById("kmPerliter").value = '';
    document.getElementById("result").innerText = "";
}

function downloadExcel() {
    if(isNaN(calculationData.fuelPrice) && isNaN(calculationData.priceAmount)){
        document.getElementById("result").innerText="Please insert data first."
    }else{
        var data = [
            ['Fuel Price', 'priceAmount', 'literAmount', 'KM per Liter', 'Total Liters', 'Total Distance'],
            [calculationData.fuelPrice,
                calculationData.priceAmount,
                calculationData.literAmount,
                calculationData.kmPerliter || 'N/A',
                calculationData.calculateLiterpriceAmount.toFixed(2),
                calculationData.distance ? calculationData.distance.toFixed(2) : 'N/A']
        ];
        // สร้าง worksheet จากข้อมูล
        var ws = XLSX.utils.aoa_to_sheet(data);
    
        // สร้าง workbook และเพิ่ม worksheet ที่เราสร้างขึ้น
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Calculation');
    
        // สร้างไฟล์ Excel และเริ่มต้นการดาวน์โหลด
        XLSX.writeFile(wb, 'fuel_calculation.xlsx');
    }
}

function selectAmount() {

    document.getElementById("result").innerText = "";

    if (document.getElementsByClassName("amountSelector")[0].value === 'priceAmount') {
        document.getElementById("priceAmount").style.display = 'inline-block';
        document.getElementById("priceAmountText").style.display = 'inline-block';
        document.getElementById("literAmount").style.display = 'none';
        document.getElementById("literAmount").value = '';
        document.getElementById("literAmountText").style.display = 'none';
    } else {
        document.getElementById("priceAmount").style.display = 'none';
        document.getElementById("priceAmount").value = '';
        document.getElementById("priceAmountText").style.display = 'none';
        document.getElementById("literAmount").style.display = 'inline-block';
        document.getElementById("literAmountText").style.display = 'inline-block';
    }
}

window.addEventListener("load", function() {

    try {
        if (sessionStorage.getItem('isLogin') === 'false' || sessionStorage.getItem('isLogin') === null) {
            console.log("Not logged in. Redirecting to index.html...");
            window.location.href = "/index.html";
        } else {
            console.log("User is logged in.");
        }
    } catch (error) {
        console.error("Error accessing sessionStorage. Redirecting to index.html.");
        window.location.href = "/index.html";
    } finally{
        document.getElementById("priceAmount").style.display = 'inline-block';
        document.getElementById("priceAmountText").style.display = 'inline-block';
        document.getElementById("literAmount").style.display = 'none';
        document.getElementById("literAmountText").style.display = 'none';
    }
});