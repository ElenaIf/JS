const getUsers = () => [
	{
		studentNo: 123,
		name: "harry",
		age: 15,
	},
	{
		studentNo: 234,
		name: "Ron",
		age: 16,
	},
	{
		studentNo: 135,
		name: "Hermione",
		age: 17,
	},
	{
		studentNo: -1,
		name: "Snape",
		age: 55,
	},
	{
		studentNo: -1,
		name: "Hagrid",
		age: 65,
	},
];

const users = getUsers();

const table = document.querySelector("table");
const tableBody = document.querySelector("tbody");
const button = document.querySelector("#ageSorting");

// const executeScript = () => {
// 	let newRow = document.createElement("tr");
// 	newRow.innerHTML = `<td>123</td>
//     <td>Test</td>
//     <td>999</td>
//     <td>Student</td>`;
// 	tableBody.appendChild(newRow);
// };

const addUser = (userInfo) => {
	let newRow1 = document.createElement("tr");
	let isStaff = "";

	if (userInfo.studentNo >= 0) {
		isStaff = "Student";
	} else {
		isStaff = "Staff";
	}

	newRow1.innerHTML = `<td>${userInfo.studentNo}</td>
    <td>${userInfo.name}</td>
    <td>${userInfo.age}</td>
    <td>${isStaff}</td>`;
	tableBody.appendChild(newRow1);
};

users.forEach(addUser);

const getOldest = (userObject) => {
	const oldest = userObject.sort((a, b) => (a.age > b.age ? -1 : 1));
	return oldest[0].name;
};

document.querySelector("#oldest").textContent = `The oldest on the list is ${getOldest(users)}`;

// document.addEventListener("DOMContentLoaded", executeScript);

const insertion_Sort = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		let j = i - 1;
		let temp = nums[i];
		while (j >= 0 && nums[j] > temp) {
			nums[j + 1] = nums[j];
			j--;
		}
		nums[j + 1] = temp;
	}
	return nums;
};

table.addEventListener("click", (e) => {
	const el = e.target;
	if (el.nodeName != "TH") {
		return;
	}
	const index = el.cellIndex;

	sortTable(index);
});

const sortTable = (index) => {
	const compare = (rowA, rowB) => {
		return rowB.cells[index].innerHTML - rowA.cells[index].innerHTML;
	};
	let rows = [].slice.call(tableBody.rows);

	rows.sort(compare);
	table.removeChild(tableBody);
	for (let i = 0; i < rows.length; i++) {
		tableBody.appendChild(rows[i]);
	}

	table.appendChild(tableBody);
};

button.addEventListener("click", function () {
	sortTable(2);
});
