



const boxStyle = (color, size = 200) => (
    {
        height: size,
        width: size,
        backgroundColor: color,
        border: "2px solid black",
        borderRadius: 24,

    }
)


const BoxGenerator = ({ color, size }) => {


    return (
        <div style={boxStyle(color, size)} />
    )
}


export default BoxGenerator;