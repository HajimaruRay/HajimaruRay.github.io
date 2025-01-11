let calculationData = {};

function fuelcal(){
    var fuelPrice = document.getElementById("fuelPrice").value;
    var amount = document.getElementById("amount").value;
    var kmPerliter = "";
    fuelPrice = parseFloat(fuelPrice, 10);
    amount = parseFloat(amount, 10);

    if (document.getElementById("selector").value === 'Km/L') {
        kmPerliter = parseFloat(document.getElementById("kmPerliter").value);
    } else {
        kmPerliter = 100 / parseFloat(document.getElementById("kmPerliter").value);
    }

    console.log(kmPerliter, document.getElementById("selector").value);



    if((!isNaN(fuelPrice) && !isNaN(amount)) && (kmPerliter == "" || isNaN(kmPerliter))){
        kmPerliter = 0;
        var calculateLiterAmount = amount/fuelPrice;
        document.getElementById("result").innerText = "ราคาน้ำมัน " + fuelPrice + " บาท/ลิตร\nราคาที่ต้องการเติม " + amount + " บาท\nจะเติมได้ทั้งหมด " + calculateLiterAmount.toFixed(2) + " ลิตร";
    }
    else if((!isNaN(fuelPrice) && !isNaN(amount))){
        kmPerliter = parseFloat(kmPerliter, 10);
        var calculateLiterAmount = amount/fuelPrice;
        var distance = calculateLiterAmount*kmPerliter;
        document.getElementById("result").innerText = "ราคาน้ำมัน " + fuelPrice + " บาท/ลิตร\nราคาที่ต้องการเติม " + amount + " บาท\nจะเติมได้ทั้งหมด " + calculateLiterAmount.toFixed(2) + " ลิตร\nจะได้ระยะทางทั้งหมด " + distance.toFixed(2) + " กิโลเมตร";
    }
    else{
        document.getElementById("result").innerText = "Invalid input";
    }
    console.log(typeof("fuelPrice = " + fuelPrice));
    console.log(typeof("amount = " + amount));
    console.log(typeof("kmPerliter = " + kmPerliter));

    calculationData = {
        fuelPrice: fuelPrice,
        amount: amount,
        kmPerliter: kmPerliter,
        calculateLiterAmount: calculateLiterAmount,
        distance: kmPerliter > 0 ? calculateLiterAmount * kmPerliter : null
    };
}

function clearInputs() {
    document.getElementById("fuelPrice").value = '';
    document.getElementById("amount").value = '';
    document.getElementById("kmPerliter").value = '';
    document.getElementById("result").innerText = "";
}

function downloadExcel() {
    if(isNaN(calculationData.fuelPrice) && isNaN(calculationData.amount)){
        document.getElementById("result").innerText="Please insert data first."
    }else{
        var data = [
            ['Fuel Price', 'Amount', 'KM per Liter', 'Total Liters', 'Total Distance'],
            [calculationData.fuelPrice,
                calculationData.amount,
                calculationData.kmPerliter || 'N/A',
                calculationData.calculateLiterAmount.toFixed(2),
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

window.onload = function() {
    try {
        // Check if the user is logged in by accessing sessionStorage
        if (sessionStorage.getItem('isLogin') === 'false' || sessionStorage.getItem('isLogin') === null) {
            console.log("Not logged in. Redirecting to index.html...");
            window.location.href = "/index.html"; // Adjust the path as needed
        } else {
            console.log("User is logged in.");
        }
    } catch (error) {
        // Handle any errors accessing sessionStorage (e.g., if it's unavailable)
        console.error("Error accessing sessionStorage. Redirecting to index.html.");
        window.location.href = "/index.html"; // Redirect to login page
    }
};