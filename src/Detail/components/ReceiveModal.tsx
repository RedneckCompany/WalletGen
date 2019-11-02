import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Metrics } from '../../shared/themes';
import PublicQRCode from '../../tools/PublicQRCode';
import BottomSheet from '../../shared/components/BottomSheet';
import InputCopyBox from '../../shared/components/InputCopyBox';


const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    padding: Metrics.smallMargin,
  },
  text: {
    marginBottom: Metrics.xlargeMargin,
  },
  copyBox: {
    marginTop: Metrics.xlargeMargin,
  }
});

interface ReceiveModalProps {
  readonly publicKey: string;
  readonly visible: boolean;
  readonly onClose: () => void;
}

function ModalContent({ publicKey }: { publicKey: string }): JSX.Element {
  return (
    <View style={styles.section}>
      <Text style={styles.text}>
        Scan the QR Code or send public key to receive payment
      </Text>

      <PublicQRCode address={publicKey} />

      {publicKey && 
        <InputCopyBox style={styles.copyBox} text={publicKey} />
      }
    </View>
  )
}

function ReceiveModal({ publicKey, visible, onClose }: ReceiveModalProps) {
  return (
    <BottomSheet
      visible={visible}
      title={'Receive payment'}
      onClose={onClose}
      content={ModalContent({ publicKey })}
    />
  );
}

export default ReceiveModal;
