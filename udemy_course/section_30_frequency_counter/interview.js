Delete 5th element of array in 2 ways

const arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.splice(5, 1)
const result = arr.slice(0, 5).concat(arr[arr.length - 1])


Given the array of data:
arr = [
  {
  "date": "2018-01-24",
  "time": "13:24",
  "type": "type1",
  "location": ""
  },
  {
  "date": "2018-01-24",
  "time": "07:06",
  "type": "type2",
  "location": ""
  },
  {
  "date": "2018-01-23",
  "time": "00:37",
  "type": "type3",
  "location": "TAMWORTH, UNITED KINGDOM"
  },
  {
  "date": "2018-01-19",
  "time": "19:52",
  "type": "type4",
  "location": "NEWTOWNABBEY, UNITED KINGDOM"
  },
]
Group entries by date. Create object where its keys represent dates from initial
array
and values - array of all entries that have this date. Then 'date' key can be 
removed as it
already in key. Should work for any amount of data. Solution should be in ES6
and succinct as possible.
{ '2018-01-24': [{
    time: "13:24",
    type: "type1",
    location: "",
  },{
    time: "07:06"
    type: "type2"
    location: ""
  }],
  '2018-01-23': [{
    "time": "00:37",
    "type": "type3",
    "location": "TAMWORTH, UNITED KINGDOM"
  }]
}

function groupByDate(arr) {
	return arr.reduce((acc, [date, ..rest]) => {
  	const date = item.date
    const [date, ..rest] = acc
  
    arr[date] ? acc[date, ].push(rest) : acc[date] = [rest]
    // arr[date] = [...(arr[date] ? [...arr[date], rest] : [rest])]
    
    return acc
  }, {})
}

Write function which accepts src of img and returns image as html tag (<img>) when the source of img is loaded

'/test/path.jpg'


function defineImageTag(src) {
	return new Promise((res, rej), () => {
  	let img = new Image()
    img.src = src
    img.onload = () => {
    	res(new Image(src))
    }
  }) 
}


let img = new Image()
img.onload
img.src = src

async function main() {
	const imageObj = await defineImageTag(src);
  console.log(imageObj)
}




////////

parent.vue
<current-user >
  {{ user.firstName }}
</current-user>


current-user.vue
<span>
  <slot :user="slotProps">Name is {{ user.lastName }}</slot>
</span>



