import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
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
    marginVertical: Metrics.xlargeMargin,
  }
});

interface ReceiveModalProps {
  readonly publicKey: string;
  readonly visible: boolean;
  readonly onClose: () => void;
}

function ModalContent({ publicKey }: { publicKey: string }): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.text}>
          Scan the QR Code or send public key to receive payment
        </Text>

          {publicKey &&
            <PublicQRCode address={publicKey} />
          }

          {publicKey &&
            <InputCopyBox style={styles.copyBox} text={publicKey} />
          }
      </View>
    </ScrollView>
  );
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
