let roomItems = [
    [
        {id: 10,title: 'hilton-5',day: '2022-23-05'},
        {id: 10,title: 'hilton-4',day: '2022-23-06'}
    ],
    [
        {id: 11,title: 'hilton-4',day: '2022-23-07'},
        {id: 11,title: 'hilton-4',day: '2022-23-08'}
    ]
]

roomItems.flatMap((item) => {
	return item.flat()
}).map( (item) => {
	console.log(item)	
})
