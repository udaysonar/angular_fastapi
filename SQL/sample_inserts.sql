INSERT INTO Guests (name, age, gender, contact_number, email, check_in_date, check_out_date) 
VALUES 
('Ramesh Sharma', 45, 'Male', '9876543210', 'ramesh.sharma@gmail.com', '2025-01-01', '2025-01-05'),
('Sita Devi', 55, 'Female', '8765432109', 'sita.devi@gmail.com', '2025-01-02', '2025-01-06'),
('Anil Kumar', 32, 'Male', '7654321098', NULL, '2025-01-03', NULL),
('Radha Gupta', 29, 'Female', '6543210987', 'radha.gupta@yahoo.com', '2025-01-04', '2025-01-07');

INSERT INTO Rooms (room_number, capacity, current_occupancy, price_per_day) 
VALUES 
('101', 2, 1, 500.00),
('102', 4, 2, 800.00),
('103', 2, 0, 500.00),
('104', 6, 3, 1200.00);

INSERT INTO Bookings (guest_id, room_id, booking_date, check_in_date, check_out_date) 
VALUES 
(1, 1, '2024-12-31', '2025-01-01', '2025-01-05'),
(2, 2, '2025-01-01', '2025-01-02', '2025-01-06'),
(3, 3, '2025-01-02', '2025-01-03', NULL),
(4, 4, '2025-01-03', '2025-01-04', '2025-01-07');

INSERT INTO Payments (booking_id, amount_paid, payment_date, payment_mode) 
VALUES 
(1, 2500.00, '2025-01-01', 'Online'),
(2, 4000.00, '2025-01-02', 'Cash'),
(3, 500.00, '2025-01-03', 'Card'),
(4, 3600.00, '2025-01-04', 'Online');
