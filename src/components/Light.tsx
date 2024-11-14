type Props = {
  /** Some desc */
  variant?: 'green' | 'yellow' | 'red',
  size?: 60 | 120
};

const Light = ({ variant = 'green', size = 60}: Props) => {

  return <div style={{
    backgroundColor: variant, 
    borderRadius: '50%', 
    width: size,
    height: size
    }}>
    </div>
}

export default Light