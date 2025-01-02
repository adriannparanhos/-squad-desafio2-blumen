import './styles.css'

type ButtonProps = {
  label: string;
};

export function Button({ label }: ButtonProps) {
  return <button className="container raleway">{label}</button>;
}
