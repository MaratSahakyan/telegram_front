import CustomInput from '../CustomInput';

const PhoneSelectInputs = () => {
  return (
    <div>
      {/* {countries.map((el: any) => {
        console.log(el);
        return <div key={el}>{JSON.stringify(el)}</div>;
      })} */}
      <CustomInput name="tel" label="country" />
    </div>
  );
};

export default PhoneSelectInputs;
