# React CRUD Operation — Beginner Explainer

## 1. What is CRUD?

CRUD means the four basic operations we perform on data:

| Letter | Meaning | In this Faculty app |
|---|---|---|
| C | Create | Add a new faculty |
| R | Read | Display faculty records |
| U | Update | Edit an existing faculty |
| D | Delete | Remove a faculty |

A simple way to remember it:

**Create → Read → Update → Delete**

This example uses React state and a MockAPI endpoint.

---

# 2. Understand the Overall Flow

The component has four important pieces of state:

```js
const [data, setData] = useState({
    FacultyID: "",
    FacultyName: "",
    FacultyExp: "",
    FacultyImage: ""
});
```

This stores the **form data**.

```js
const [facultyList, setFacultyList] = useState([]);
```

This stores the **list of faculty records**.

```js
const [editIndex, setEditIndex] = useState(null);
```

This tells us whether we are currently editing a record.

- `null` → Add mode
- number such as `2` → Edit mode for index 2

The fourth important part is `useEffect()`:

```js
useEffect(() => {
    fetch("https://6aa78cea9b08676cd32b4312.mockapi.io/faculties")
        .then((res) => res.json())
        .then((fdata) => {
            setFacultyList(fdata);
        });
}, []);
```

It gets the initial faculty data from the API when the component loads.

---

# 3. `useState()` — Storing Data

Before CRUD, understand state.

```js
const [facultyList, setFacultyList] = useState([]);
```

Here:

- `facultyList` = current value
- `setFacultyList` = function used to change it
- `[]` = initial value

Initially:

```text
facultyList = []
```

After receiving data:

```text
facultyList = [
    { FacultyID: "F01", FacultyName: "ABC", ... },
    { FacultyID: "F02", FacultyName: "XYZ", ... }
]
```

Important:

**Never directly modify React state.**

Avoid:

```js
facultyList.push(newFaculty);
```

Instead create a new array:

```js
setFacultyList([
    ...facultyList,
    newFaculty
]);
```

The `...` is the spread operator. It copies the existing items into a new array.

---

# 4. Form Data

The form contains four fields:

```js
FacultyID
FacultyName
FacultyExp
FacultyImage
```

They are stored inside one object:

```js
const [data, setData] = useState({
    FacultyID: "",
    FacultyName: "",
    FacultyExp: "",
    FacultyImage: ""
});
```

For example, after entering data:

```js
data = {
    FacultyID: "F01",
    FacultyName: "Rahul",
    FacultyExp: "5",
    FacultyImage: "image-url"
};
```

---

# 5. Controlled Input

Look at this input:

```jsx
<input
    type="text"
    name="FacultyName"
    value={data.FacultyName}
    onChange={handleChange}
/>
```

This is called a **controlled input**.

React controls its value using:

```js
value={data.FacultyName}
```

Whenever the user types, `onChange` runs:

```js
onChange={handleChange}
```

---

# 6. `handleChange()` — Reading Input

The function is:

```js
const handleChange = (e) => {

    setData({
        ...data,
        [e.target.name]: e.target.value
    });

};
```

Let's understand it slowly.

## `e.target.name`

Suppose the user is typing in:

```jsx
<input name="FacultyName" />
```

Then:

```js
e.target.name
```

is:

```text
FacultyName
```

## `e.target.value`

If the user types:

```text
Rahul
```

then:

```js
e.target.value
```

is:

```text
Rahul
```

Therefore:

```js
[e.target.name]: e.target.value
```

becomes:

```js
FacultyName: "Rahul"
```

---

# 7. Why Do We Use `...data`?

Suppose the current object is:

```js
{
    FacultyID: "F01",
    FacultyName: "Rahul",
    FacultyExp: "5",
    FacultyImage: "abc.jpg"
}
```

The user changes only the name.

If we wrote:

```js
setData({
    FacultyName: "Amit"
});
```

the other properties would disappear.

So we copy the old data first:

```js
setData({
    ...data,
    FacultyName: "Amit"
});
```

Result:

```js
{
    FacultyID: "F01",
    FacultyName: "Amit",
    FacultyExp: "5",
    FacultyImage: "abc.jpg"
}
```

---

# 8. READ — Getting Data From the API

The first CRUD operation we implement is **Read**.

```js
useEffect(() => {

    fetch("https://6aa78cea9b08676cd32b4312.mockapi.io/faculties")

        .then((res) => {
            return res.json();
        })

        .then((fdata) => {
            setFacultyList(fdata);
        });

}, []);
```

## Step 1 — `fetch()`

```js
fetch(url)
```

sends a request to the API.

By default, `fetch()` performs a GET request.

GET means:

**"Give me the data."**

---

## Step 2 — Convert response to JSON

```js
res.json()
```

The server response is converted into JavaScript data.

---

## Step 3 — Store the data

```js
setFacultyList(fdata);
```

Now the API data is stored in React state.

---

# 9. Why `useEffect()`?

We don't want the API request to run every time the component renders.

Therefore:

```js
useEffect(() => {
    // API request
}, []);
```

The empty array:

```js
[]
```

means the effect runs when the component is initially mounted.

Think:

```text
Component loads
      ↓
useEffect runs
      ↓
fetch API
      ↓
receive data
      ↓
setFacultyList()
      ↓
React displays records
```

---

# 10. DISPLAYING THE DATA

The code uses:

```js
const records = facultyList.map((item, index) => (
```

`map()` goes through every faculty.

For example:

```js
facultyList = [
    { FacultyID: "F01", FacultyName: "Rahul" },
    { FacultyID: "F02", FacultyName: "Priya" }
];
```

`map()` creates:

```text
Row 1 → Rahul
Row 2 → Priya
```

The JSX is:

```jsx
<tr key={index}>
    <td>{item.FacultyID}</td>
    <td>{item.FacultyName}</td>
    <td>{item.FacultyExp} Years</td>
</tr>
```

`item` represents the current faculty.

---

# 11. CREATE — Adding Faculty

The Create operation happens inside:

```js
const handleClick = () => {
```

First, validation is performed:

```js
if (
    !data.FacultyID ||
    !data.FacultyName ||
    !data.FacultyExp ||
    !data.FacultyImage
) {
    alert("All fields are required");
    return;
}
```

If any field is empty:

```text
Stop the function
```

because:

```js
return;
```

exits the function.

---

## Add a New Record

When we are not editing:

```js
if (editIndex !== null) {
    // Update
}
else {
    // Create
}
```

The Create part is:

```js
setFacultyList([
    ...facultyList,
    {
        ...data
    }
]);
```

Suppose the current list is:

```js
[
    { FacultyID: "F01", FacultyName: "Rahul" }
]
```

and `data` is:

```js
{
    FacultyID: "F02",
    FacultyName: "Priya"
}
```

After adding:

```js
[
    { FacultyID: "F01", FacultyName: "Rahul" },
    { FacultyID: "F02", FacultyName: "Priya" }
]
```

---

# 12. Clearing the Form

After Create or Update:

```js
setData({
    FacultyID: "",
    FacultyName: "",
    FacultyExp: "",
    FacultyImage: ""
});
```

This resets the form.

The input boxes become empty.

---

# 13. UPDATE — Editing Faculty

When the user clicks:

```jsx
<button onClick={() => handleEdit(index)}>
    Edit
</button>
```

`handleEdit()` receives the index.

Example:

```text
Faculty 0 → Rahul
Faculty 1 → Priya
Faculty 2 → Amit
```

If we click Edit on Amit:

```js
index = 2
```

---

# 14. `handleEdit()`

```js
const handleEdit = (index) => {

    setData({
        FacultyID: facultyList[index].FacultyID,
        FacultyName: facultyList[index].FacultyName,
        FacultyExp: facultyList[index].FacultyExp,
        FacultyImage: facultyList[index].FacultyImage
    });

    setEditIndex(index);
};
```

Two things happen.

### 1. Put existing data into the form

```js
setData(...)
```

The form is now filled with the selected faculty's information.

### 2. Remember which record is being edited

```js
setEditIndex(index);
```

For example:

```text
editIndex = 2
```

Now the application knows:

**"The user is editing record number 2."**

---

# 15. Why `editIndex` Is Important

This is the main logic that decides Create vs Update:

```js
if (editIndex !== null) {
    // UPDATE
}
else {
    // CREATE
}
```

### Add mode

```text
editIndex = null
```

Button says:

```text
Add Faculty
```

### Edit mode

```text
editIndex = 2
```

Button says:

```text
Update Faculty
```

This JSX controls the button text:

```jsx
{
    editIndex === null
        ? "Add Faculty"
        : "Update Faculty"
}
```

This is the ternary operator.

It means:

```text
if editIndex is null
    show Add Faculty
else
    show Update Faculty
```

---

# 16. UPDATE — Changing the Record

When Update is clicked:

```js
if (editIndex !== null) {

    const updatedList = [...facultyList];

    updatedList[editIndex] = {
        ...data
    };

    setFacultyList(updatedList);

    setEditIndex(null);
}
```

Let's understand it step by step.

### Step 1

Copy the array:

```js
const updatedList = [...facultyList];
```

### Step 2

Find the record:

```js
updatedList[editIndex]
```

### Step 3

Replace it:

```js
updatedList[editIndex] = {
    ...data
};
```

### Step 4

Save the new array into state:

```js
setFacultyList(updatedList);
```

### Step 5

Exit edit mode:

```js
setEditIndex(null);
```

---

# 17. DELETE — Removing Faculty

Delete button:

```jsx
<button
    onClick={() => handleDelete(index)}
>
    Delete
</button>
```

Again, we pass the index.

The function:

```js
const handleDelete = (index) => {

    const updatedList = facultyList.filter(
        (item, i) => i !== index
    );

    setFacultyList(updatedList);
};
```

---

# 18. How `filter()` Deletes Data

Suppose:

```js
facultyList = [
    Rahul,
    Priya,
    Amit
];
```

Indexes:

```text
0 → Rahul
1 → Priya
2 → Amit
```

If we delete index `1`:

```js
i !== 1
```

means:

```text
0 !== 1 → true  → keep Rahul
1 !== 1 → false → remove Priya
2 !== 1 → true  → keep Amit
```

Result:

```text
Rahul
Amit
```

Then:

```js
setFacultyList(updatedList);
```

updates React state.

---

# 19. Handling Delete While Editing

There is an additional check:

```js
if (editIndex === index) {

    setEditIndex(null);

    setData({
        FacultyID: "",
        FacultyName: "",
        FacultyExp: "",
        FacultyImage: ""
    });

}
```

Why?

Imagine:

```text
You click Edit on Rahul
        ↓
Form contains Rahul
        ↓
You delete Rahul
```

The form should not continue showing Rahul's deleted record.

Therefore:

```js
setEditIndex(null);
```

exits edit mode.

And:

```js
setData(...)
```

clears the form.

---

# 20. Complete CRUD Flow

## CREATE

```text
Enter form data
      ↓
Click Add Faculty
      ↓
Validate
      ↓
Create new object
      ↓
Add object to facultyList
      ↓
Clear form
```

## READ

```text
Component loads
      ↓
useEffect()
      ↓
fetch()
      ↓
API returns data
      ↓
setFacultyList()
      ↓
map()
      ↓
Display table
```

## UPDATE

```text
Click Edit
      ↓
Get selected record
      ↓
Put data into form
      ↓
Store editIndex
      ↓
Change form values
      ↓
Click Update Faculty
      ↓
Replace record
      ↓
Clear edit mode
```

## DELETE

```text
Click Delete
      ↓
Get index
      ↓
filter() the record out
      ↓
setFacultyList()
      ↓
Table updates
```

---

# 21. Important React Concepts Used

This small CRUD program teaches several important React concepts.

### `useState`

Used for storing changing data.

```js
useState()
```

### `useEffect`

Used for running code when the component loads.

```js
useEffect()
```

### `fetch`

Used for communicating with an API.

```js
fetch(url)
```

### `map`

Used for displaying every item.

```js
facultyList.map(...)
```

### `filter`

Used here to create a list without the deleted item.

```js
facultyList.filter(...)
```

### Event handling

```jsx
onChange={handleChange}
onClick={handleClick}
```

### Controlled components

```jsx
value={data.FacultyName}
```

### Spread operator

```js
...data
...facultyList
```

---

# 22. One Important Limitation of This Code

Although the comment says:

```js
// READ DATA FROM MOCK API
```

the current Create, Update, and Delete operations only change React's local state.

For example:

```js
setFacultyList(updatedList);
```

changes what the current page displays.

It does **not** send an update request to MockAPI.

A real CRUD API would normally use:

```text
GET    → Read
POST   → Create
PUT    → Update
DELETE → Delete
```

For example:

```js
fetch(url, {
    method: "POST",
    ...
});
```

for Create.

```js
fetch(url + "/" + id, {
    method: "PUT",
    ...
});
```

for Update.

```js
fetch(url + "/" + id, {
    method: "DELETE"
});
```

for Delete.

So the current code is best understood as:

**API Read + local Create/Update/Delete**

rather than complete server-side CRUD.

---

# 23. Index vs ID

This example uses:

```jsx
key={index}
```

and passes:

```js
handleEdit(index)
```

For a beginner exercise, this is easy to understand.

However, real applications generally work with the record's actual unique ID:

```text
FacultyID
```

or the database/API-generated ID.

Why?

Because array indexes can change after deleting or sorting records.

For production applications, prefer a stable unique identifier.

---

# 24. A Simple Mental Model

Think of the application as three boxes:

```text
              FORM
                ↓
          handleChange()
                ↓
              data
                ↓
        handleClick()
          ↙           ↘
      CREATE         UPDATE
          ↘           ↙
          facultyList
                ↓
              map()
                ↓
             TABLE
                ↓
       Edit / Delete
```

And initially:

```text
API
 ↓
fetch()
 ↓
facultyList
 ↓
TABLE
```

---

# 25. What You Should Learn Next

After understanding this code, learn these in order:

1. `useState`
2. Controlled forms
3. `map()`
4. `filter()`
5. `useEffect`
6. `fetch()`
7. GET request
8. POST request
9. PUT request
10. DELETE request
11. Loading and error handling
12. Form validation

Once these are comfortable, you can build CRUD applications connected to a real backend.

## Final Shortcut to Remember

```text
CREATE → add data
READ   → get data
UPDATE → change data
DELETE → remove data
```

In React:

```text
useState  → store data
useEffect → load data
fetch     → communicate with API
map       → display data
filter    → remove data
```

The most important thing for a first CRUD learner is to understand the **data flow**, not memorize every line.
