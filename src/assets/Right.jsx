import React from 'react'
import Cards from './Cards'
const Right = () => {
    const arr=[{
        img:'https://img.freepik.com/free-photo/smiley-woman-posing-her-coworkers_23-2148826465.jpg?semt=ais_hybrid&w=740&q=80',tex:'satisfied',color:'blue'},
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgkV5wP_SEDdzGMrof4ZMXqsv80PER-4CrA&s',tex:'satisfied',color:'blue'
        },{img:'https://photos.peopleimages.com/picture/202304/2684586-happy-professional-and-portrait-of-a-woman-at-work-for-business-administration-and-executive-job.-smile-morning-and-corporate-employee-standing-in-the-workplace-with-technology-working-at-agency-fit_400_400.jpg',tex:'satisfied',color:'blue'
        },{img:'https://st3.depositphotos.com/2931363/32645/i/450/depositphotos_326459784-stock-photo-happy-young-african-man-shirt.jpg',tex:'undeserverd',color:'green'

        },{img:'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',tex:'satisfied',color:'blue'
            
        }]
  return (
    <div id='right' className='flex items-center gap-5 overflow-auto pl-2'>
        {arr.map(function(ele,index){
            return <Cards 
            key={index}
            img={ele.img} 
            tex={ele.tex} 
            color={ele.color}
          />
        })}
    </div>
  )
}

export default Right