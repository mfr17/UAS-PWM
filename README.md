# UAS-PWM


Semua data yang ditampilkan merupakan data dari Mikrotik saya yang ada di rumah secara realtime dengan memanfaatkan fitur RestAPI yang ada pada RouterOS v7+.
Data diambil menggunakan JS Vanilla lalu di DOM ke file HTML

Saya menggunakan 2 buah VPS yang mana salah satunya berfungsi sebagai reverse proxy karena RestAPI dari RouterOS v7 terdapat kendapa pada cors maka dari itu saya gunakan reverse proxy, dan salah satu VPS sebagai hosting.

### Goals :
- Create a simple web based Mikrotik management

### Features :
- Login
- View Dashboard
- View IP Address
- View Hotspot Active
- View WiFi Connected
- View PPP
- View PPPoE Active
- View Voucher

### Bug :
- Doesn't have limit for array
- Doesn't have pagination

### Not Implemented :
- Middleware
- User Session

### WIP : 
- Register for Reseller
- Reseller Reports
- Generate/Delete Hotspot Voucher
- Generate/Delete Hotspot Profile
- Generate/Delete PPPoE User
- Generate/Delete PPPoE Profile
- Bind Hotspot User
- Traffic Monitor
- Income Reports (Daily, Weekly, Monthly)
- Saldo for Member
- Saldo for Reseller
- Print Voucher
