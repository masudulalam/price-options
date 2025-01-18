import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectsMarks = [
            { "id": 1, "name": "Alice", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 88, "biologyMarks": 92 },
            { "id": 2, "name": "Bob", "mathMarks": 78, "physicsMarks": 84, "chemistryMarks": 75, "biologyMarks": 80 },
            { "id": 3, "name": "Charlie", "mathMarks": 92, "physicsMarks": 89, "chemistryMarks": 94, "biologyMarks": 91 },
            { "id": 4, "name": "David", "mathMarks": 88, "physicsMarks": 76, "chemistryMarks": 85, "biologyMarks": 87 },
            { "id": 5, "name": "Ella", "mathMarks": 74, "physicsMarks": 82, "chemistryMarks": 79, "biologyMarks": 78 },
            { "id": 6, "name": "Frank", "mathMarks": 81, "physicsMarks": 88, "chemistryMarks": 83, "biologyMarks": 85 },
            { "id": 7, "name": "Grace", "mathMarks": 95, "physicsMarks": 91, "chemistryMarks": 97, "biologyMarks": 96 },
            { "id": 8, "name": "Hannah", "mathMarks": 69, "physicsMarks": 74, "chemistryMarks": 70, "biologyMarks": 73 },
            { "id": 9, "name": "Ian", "mathMarks": 87, "physicsMarks": 85, "chemistryMarks": 89, "biologyMarks": 88 },
            { "id": 10, "name": "Jane", "mathMarks": 90, "physicsMarks": 93, "chemistryMarks": 91, "biologyMarks": 92 }
          ]
          
      
    return (
        <div>
            <LChart width={500} height={400} data={subjectsMarks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="mathMarks" stroke="green" />
                <Line type="monotone" dataKey="physicsMarks" stroke="blue" />
            </LChart>
        </div>
    );
};

export default LineChart;