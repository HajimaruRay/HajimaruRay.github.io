function fuelcal(){
    var fuelPrice = document.getElementById("fuelPrice").value;
    var amount = document.getElementById("amount").value;
    var kmPerliter = document.getElementById("kmPerliter").value;
    fuelPrice = parseFloat(fuelPrice, 10);
    amount = parseFloat(amount, 10);

    if((!isNaN(fuelPrice) && !isNaN(amount)) && kmPerliter == "" || isNaN(kmPerliter)){
        kmPerliter = 0;
        var calculateLiterAmount = amount/fuelPrice;
        document.getElementById("result").innerText = "ราคาน้ำมัน " + fuelPrice + " บาท/ลิตร\nราคาที่ต้องการเติม " + amount + " บาท\nจะเติมได้ทั้งหมด " + calculateLiterAmount.toFixed(2) + " ลิตร";
        //downloadExcel(fuelPrice, amount, kmPerliter, calculateLiterAmount, length);
    }
    else if((!isNaN(fuelPrice) && !isNaN(amount))){
        kmPerliter = parseFloat(kmPerliter, 10);
        var calculateLiterAmount = amount/fuelPrice;
        var distance = calculateLiterAmount*kmPerliter;
        document.getElementById("result").innerText = "ราคาน้ำมัน " + fuelPrice + " บาท/ลิตร\nราคาที่ต้องการเติม " + amount + " บาท\nจะเติมได้ทั้งหมด " + calculateLiterAmount.toFixed(2) + " ลิตร\nจะได้ระยะทางทั้งหมด " + distance.toFixed(2) + " กิโลเมตร";
        //downloadExcel(fuelPrice, amount, kmPerliter, calculateLiterAmount, length);
    }
    else{
        document.getElementById("result").innerText = "Invalid input";
    }
    console.log(typeof("fuelPrice = " + fuelPrice));
    console.log(typeof("amount = " + amount));
    console.log(typeof("kmPerliter = " + kmPerliter));
}

function downloadExcel(fuelPrice, amount, kmPerliter, calculateLiterAmount, length){
    var data = [
        ['Fuel Price', 'Amount', 'KM per Liter', 'Total Liters', 'Total Distance'],
        [fuelPrice, amount, kmPerliter, calculateLiterAmount.toFixed(2), length.toFixed(2)]
    ];

    // สร้าง worksheet จากข้อมูล
    var ws = XLSX.utils.aoa_to_sheet(data);

    // สร้าง workbook และเพิ่ม worksheet ที่เราสร้างขึ้น
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Calculation');

    // สร้างไฟล์ Excel และเริ่มต้นการดาวน์โหลด
    XLSX.writeFile(wb, 'fuel_calculation.xlsx');
}