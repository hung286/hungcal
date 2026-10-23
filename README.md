# HUNG-CAL — BỘ MÁY TÍNH KHOA HỌC VÀ BẢNG VẼ SƯ PHẠM

**Tác giả & Sáng lập dự án:** Thầy Hùng (NMH) — Chuyên gia Giáo dục & Toán học  
**Thương hiệu:** HUNG-CAL (Hệ sinh thái HUNG MATH)  
**Phiên bản:** Single Page Application (SPA) Độc lập — Hỗ trợ PWA Ngoại tuyến (Offline-First)

---

## 🌟 GIỚI THIỆU TỔNG QUAN

**HUNG-CAL** là ứng dụng web giáo dục cao cấp tích hợp đồng bộ giữa **Máy tính khoa học cầm tay giả lập** và **Bảng vẽ sư phạm tương tác đa năng**, cùng hệ thống **15 phân nhóm/module chuyên sâu** dành cho chương trình Toán THPT (lớp 10, 11, 12) và Toán Đại học (Đại số tuyến tính, Giải tích, Xác suất thống kê, Lý thuyết số).

Ứng dụng sở hữu giao diện tối (**Dark Mode**) hiện đại, chuẩn sư phạm, tốc độ phản hồi tức thì với WebAssembly & WebGL/Three.js 3D.

---

## 📋 DANH SÁCH 15 PHÂN NHÓM / MODULE CHUYÊN SÂU

1. **MÁY TÍNH CẦM TAY GIẢ LẬP (CASIO fx-580VN X & fx-880BTG):**
   - Mô phỏng chính xác 100% giao diện, màn hình Natural-V.P.A.M. 4 thang xám, bàn phím tương tác trực quan.
   - Tính toán chính xác tuyệt đối: phân số, căn thức, hằng số $\pi, e$, số phức, BigInt nguyên lớn không giới hạn.
   - Nút **"Chèn vào bảng"** tự động chuyển phép tính & đáp số sang công thức toán KaTeX chuẩn mực.

2. **BẢNG VIẾT & VẼ TAY (Inkable Board):**
   - Bộ công cụ vẽ sư phạm đa năng: Bút bi, Bút mực thanh đậm, Bút thư pháp vát $45^\circ$, Bút lông nghệ thuật, Bút dạ quang highlight.
   - Nhận diện nét vẽ hình học thông minh, tự động chuyển nét khuất thành nét đứt đối với hình không gian.
   - Kéo thả chèn tài liệu PDF, file Word (.docx), hình ảnh; xuất bảng vẽ chuẩn nét cao PNG, JSON.

3. **ĐỒ THỊ & BẢNG GIÁ TRỊ (Graph & Table):**
   - Khảo sát và vẽ đồng thời nhiều hàm số: đa thức, hữu tỉ, lượng giác, mũ, logarit.
   - Tự động dò tìm nghiệm, điểm cực đại/cực tiểu, điểm uốn và tọa độ giao điểm.
   - Lập bảng giá trị $f(x), g(x)$ với bước nhảy tùy chỉnh kèm đồ thị trực quan.

4. **PHƯƠNG TRÌNH & HỆ PHƯƠNG TRÌNH (Equation):**
   - Giải phương trình đa thức bậc 2, bậc 3, bậc 4 theo công thức nghiệm Cardano/Ferrari chính xác.
   - Giải hệ phương trình tuyến tính từ 2 đến 4 ẩn, hệ đối xứng, hệ phương trình vô tỉ.
   - Trình bày toàn bộ các bước biến đổi chi tiết phục vụ giảng dạy.

5. **BẤT PHƯƠNG TRÌNH & MIỀN NGHIỆM (Inequality & LP):**
   - Giải bất phương trình đa thức, phân thức hữu tỉ, căn thức, hàm mũ và logarit.
   - Bất phương trình lượng giác giải nghiệm đúng theo chu kỳ $k2\pi, k\pi$.
   - Trực quan hóa miền nghiệm trên trục số thực và hệ trục tọa độ 2D.

6. **ĐẠI SỐ TUYẾN TÍNH & MA TRẬN (Matrix & Linear Algebra):**
   - Bộ tính toán ma trận đa kênh (MatA đến MatF) kích thước lên tới $4 \times 4$ và $n \times n$.
   - Thuật toán khử Gauss-Jordan từng bước chi tiết, tìm hạng (rank), vết (trace).
   - Tính định thức chính xác (det), ma trận nghịch đảo ($A^{-1}$), tìm đa thức đặc trưng, trị riêng và vectơ riêng.

7. **KHẢO SÁT HÀM SỐ & GIẢI TÍCH (Calculus & Study):**
   - Tự động lập bảng biến thiên hoàn chỉnh (TXĐ, nghiệm đạo hàm, dấu $y'$, chiều biến thiên, tiệm cận ngang/đứng/xiên, GTLN-GTNN).
   - Tính tích phân từng bước với phương pháp đổi biến số và tích phân từng phần.
   - Mô phỏng tổng tích phân Riemann trực quan với các hình chữ nhật xấp xỉ.

8. **HÌNH HỌC KHÔNG GIAN & THẾ GIỚI OXYZ:**
   - Xử lý tọa độ không gian 3 chiều: điểm, véctơ, phương trình mặt phẳng, đường thẳng và mặt cầu.
   - Không gian 3D tương tác xoay/thu phóng thời gian thực (WebGL/Three.js).
   - Tự động sinh hình vẽ chuẩn sách giáo khoa với quy ước nét liền / nét đứt ẩn.

9. **DIỆN TÍCH & KHỐI TRÒN XOAY (Solid of Revolution):**
   - Tính diện tích hình phẳng giới hạn bởi các đường cong.
   - Tính thể tích khối tròn xoay quanh trục $Ox$, $Oy$ hoặc trục bất kỳ $y = d, x = c$.
   - Mô phỏng cắt lát thiết diện $S(x)$, thư viện vật thể thực tế (bình hoa, chi tiết máy) và ứng dụng định lý Pappus-Guldinus.

10. **TỔ HỢP, XÁC SUẤT & PHÂN PHỐI (Probability & Stats):**
    - Tính toán hoán vị $P_n$, chỉnh hợp $A_n^k$, tổ hợp $C_n^k$, khai triển nhị thức Newton.
    - Mô phỏng thực nghiệm 3D (bốc bi xác suất có hoàn lại / không hoàn lại).
    - Biểu đồ phân phối chuẩn (Normal Distribution), nhị thức (Binomial), Poisson và phân tích thống kê mẫu ghép nhóm THPT mới.

11. **SỐ HỌC & LÝ THUYẾT SỐ (Number Theory):**
    - Xử lý số nguyên lớn BigInt hàng trăm chữ số không suy hao độ chính xác.
    - Thuật toán phân tích thừa số nguyên tố Pollard-Rho, kiểm tra nguyên tố Miller-Rabin.
    - Tính hàm phi Euler $\varphi(n)$, giải phương trình đồng dư tuyến tính, Diophantine và phương trình Pell.

12. **SỐ PHỨC & VECTƠ (Complex & Vector):**
    - Chuyển đổi linh hoạt giữa dạng đại số ($a+bi$), dạng lượng giác ($r(\cos\varphi + i\sin\varphi)$) và dạng mũ ($r e^{i\varphi}$).
    - Tính lũy thừa De Moivre, khai căn bậc $n$ của số phức.
    - Biểu diễn hình học trên mặt phẳng Argand; tính tích vô hướng, tích có hướng véctơ 2D & 3D.

13. **TRẢI HÌNH & GẤP KHỐI 3D (Unfold & Solids):**
    - Trải lưới phẳng không chồng lấn cho khối đa diện đều, lăng trụ, chóp, hình nón, hình trụ.
    - Hoạt cảnh gấp/mở không gian 3D mượt mà.
    - Cắt lát thiết diện tương tác đa hướng cho các khối đa diện.

14. **BẤT BIẾN THPT & GIAO/BIẾN HÌNH:**
    - Hệ thống định lý tâm tỉ cự, quỹ tích đường tròn Apollonius, tích phân đối xứng King's property.
    - Thực thi các phép biến hình: phép tịnh tiến, phép quay, phép vị tự, phép đối xứng trục/tâm trong không gian 2D và 3D.

15. **SỔ TAY TOÁN HỌC & BÁCH KHOA HÌNH HỌC:**
    - Tra cứu hơn 1100+ công thức Toán học THPT và đại cương (Đại số, Lượng giác, Giải tích, Hình học Oxyz, Xác suất).
    - Bách khoa toàn thư trực quan với 40 hình phẳng và khối xoay 3D mẫu kèm công thức diện tích, thể tích chi tiết.

---

## 🚀 HƯỚNG DẪN KHỞI CHẠY

### Cách 1: Khởi chạy nhanh bằng File Batch (Khuyên dùng trên Windows)
1. Nhấp đúp vào tệp: **`start_hung_cal.bat`**
2. Ứng dụng sẽ tự động chọn môi trường sẵn có (Node.js hoặc Python) để khởi động máy chủ cục bộ và tự động mở trình duyệt tại địa chỉ `http://localhost:8080`.

### Cách 2: Khởi chạy bằng dòng lệnh
Mở Terminal / PowerShell tại thư mục này và gõ một trong các lệnh sau:
- **Với Node.js:**
  ```bash
  npx serve . -p 8080
  ```
- **Với Python:**
  ```bash
  python -m http.server 8080
  ```
Sau đó truy cập: [http://localhost:8080](http://localhost:8080) trên bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Firefox, Safari).

---

## 🛠️ CẤU TRÚC DỰ ÁN

```
c:\Users\Admin\Desktop\coppy\
├── index.html                  # Giao diện SPA chính của HUNG-CAL
├── realmath.html               # Mô phỏng toán thực tế 3D độc lập
├── manifest.webmanifest        # Cấu hình PWA cài đặt ứng dụng
├── sw.js                       # Service Worker hỗ trợ chạy Offline
├── start_hung_cal.bat          # File khởi chạy 1-click tiện lợi
├── README.md                   # Tài liệu hướng dẫn sử dụng và cấu trúc
├── assets/                     # Bộ mã nguồn JS module hóa, WASM, CSS & Fonts KaTeX
│   ├── main-QrBuoGVf.js        # Module điều khiển ứng dụng chính HUNG-CAL
│   ├── mtbt_core-DB4u7Cfa.wasm # Nhân tính toán WASM hiệu năng cao
│   ├── ink-DTl8XHud.js         # Module bảng vẽ tay sư phạm (Inkable)
│   ├── solids-C24TzALm.js      # Module cắt lát & ghép khối 3D
│   ├── oxyz-BKIGzft8.js        # Module không gian Oxyz 3D
│   ├── numtheory-DtGe4Pl1.js   # Module số học & lý thuyết số BigInt
│   └── ...
├── mathjax/                    # Thư viện kết xuất toán học SVG cục bộ
└── icons/ & images/            # Bộ biểu tượng ứng dụng và hình ảnh
```

---
*Bản quyền & Phát triển bởi **Thầy Hùng (NMH)** — Dành tặng cộng đồng giáo viên và học sinh Việt Nam.*
