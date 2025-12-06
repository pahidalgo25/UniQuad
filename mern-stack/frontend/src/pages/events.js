const overlay = document.getElementById('calendarOverlay');
    const monthYear = document.getElementById('monthYear');
    const calendarGrid = document.getElementById('calendarGrid');

    // Example events (view-only)
    const events = {
        "2026-01-30": "History Club Meeting",
        "2026-01-31": "Moonlight Snowshoeing - Peak Adventures",
        "2026-02-01": "Golden Parks Adventure - Peak Adventures"
    };

    let currentDate = new Date();

    function openCalendar() {
        overlay.style.display = 'flex';
        renderCalendar();
    }

    function closeCalendar() {
        overlay.style.display = 'none';
    }

    function prevMonth() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    }

    function nextMonth() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    }

    function renderCalendar() {
        calendarGrid.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Month-Year title
        monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        // Day names
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const div = document.createElement('div');
            div.textContent = day;
            div.classList.add('day-name');
            calendarGrid.appendChild(div);
        });

        // First day of month
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Empty slots before first day
        for (let i = 0; i < firstDay; i++) {
            calendarGrid.appendChild(document.createElement('div'));
        }

        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
            const div = document.createElement('div');
            div.textContent = day;
            div.classList.add('day');

            // Highlight today
            const today = new Date();
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                div.classList.add('today');
            }

            // Mark event days
            if (events[dateStr]) {
                div.classList.add('event');
                div.title = events[dateStr]; // Tooltip
            }

            calendarGrid.appendChild(div);
        }
    }