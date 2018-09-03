

class StreakStore {
	static testStreaks = [
		{
			name: 'Nail Biting',
			started_at: new Date(2018, 7, 18),
		},
		{
			name: 'Cigs',
			started_at: new Date(2018, 7, 22),
		},
		{
			name: 'Phone a friend',
			started_at: new Date(2018, 7, 2),
		},
	]

	state = {
		isAdding: false,
		streaks: this.constructor.testStreaks,
	};

	addStreak(name, startDate) {
		streaks.push({
			name: name,
			started_at: startDate,
		})
	}
}

export default new StreakStore