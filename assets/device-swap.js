/**
 * HUNG-CAL — MODULE QUẢN LÝ & THAY THẾ THIẾT BỊ MÁY TÍNH
 * Tác giả: Thầy Hùng (NMH) — hungcal.vercel.app
 * 
 * Chức năng:
 *  1. Chọn / Kéo thả (Drag & Drop) thiết bị mới thay thế cho 2 vị trí cũ
 *  2. Bảng so sánh thông số, cấu hình chi tiết giữa thiết bị cũ và mới
 *  3. Quản lý danh mục thiết bị (Database), tìm kiếm & phân loại thời gian thực
 *  4. Đồng bộ cấu hình người dùng vào localStorage và cập nhật tức thì UI
 */

export const DEVICE_DATABASE = [
  {
    id: 'fx580',
    code: '580VN X',
    name: 'Casio fx-580VN X',
    sub: 'ClassWiz Series · Kinh điển',
    category: 'Máy tính khoa học THPT',
    catGroup: 'casio',
    badge: 'Phổ biến nhất',
    badgeColor: '#3b82f6',
    icon: '📟',
    specs: {
      screen: 'Natural-V.P.A.M. LCD ma trận điểm ánh xanh (192 × 63 dots)',
      keyboard: 'Phím vuông vát cạnh 3D, phím số trắng tương phản cao',
      keyNav: 'Cụm đĩa kim loại tròn REPLAY xoay 4 hướng',
      keyExec: 'Dấu bằng (=) truyền thống',
      features: '521 tính năng: giải PT bậc 4, hệ 4 ẩn, ma trận 4x4, vecto 3D, kiểm tra số nguyên tố, phân phối xác suất',
      connectivity: 'Độc lập offline, Solar panel phụ trợ hấp thụ quang năng',
      examStandard: 'Được phép mang vào phòng thi tốt nghiệp THPT theo quy chế Bộ GD&ĐT'
    }
  },
  {
    id: 'fx880',
    code: '880BTG',
    name: 'Casio fx-880BTG',
    sub: 'ClassWiz II · 4-Gradation Display',
    category: 'Máy tính khoa học thế hệ mới',
    catGroup: 'casio',
    badge: 'Mới nhất 2024+',
    badgeColor: '#10b981',
    icon: '📱',
    specs: {
      screen: '4-Gradation Display (Độ phân giải gấp 4 lần, 4 thang xám đen tuyền siêu nét)',
      keyboard: 'Phím tròn Pebble (viên sỏi công thái học), phủ lớp chống phai ký tự',
      keyNav: 'Cụm điều hướng tích hợp phím OK tại tâm vòng xoay',
      keyExec: 'Phím thực thi EXE chuyên biệt (thay thế cho dấu =)',
      features: '550+ tính năng: Bảng tính Spreadsheet, Hộp toán học MathBox, Khảo sát hàm số, Tung đồng xu/Xúc xắc mô phỏng',
      connectivity: 'Bluetooth kết nối ứng dụng ClassWiz App, Solar panel',
      examStandard: 'Được phép mang vào phòng thi tốt nghiệp THPT theo quy chế Bộ GD&ĐT'
    }
  },
  {
    id: 'fx570',
    code: '570VN+',
    name: 'Casio fx-570VN PLUS (2nd Edition)',
    sub: 'Huyền thoại học sinh THPT',
    category: 'Máy tính khoa học phổ thông',
    catGroup: 'casio',
    badge: 'Bền bỉ kinh tế',
    badgeColor: '#f59e0b',
    icon: '📟',
    specs: {
      screen: 'Natural Display 2 dòng hiển thị (31 × 96 dots)',
      keyboard: 'Phím chữ nhật cao su mềm, phím số xám truyền thống',
      keyNav: 'Cụm Replay tròn truyền thống 4 chiều',
      keyExec: 'Dấu bằng (=)',
      features: '453 tính năng: giải PT bậc 3, hệ 3 ẩn, số phức, ma trận 3x3, tích phân & đạo hàm cơ bản',
      connectivity: 'Pin AAA độc lập 100% offline bền bỉ',
      examStandard: 'Được phép mang vào phòng thi tốt nghiệp THPT'
    }
  },
  {
    id: 'ti84',
    code: 'TI-84 CE',
    name: 'Texas Instruments TI-84 Plus CE',
    sub: 'Color Graphing Calculator',
    category: 'Máy tính đồ thị màu cao cấp',
    catGroup: 'other',
    badge: 'Quốc tế SAT/AP',
    badgeColor: '#a855f7',
    icon: '📊',
    specs: {
      screen: 'Màn hình màu 2.8 inch Backlit LCD (320 × 240 pixels, 140 DPI, đa sắc màu)',
      keyboard: 'Bàn phím ma trận đồ thị đầy đủ với hàng phím chuyên biệt Y=, WINDOW, ZOOM, TRACE, GRAPH',
      keyNav: 'Cụm phím điều hướng 4 chiều rời',
      keyExec: 'Phím ENTER',
      features: 'Vẽ đồ thị nhiều màu đồng thời, tương tác đường cong trực tiếp, lập trình TI-BASIC và Python',
      connectivity: 'Cổng sạc & truyền dữ liệu USB mini-B, Pin sạc Lithium-ion dung lượng cao',
      examStandard: 'Phù hợp chương trình Quốc tế (SAT, ACT, AP, IB) và Toán cao cấp Đại học'
    }
  },
  {
    id: 'inkpad',
    code: 'Inkable Pad',
    name: 'Bảng vẽ Sư phạm Inkable Pad Pro',
    sub: 'Công nghệ Bút Stylus Vector',
    category: 'Bảng vẽ & Thiết bị tương tác',
    catGroup: 'other',
    badge: 'Sư phạm số',
    badgeColor: '#ec4899',
    icon: '✏️',
    specs: {
      screen: 'Không gian vẽ Vector 4K vô hạn, hỗ trợ Dark Mode & Canvas đa tỉ lệ',
      keyboard: 'Thanh công cụ cọ vẽ: Bút bi, Bút mực thanh đậm, Bút thư pháp vát 45°, Dạ quang highlight',
      keyNav: 'Thu phóng / Kéo bảng Canvas mượt mà 60 FPS',
      keyExec: 'Nút Xuất PNG / JSON',
      features: 'Tự động đứt nét khuất hình 3D, nhận diện hình học thông minh, chèn file PDF & Word (.docx)',
      connectivity: 'Kết nối trực tiếp trình duyệt Web, lưu trữ đám mây & ngoại tuyến PWA',
      examStandard: 'Công cụ đắc lực phục vụ giáo viên giảng dạy và học sinh giải bài tập trực quan'
    }
  }
];

// Khởi tạo trạng thái slot thiết bị từ localStorage
export function getSavedDeviceSlots() {
  try {
    const raw = localStorage.getItem('hungcal_device_slots');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.slot1 && parsed.slot2) return parsed;
    }
  } catch (_) {}
  return { slot1: 'fx580', slot2: 'fx880' };
}

export function saveDeviceSlots(slots) {
  try {
    localStorage.setItem('hungcal_device_slots', JSON.stringify(slots));
  } catch (_) {}
}

export function getDeviceById(id) {
  return DEVICE_DATABASE.find(d => d.id === id) || DEVICE_DATABASE[0];
}

// Bơm CSS dành riêng cho modal thay thế thiết bị
export function injectDeviceSwapStyles() {
  if (document.getElementById('dsm-custom-styles')) return;

  const style = document.createElement('style');
  style.id = 'dsm-custom-styles';
  style.textContent = `
    .dsm-overlay {
      position: fixed;
      inset: 0;
      background: rgba(4, 7, 14, 0.85);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 100005;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      animation: dsmFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes dsmFadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    .dsm-container {
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 18px;
      width: min(980px, 98vw);
      max-height: 94vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05);
      color: #f1f5f9;
      overflow: hidden;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .dsm-header {
      padding: 18px 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #131d33;
    }
    .dsm-title-group {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .dsm-icon-badge {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2));
      border: 1px solid rgba(59, 130, 246, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .dsm-title-group h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.01em;
    }
    .dsm-title-group p {
      margin: 3px 0 0;
      font-size: 12.5px;
      color: #94a3b8;
    }
    .dsm-close-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
      width: 34px;
      height: 34px;
      border-radius: 9px;
      font-size: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s;
    }
    .dsm-close-btn:hover {
      background: #ef4444;
      color: #fff;
      border-color: #ef4444;
    }
    .dsm-body {
      padding: 20px 24px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 22px;
      flex-grow: 1;
    }
    .dsm-section-label {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.06em;
      color: #7dd3fc;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .dsm-swap-pos-btn {
      background: rgba(59, 130, 246, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.4);
      color: #60a5fa;
      padding: 5px 12px;
      border-radius: 7px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s;
    }
    .dsm-swap-pos-btn:hover {
      background: #3b82f6;
      color: #fff;
    }
    .dsm-slots-row {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 16px;
    }
    .dsm-slot-card {
      background: #141f36;
      border: 2px dashed rgba(255, 255, 255, 0.2);
      border-radius: 14px;
      padding: 14px 18px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .dsm-slot-card.drag-hover {
      border-color: #38bdf8;
      border-style: solid;
      background: rgba(56, 189, 248, 0.15);
      transform: scale(1.02);
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
    }
    .dsm-slot-tag {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.08em;
      color: #38bdf8;
    }
    .dsm-slot-info {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .dsm-dev-icon {
      font-size: 32px;
    }
    .dsm-dev-name {
      margin: 0;
      font-size: 16px;
      font-weight: 800;
      color: #fff;
    }
    .dsm-dev-sub {
      font-size: 12px;
      color: #94a3b8;
    }
    .dsm-slot-drop-hint {
      font-size: 11.5px;
      color: #64748b;
      margin-top: 2px;
      font-style: italic;
    }
    .dsm-slots-connector {
      font-size: 24px;
      color: #475569;
      font-weight: 900;
      user-select: none;
    }
    .dsm-compare-table-wrapper {
      background: #131c31;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      overflow: hidden;
    }
    .dsm-compare-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12.5px;
    }
    .dsm-compare-table th, .dsm-compare-table td {
      padding: 10px 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      text-align: left;
      line-height: 1.45;
    }
    .dsm-compare-table th {
      background: #17223b;
      font-weight: 800;
      color: #e2e8f0;
    }
    .dsm-compare-table tr:last-child td {
      border-bottom: none;
    }
    .td-label {
      font-weight: 700;
      color: #94a3b8;
      background: rgba(0, 0, 0, 0.2);
    }
    .dsm-tag-pill {
      font-size: 10px;
      background: rgba(255, 255, 255, 0.12);
      padding: 2px 7px;
      border-radius: 4px;
      font-weight: 700;
      margin-left: 6px;
      color: #cbd5e1;
    }
    .dsm-status-ok {
      color: #34d399;
      font-weight: 600;
    }
    .dsm-catalog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }
    .dsm-cat-filters {
      display: flex;
      gap: 8px;
    }
    .dsm-cat-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #94a3b8;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s;
    }
    .dsm-cat-btn.active, .dsm-cat-btn:hover {
      background: #2563eb;
      color: #fff;
      border-color: #2563eb;
    }
    .dsm-search-bar input {
      background: #141f36;
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 8px;
      color: #fff;
      padding: 7px 14px;
      font-size: 12.5px;
      width: 260px;
      outline: none;
      transition: all 0.15s;
    }
    .dsm-search-bar input:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }
    .dsm-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 14px;
    }
    .dsm-card {
      background: #141f36;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      cursor: grab;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .dsm-card:hover {
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    }
    .dsm-card.dragging {
      opacity: 0.45;
      transform: scale(0.97);
    }
    .dsm-card.in-slot-1 {
      border-color: #3b82f6;
      background: rgba(59, 130, 246, 0.1);
    }
    .dsm-card.in-slot-2 {
      border-color: #10b981;
      background: rgba(16, 185, 129, 0.1);
    }
    .dsm-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .dsm-card-icon {
      font-size: 26px;
    }
    .dsm-card-badge {
      font-size: 10.5px;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 999px;
    }
    .dsm-card-title {
      margin: 0;
      font-size: 15px;
      font-weight: 800;
      color: #fff;
    }
    .dsm-card-sub {
      margin: 0;
      font-size: 12px;
      color: #94a3b8;
    }
    .dsm-card-category {
      font-size: 11px;
      color: #64748b;
      margin-bottom: 6px;
    }
    .dsm-card-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-top: auto;
    }
    .dsm-assign-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      padding: 6px 8px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
      text-align: center;
    }
    .dsm-assign-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
    }
    .dsm-assign-btn.active-1 {
      background: #3b82f6;
      border-color: #3b82f6;
      color: #fff;
    }
    .dsm-assign-btn.active-2 {
      background: #10b981;
      border-color: #10b981;
      color: #fff;
    }
    .dsm-footer {
      padding: 16px 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #131d33;
    }
    .dsm-footer-info {
      font-size: 13px;
      color: #94a3b8;
    }
    .dsm-footer-btns {
      display: flex;
      gap: 12px;
    }
    .dsm-btn-cancel {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      padding: 9px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s;
    }
    .dsm-btn-cancel:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
    }
    .dsm-btn-confirm {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      border: none;
      color: #fff;
      padding: 9px 22px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.15s;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
    }
    .dsm-btn-confirm:hover {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      transform: translateY(-1px);
    }
    .mp-swap-btn {
      background: rgba(255, 255, 255, 0.08) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      color: #38bdf8 !important;
      margin-left: 4px;
      font-weight: 700 !important;
    }
    .mp-swap-btn:hover {
      background: rgba(56, 189, 248, 0.25) !important;
      color: #fff !important;
    }
    .dsm-toast-notice {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #1e293b;
      border: 1px solid #3b82f6;
      color: #f8fafc;
      padding: 12px 20px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      z-index: 100010;
      font-size: 13.5px;
      font-weight: 600;
      animation: dsmToastIn 0.25s ease-out;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    @keyframes dsmToastIn {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

// Hiển thị thông báo nhỏ Toast
export function showToastNotice(msg) {
  document.getElementById('dsm-toast')?.remove();
  const t = document.createElement('div');
  t.id = 'dsm-toast';
  t.className = 'dsm-toast-notice';
  t.innerHTML = `<span>✔</span> <span>${msg}</span>`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

// Khởi tạo Modal thay thế thiết bị
export function openDeviceSwapModal(onConfirmCallback) {
  injectDeviceSwapStyles();

  // Đóng modal cũ nếu có
  document.getElementById('device-swap-modal')?.remove();

  let tempSlots = { ...getSavedDeviceSlots() };
  let searchTerm = '';
  let activeTab = 'all';

  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'device-swap-modal';
  modalOverlay.className = 'dsm-overlay';

  // Khung sườn HTML chính (không re-render toàn bộ để giữ tiêu điểm input)
  modalOverlay.innerHTML = `
    <div class="dsm-container" role="dialog" aria-modal="true" aria-labelledby="dsm-title">
      <!-- Header -->
      <div class="dsm-header">
        <div class="dsm-title-group">
          <div class="dsm-icon-badge">🔄</div>
          <div>
            <h3 id="dsm-title">Trung tâm Thay thế Thiết bị & Đối chiếu Cấu hình</h3>
            <p>Chọn hoặc kéo thả thiết bị mới từ kho hệ thống để thay thế cho 2 vị trí máy tính</p>
          </div>
        </div>
        <button class="dsm-close-btn" id="dsm-close" title="Đóng (Esc)">✕</button>
      </div>

      <!-- Body -->
      <div class="dsm-body">
        <!-- Vùng 2 Slot Thiết bị hiện tại (Drop targets) -->
        <div class="dsm-slots-section">
          <div class="dsm-section-label">
            <span>📍 VỊ TRÍ 2 THIẾT BỊ HIỆN TẠI TRÊN ỨNG DỤNG</span>
            <button class="dsm-swap-pos-btn" id="dsm-swap-pos" title="Đổi chỗ 2 vị trí">⇄ Đổi vị trí 1 và 2</button>
          </div>
          <div class="dsm-slots-row" id="dsm-slots-row-container">
            <!-- Được render bởi updateSlotsView() -->
          </div>
        </div>

        <!-- Bảng so sánh nhanh giữa 2 thiết bị đang chọn -->
        <div class="dsm-compare-section">
          <div class="dsm-section-label">📊 BẢNG SO SÁNH NHANH THÔNG SỐ & TÍNH NĂNG (ĐỐI CHIẾU TRỰC TIẾP)</div>
          <div class="dsm-compare-table-wrapper" id="dsm-compare-table-container">
            <!-- Được render bởi updateCompareView() -->
          </div>
        </div>

        <!-- Kho thiết bị có sẵn trong hệ thống (Catalog Database) -->
        <div class="dsm-catalog-section">
          <div class="dsm-catalog-header">
            <div class="dsm-section-label">📦 KHO THIẾT BỊ CÓ SẴN TRONG HỆ THỐNG (BẤM HOẶC KÉO THẢ ĐỂ THAY)</div>
            <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
              <div class="dsm-cat-filters">
                <button class="dsm-cat-btn active" data-tab="all">Tất cả (${DEVICE_DATABASE.length})</button>
                <button class="dsm-cat-btn" data-tab="casio">Casio THPT</button>
                <button class="dsm-cat-btn" data-tab="other">Đồ thị & Bảng vẽ</button>
              </div>
              <div class="dsm-search-bar">
                <input type="text" id="dsm-search-input" placeholder="Tìm kiếm máy tính, model, tính năng...">
              </div>
            </div>
          </div>

          <div class="dsm-cards-grid" id="dsm-cards-grid-container">
            <!-- Được render bởi updateCatalogGrid() -->
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="dsm-footer">
        <div class="dsm-footer-info" id="dsm-footer-info-text">
          <!-- Text chọn hiện tại -->
        </div>
        <div class="dsm-footer-btns">
          <button class="dsm-btn-cancel" id="dsm-cancel">Hủy bỏ</button>
          <button class="dsm-btn-confirm" id="dsm-confirm">💾 Xác nhận thay thế & Áp dụng ngay</button>
        </div>
      </div>
    </div>
  `;

  // Cập nhật Vùng hiển thị 2 Slot
  function updateSlotsView() {
    const dev1 = getDeviceById(tempSlots.slot1);
    const dev2 = getDeviceById(tempSlots.slot2);

    const container = modalOverlay.querySelector('#dsm-slots-row-container');
    if (!container) return;

    container.innerHTML = `
      <!-- Slot 1 -->
      <div class="dsm-slot-card" id="slot-target-1" data-slot="slot1">
        <div class="dsm-slot-tag">VỊ TRÍ 1 (MÁY CHÍNH)</div>
        <div class="dsm-slot-info">
          <span class="dsm-dev-icon">${dev1.icon}</span>
          <div>
            <h4 class="dsm-dev-name">${dev1.name}</h4>
            <span class="dsm-dev-sub">${dev1.sub}</span>
          </div>
        </div>
        <div class="dsm-slot-drop-hint">Kéo thả thiết bị mới vào đây để thay thế</div>
      </div>

      <div class="dsm-slots-connector">⇄</div>

      <!-- Slot 2 -->
      <div class="dsm-slot-card" id="slot-target-2" data-slot="slot2">
        <div class="dsm-slot-tag">VỊ TRÍ 2 (MÁY PHỤ TRỢ)</div>
        <div class="dsm-slot-info">
          <span class="dsm-dev-icon">${dev2.icon}</span>
          <div>
            <h4 class="dsm-dev-name">${dev2.name}</h4>
            <span class="dsm-dev-sub">${dev2.sub}</span>
          </div>
        </div>
        <div class="dsm-slot-drop-hint">Kéo thả thiết bị mới vào đây để thay thế</div>
      </div>
    `;

    // Cập nhật footer
    const footerInfo = modalOverlay.querySelector('#dsm-footer-info-text');
    if (footerInfo) {
      footerInfo.innerHTML = `Đã chọn: <b style="color:#60a5fa">${dev1.name}</b> (Vị trí 1) & <b style="color:#34d399">${dev2.name}</b> (Vị trí 2)`;
    }

    bindDropTargets();
  }

  // Cập nhật Bảng so sánh
  function updateCompareView() {
    const dev1 = getDeviceById(tempSlots.slot1);
    const dev2 = getDeviceById(tempSlots.slot2);
    const container = modalOverlay.querySelector('#dsm-compare-table-container');
    if (!container) return;

    container.innerHTML = `
      <table class="dsm-compare-table">
        <thead>
          <tr>
            <th style="width:22%">Thông số / Đặc tính</th>
            <th style="width:39%">${dev1.name} <span class="dsm-tag-pill">Vị trí 1</span></th>
            <th style="width:39%">${dev2.name} <span class="dsm-tag-pill">Vị trí 2</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="td-label">Màn hình hiển thị</td>
            <td>${dev1.specs.screen}</td>
            <td>${dev2.specs.screen}</td>
          </tr>
          <tr>
            <td class="td-label">Thiết kế Bàn phím</td>
            <td>${dev1.specs.keyboard}</td>
            <td>${dev2.specs.keyboard}</td>
          </tr>
          <tr>
            <td class="td-label">Cụm phím điều hướng</td>
            <td>${dev1.specs.keyNav}</td>
            <td>${dev2.specs.keyNav}</td>
          </tr>
          <tr>
            <td class="td-label">Phím thực thi kết quả</td>
            <td><b style="color:#60a5fa">${dev1.specs.keyExec}</b></td>
            <td><b style="color:#34d399">${dev2.specs.keyExec}</b></td>
          </tr>
          <tr>
            <td class="td-label">Tính năng & Ứng dụng</td>
            <td>${dev1.specs.features}</td>
            <td>${dev2.specs.features}</td>
          </tr>
          <tr>
            <td class="td-label">Kết nối & Năng lượng</td>
            <td>${dev1.specs.connectivity}</td>
            <td>${dev2.specs.connectivity}</td>
          </tr>
          <tr>
            <td class="td-label">Quy chế thi Bộ GD&ĐT</td>
            <td><span class="dsm-status-ok">✔ ${dev1.specs.examStandard}</span></td>
            <td><span class="dsm-status-ok">✔ ${dev2.specs.examStandard}</span></td>
          </tr>
        </tbody>
      </table>
    `;
  }

  // Cập nhật Danh sách Card Catalog
  function updateCatalogGrid() {
    const container = modalOverlay.querySelector('#dsm-cards-grid-container');
    if (!container) return;

    const filteredList = DEVICE_DATABASE.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.sub.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.code.toLowerCase().includes(searchTerm.toLowerCase());
      if (!matchSearch) return false;
      if (activeTab === 'casio') return d.catGroup === 'casio';
      if (activeTab === 'other') return d.catGroup === 'other';
      return true;
    });

    if (filteredList.length === 0) {
      container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:#64748b">Không tìm thấy thiết bị nào phù hợp với từ khóa "${searchTerm}"</div>`;
      return;
    }

    container.innerHTML = filteredList.map(item => {
      const isSelectedIn1 = tempSlots.slot1 === item.id;
      const isSelectedIn2 = tempSlots.slot2 === item.id;
      return `
        <div class="dsm-card ${isSelectedIn1 ? 'in-slot-1' : ''} ${isSelectedIn2 ? 'in-slot-2' : ''}" 
             draggable="true" 
             data-devid="${item.id}">
          <div class="dsm-card-top">
            <span class="dsm-card-icon">${item.icon}</span>
            <span class="dsm-card-badge" style="background:${item.badgeColor}22; color:${item.badgeColor}; border:1px solid ${item.badgeColor}55">${item.badge}</span>
          </div>
          <h4 class="dsm-card-title">${item.name}</h4>
          <p class="dsm-card-sub">${item.sub}</p>
          <div class="dsm-card-category">${item.category}</div>
          
          <div class="dsm-card-actions">
            <button class="dsm-assign-btn ${isSelectedIn1 ? 'active-1' : ''}" data-action="assign" data-slot="slot1" data-id="${item.id}" title="Gán thiết bị này vào Vị trí 1">
              ${isSelectedIn1 ? '✓ Đang ở Vị trí 1' : '👉 Chọn Vị trí 1'}
            </button>
            <button class="dsm-assign-btn ${isSelectedIn2 ? 'active-2' : ''}" data-action="assign" data-slot="slot2" data-id="${item.id}" title="Gán thiết bị này vào Vị trí 2">
              ${isSelectedIn2 ? '✓ Đang ở Vị trí 2' : '👉 Chọn Vị trí 2'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    bindCardEvents();
  }

  // Sự kiện kéo thả cho các Drop Target
  function bindDropTargets() {
    ['slot-target-1', 'slot-target-2'].forEach(targetId => {
      const el = modalOverlay.querySelector('#' + targetId);
      if (!el) return;
      el.addEventListener('dragover', (e) => {
        e.preventDefault();
        el.classList.add('drag-hover');
      });
      el.addEventListener('dragleave', () => {
        el.classList.remove('drag-hover');
      });
      el.addEventListener('drop', (e) => {
        e.preventDefault();
        el.classList.remove('drag-hover');
        const devId = e.dataTransfer.getData('text/plain');
        if (devId && DEVICE_DATABASE.some(d => d.id === devId)) {
          const slot = el.dataset.slot;
          tempSlots[slot] = devId;
          updateAllViews();
        }
      });
    });
  }

  // Sự kiện kéo thả và nút gán cho từng Card
  function bindCardEvents() {
    // Drag and Drop HTML5 API
    modalOverlay.querySelectorAll('.dsm-card[draggable="true"]').forEach(card => {
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', card.dataset.devid);
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
      });
    });

    // Các nút gán
    modalOverlay.querySelectorAll('button[data-action="assign"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const slot = e.currentTarget.dataset.slot;
        const devId = e.currentTarget.dataset.id;
        tempSlots[slot] = devId;
        updateAllViews();
      });
    });
  }

  function updateAllViews() {
    updateSlotsView();
    updateCompareView();
    updateCatalogGrid();
  }

  // Gắn sự kiện chính
  function bindGlobalModalEvents() {
    // Đóng modal
    modalOverlay.querySelector('#dsm-close')?.addEventListener('click', () => modalOverlay.remove());
    modalOverlay.querySelector('#dsm-cancel')?.addEventListener('click', () => modalOverlay.remove());

    // Đổi chỗ 2 vị trí
    modalOverlay.querySelector('#dsm-swap-pos')?.addEventListener('click', () => {
      const t = tempSlots.slot1;
      tempSlots.slot1 = tempSlots.slot2;
      tempSlots.slot2 = t;
      updateAllViews();
    });

    // Tab bộ lọc
    modalOverlay.querySelectorAll('.dsm-cat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        modalOverlay.querySelectorAll('.dsm-cat-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        activeTab = e.currentTarget.dataset.tab;
        updateCatalogGrid();
      });
    });

    // Tìm kiếm
    const searchInput = modalOverlay.querySelector('#dsm-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.trim();
        updateCatalogGrid();
      });
    }

    // Xác nhận lưu thay thế
    modalOverlay.querySelector('#dsm-confirm')?.addEventListener('click', () => {
      saveDeviceSlots(tempSlots);
      const dev1 = getDeviceById(tempSlots.slot1);
      const dev2 = getDeviceById(tempSlots.slot2);
      showToastNotice(`Đã cập nhật: Vị trí 1 [${dev1.name}] & Vị trí 2 [${dev2.name}]`);
      if (typeof onConfirmCallback === 'function') {
        onConfirmCallback(tempSlots);
      }
      modalOverlay.remove();
    });

    // Nhấp vào vùng overlay bên ngoài để đóng
    modalOverlay.addEventListener('mousedown', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.remove();
      }
    });
  }

  // Phím Esc đóng modal
  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      modalOverlay.remove();
      window.removeEventListener('keydown', handleKeydown);
    }
  };
  window.addEventListener('keydown', handleKeydown);

  document.body.appendChild(modalOverlay);
  updateAllViews();
  bindGlobalModalEvents();
}

// Gắn vào window để truy xuất toàn cục
if (typeof window !== 'undefined') {
  window.DeviceSwap = {
    DEVICE_DATABASE,
    getSavedDeviceSlots,
    saveDeviceSlots,
    getDeviceById,
    openDeviceSwapModal,
    injectDeviceSwapStyles,
    showToastNotice
  };
  try {
    injectDeviceSwapStyles();
  } catch (_) {}
}
