import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Timer = ({text}) => {
  const [countDown, setCountDown] = useState(60);
  const [resend, setResend] = useState(false);

  useEffect(() => {
    if (countDown > 0) {
      setResend(false);
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else {
      setResend(true);
    }
  }, [countDown]);

  const resend_code = () => {
    setCountDown(60);
    setResend(false);
  };

  if (resend) {
    return (
      <TouchableOpacity onPress={resend_code} activeOpacity={0.6}>
        <Text style={styles.bold}>{text[2]}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <Text style={styles.regular}>
        {text[0]}
        <Text style={styles.bold}>{countDown}</Text>
        {text[1]}
      </Text>
    );
  }
};

export default Timer;
