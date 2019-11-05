import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Metrics } from '../../shared/themes';
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
  readonly privateKey: string;
  readonly visible: boolean;
  readonly onClose: () => void;
}

function ModalContent({ privateKey }: { privateKey: string }): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.text}>
          Copy the private key down below to export the wallet.
        </Text>

          {privateKey &&
            <InputCopyBox style={styles.copyBox} text={privateKey} />
          }
      </View>
    </ScrollView>
  );
}

function ExportModal({ privateKey, visible, onClose }: ReceiveModalProps) {
  return (
    <BottomSheet
      visible={visible}
      title={'Export wallet'}
      onClose={onClose}
      content={ModalContent({ privateKey })}
      popupHeight={Metrics.popupHeight}
    />
  );
}

export default ExportModal;
