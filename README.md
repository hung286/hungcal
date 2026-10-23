# HUNG-CAL — BỘ MÁY TÍNH KHOA HỌC VÀ BẢNG VẼ SƯ PHẠM

**Tác giả & Sáng lập dự án:** Thầy Hùng (NMH) — Chuyên gia Giáo dục & Toán học  
**Thương hiệu:** HUNG-CAL (Hệ sinh thái HUNG MATH)  
**Phiên bản:** Single Page Application (SPA) Độc lập — Hỗ trợ PWA Ngoại tuyến (Offline-First)

---

## 🌟 GIỚI THIỆU TỔNG QUAN

**HUNG-CAL** là ứng dụng web giáo dục cao cấp tích hợp đồng bộ giữa **Máy tính khoa học cầm tay giả lập** và **Bảng vẽ sư phạm tương tác đa năng**, cùng hệ thống **15 phân nhóm/module chuyên sâu** dành cho chương trình Toán THPT (lớp 10, 11, 12) và Toán Đại học (Đại số tuyến tính, Giải tích, Xác suất thống kê, Lý thuyết số).

Ứng dụng sở hữu giao diện tối (**Dark Mode**) hiện đại, chuẩn sư phạm, tốc độ phản hồi tức thì với WebAssembly & WebGL/Three.js 3D.

---

## 📟 ĐIỀU CHỈNH CHUẨN XÁC THEO 2 MÁY TÍNH EMULATOR CHÍNH HÃNG

Hệ thống giả lập máy tính trong HUNG-CAL được tinh chỉnh chuẩn xác theo 2 bản Emulator:
1. **CASIO fx-580VN X Emulator (ClassWiz · Natural-V.P.A.M.):**
   - Vỏ máy vân Carbon ClassWiz đặc trưng kết hợp viền vát 3D.
   - Màn hình LCD ma trận điểm ánh xanh - xám (`#cad8ba` / `#b8c9a6`) chuẩn xác màn hình phần cứng.
   - Bàn phím vuông vát cạnh: Phím số trắng nổi bật, phím DEL/AC xanh dương, phím hàm than chì, nhãn phụ SHIFT vàng kim và ALPHA hồng cánh sen.
   - Cụm phím điều hướng REPLAY kim loại xước tròn xoay truyền thống.
   - Phím tính toán kết quả dấu `=` chuẩn xác.

2. **CASIO fx-880BTG Emulator (ClassWiz II · 4-Gradation Display · BITEX):**
   - Vỏ máy hợp kim xanh Slate Navy bo tròn công thái học thế hệ mới.
   - Màn hình **4-Gradation Display**: Nền trắng ngà / xám bạc độ tương phản cao (`#f8fafc` / `#e2e8f0`), ký tự đen tuyền siêu sắc nét.
   - Bàn phím dạng **phím tròn pebble** (`border-radius: 999px`) đặc trưng của dòng 880BTG.
   - Cụm phím điều hướng có phím **OK** riêng biệt tại tâm vòng xoay để xác nhận / thực thi.
   - Phím thực thi kết quả **EXE** chuyên biệt (thay cho dấu `=`).
   - Đầy đủ hệ thống phím chức năng thế hệ mới: **HOME**, **SETTINGS**, **BACK**, **CATALOG**, **VARIABLE**, **FUNCTION**, **TOOLS**, **FORMAT**.

---

## 📋 DANH SÁCH 15 PHÂN NHÓM / MODULE CHUYÊN SÂU

1. **MÁY TÍNH CẦM TAY GIẢ LẬP (CASIO fx-580VN X & fx-880BTG):**
   - Mô phỏng chính xác giao diện, màn hình Natural-V.P.A.M. & 4-Gradation, chuyển đổi 1-click giữa 580VN X và 880BTG.
   - Tính toán chính xác tuyệt đối: Phân số, căn thức, hằng số $\pi, e$, số phức, BigInt nguyên lớn không giới hạn.
   - Nút **"Chèn vào bảng"** tự động chuyển phép tính & đáp số sang công thức toán KaTeX chuẩn mực.

2. **BẢNG VIẾT & VẼ TAY (Inkable Board):**
   - Bút bi, bút mực thanh đậm, bút thư pháp vát $45^\circ$, bút lông, dạ quang highlight.
   - Nhận diện nét vẽ hình học thông minh, tự động chuyển nét khuất thành nét đứt đối với hình không gian.
   - Kéo thả chèn PDF, Word (.docx), hình ảnh; xuất ảnh PNG nét cao và JSON.

3. **ĐỒ THỊ & BẢNG GIÁ TRỊ (Graph & Table):**
   - Vẽ đồng thời nhiều hàm số: Đa thức, hữu tỉ, lượng giác, mũ, logarit.
   - Tự động dò tìm nghiệm, cực trị, điểm uốn và giao điểm.
   - Lập bảng giá trị $f(x), g(x)$ bước nhảy tùy chỉnh kèm đồ thị trực quan.

4. **PHƯƠNG TRÌNH & HỆ PHƯƠNG TRÌNH (Equation):**
   - Giải phương trình bậc 2 đến bậc 4 (Cardano, Ferrari).
   - Giải hệ phương trình tuyến tính 2 đến 4 ẩn, hệ đối xứng, hệ phương trình vô tỉ kèm các bước giải chi tiết.

5. **BẤT PHƯƠNG TRÌNH & MIỀN NGHIỆM (Inequality & LP):**
   - Giải bất phương trình đa thức, phân thức, căn thức, hàm mũ và logarit.
   - Giải bất phương trình lượng giác theo chu kỳ $k2\pi, k\pi$ và biểu diễn miền nghiệm trên trục số.

6. **ĐẠI SỐ TUYẾN TÍNH & MA TRẬN (Matrix & Linear Algebra):**
   - Bộ tính toán ma trận MatA đến MatF kích thước lên tới $4 \times 4$.
   - Thuật toán khử Gauss-Jordan từng bước chi tiết, tính định thức (det), ma trận nghịch đảo ($A^{-1}$), vết (trace), trị riêng và véctơ riêng.

7. **KHẢO SÁT HÀM SỐ & GIẢI TÍCH (Calculus & Study):**
   - Bảng biến thiên hoàn chỉnh (TXĐ, đạo hàm, dấu $y'$, tiệm cận ngang/đứng/xiên, GTLN-GTNN).
   - Tích phân từng bước với phương pháp đổi biến số và tích phân từng phần.
   - Mô phỏng tổng tích phân Riemann trực quan.

8. **HÌNH HỌC KHÔNG GIAN & THẾ GIỚI OXYZ:**
   - Xử lý tọa độ 3D: Điểm, véctơ, phương trình mặt phẳng, đường thẳng, mặt cầu.
   - Không gian 3D tương tác xoay/thu phóng (WebGL/Three.js) với quy ước nét vẽ liền / đứt chuẩn sách giáo khoa.

9. **DIỆN TÍCH & KHỐI TRÒN XOAY (Solid of Revolution):**
   - Diện tích hình phẳng giới hạn bởi các đường cong.
   - Thể tích khối tròn xoay quanh trục $Ox, Oy$ hoặc trục bất kỳ $y = d, x = c$.
   - Mô phỏng cắt lát thiết diện $S(x)$, mô hình vật thể thực tế và định lý Pappus-Guldinus.

10. **TỔ HỢP, XÁC SUẤT & PHÂN PHỐI (Probability & Stats):**
    - Hoán vị, chỉnh hợp, tổ hợp, nhị thức Newton.
    - Mô phỏng thực nghiệm 3D (bốc bi xác suất có hoàn lại / không hoàn lại).
    - Biểu đồ phân phối chuẩn (Normal), nhị thức (Binomial), Poisson và phân tích mẫu số liệu ghép nhóm.

11. **SỐ HỌC & LÝ THUYẾT SỐ (Number Theory):**
    - Phân tích thừa số nguyên tố lớn BigInt (Pollard-Rho), kiểm tra số nguyên tố Miller-Rabin.
    - Hàm phi Euler $\varphi(n)$, đồng dư tuyến tính, phương trình Diophantine và Pell.

12. **SỐ PHỨC & VECTƠ (Complex & Vector):**
    - Dạng đại số ($a+bi$), lượng giác ($r(\cos\varphi + i\sin\varphi)$), mũ ($re^{i\varphi}$).
    - Khai căn bậc $n$ của số phức, lũy thừa De Moivre, biểu diễn Argand, tích vô hướng và có hướng 3D.

13. **TRẢI HÌNH & GẤP KHỐI 3D (Unfold & Solids):**
    - Trải lưới phẳng không chồng lấn cho khối đa diện, hình trụ, hình nón.
    - Hoạt cảnh gấp/mở không gian 3D mượt mà.
    - Tương tác mặt phẳng cắt và thiết diện khối đa diện theo liên kết [#solids](http://localhost:8080/#solids).

14. **BẤT BIẾN THPT & GIAO/BIẾN HÌNH:**
    - Hệ thống định lý tâm tỉ cự, tích phân King's property, quỹ tích đường tròn Apollonius.
    - Thực thi các phép biến hình 2D/3D: Tịnh tiến, quay, vị tự, đối xứng trục và tâm.

15. **SỔ TAY TOÁN HỌC & BÁCH KHOA HÌNH HỌC:**
    - Tra cứu hơn 1100+ công thức Toán học THPT và đại cương.
    - Bách khoa toàn thư trực quan với 40 hình phẳng và khối xoay 3D mẫu kèm công thức chi tiết.

---

## 🚀 HƯỚNG DẪN KHỞI CHẠY

Nhấp đúp vào tệp: **`start_hung_cal.bat`** tại thư mục gốc để khởi động ứng dụng và tự động mở trình duyệt tại địa chỉ: `http://localhost:8080`.
