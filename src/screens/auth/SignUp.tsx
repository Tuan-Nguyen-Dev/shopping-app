import {
  Button,
  CheckboxItem,
  Input,
  Row,
  Section,
  Space,
  Text,
} from '@bsdaoquang/rncomponent';
import {TickCircle, TickSquare} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import {Container} from '../../components';
import {colors} from '../../constants/colors';
import {fontFamilies} from '../../constants/fontFamilies';

const initState = {
  username: '',
  email: '',
  password: '',
  confirm: '',
};
const SignUp = ({navigation}: any) => {
  const [registerForm, setRegisterForm] = useState(initState);

  const handleChangeForm = (val: string, key: string) => {
    const items: any = {...registerForm};

    if (val && key) {
      items[`${key}`] = val;

      setRegisterForm(items);
    } else {
      console.log('Missing values');
    }
  };
  const createNewAccount = async () => {
    console.log(registerForm);
  };
  return (
    <Container isScroll={false}>
      <Section>
        <Row styles={{paddingVertical: 20, paddingTop: 30}}>
          <Image
            source={require('../../assets/logo.png')}
            style={{width: 150, height: 150, resizeMode: 'contain'}}
          />
        </Row>
      </Section>
      <Section>
        <Text text="Sign Up" size={20} font={fontFamilies.poppinsBold} />
        <Text text="Create an new account" color={colors.description} />
      </Section>
      <ScrollView>
        <Section>
          <Input
            required
            helpText="Please enter your email address"
            label="User Name"
            value={registerForm.username}
            radius={0}
            color="transparent"
            bordered={false}
            clear
            styles={{borderBottomColor: colors.dark, borderBottomWidth: 1}}
            placeholder="User name"
            onChange={val => handleChangeForm(val, 'username')}
          />

          <Input
            required
            helpText="Please enter your email address"
            label="Email"
            value={registerForm.email}
            radius={0}
            keyboardType="email-address"
            color="transparent"
            bordered={false}
            clear
            styles={{borderBottomColor: colors.dark, borderBottomWidth: 1}}
            placeholder="abc@gmail.com"
            onChange={val => handleChangeForm(val, 'email')}
            affix={
              registerForm.email &&
              registerForm.email.includes('@') &&
              registerForm.email.includes('.') ? (
                <TickCircle variant="Bold" size={20} color={colors.dark} />
              ) : null
            }
          />
          <Input
            label="Password"
            value={registerForm.password}
            radius={0}
            color="transparent"
            bordered={false}
            password
            styles={{borderBottomColor: colors.dark, borderBottomWidth: 1}}
            placeholder="password"
            onChange={val => handleChangeForm(val, 'password')}
          />
          <Input
            label="Confirm Password"
            value={registerForm.confirm}
            radius={0}
            color="transparent"
            bordered={false}
            password
            styles={{borderBottomColor: colors.dark, borderBottomWidth: 1}}
            placeholder="Confirm"
            onChange={val => handleChangeForm(val, 'confirm')}
          />
        </Section>
        <Section>
          <Row alignItems="flex-start">
            <TickSquare size={20} variant="Bold" color={colors.description} />
            <Space width={8} />
            <Text
              text="By create an acount, you have agree with out term & condication"
              color={colors.description}
            />
          </Row>
        </Section>
        <Section>
          <Button
            inline
            title="Sign Up"
            color={colors.dark}
            onPress={createNewAccount}
          />
        </Section>
        <Row styles={{paddingHorizontal: 16, marginBottom: 16}}>
          <Text text="You have not account? " />
          <Button
            inline
            onPress={() => navigation.navigate('Login')}
            type="link"
            title="Login "
          />
        </Row>
      </ScrollView>
    </Container>
  );
};

export default SignUp;
