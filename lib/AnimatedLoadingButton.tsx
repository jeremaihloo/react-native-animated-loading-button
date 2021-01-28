/**
 * Copied and edit from https://github.com/philip-bui/react-native-animated-loading-button
 */
import * as React from 'react';
import {PureComponent} from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
  TouchableNativeFeedback,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  disabled: {
    backgroundColor: 'hsl(208, 8%, 90%)',
  },
});

interface Props {
  containerStyle: ViewStyle;
  buttonStyle: ViewStyle;
  title: string;
  titleStyle: TextStyle;
  titleProps: object;
  loadingStyle: TextStyle;
  loadingProps: object;
  onPress: () => void;
  TouchableComponent: TouchableNativeFeedback | TouchableOpacity;
  duration: number;
  raised: boolean;
  disabled: boolean;
  disabledStyle: ViewStyle;
  useNativeDriver: boolean;
  colors: string[];
}

export default class AnimatedLoadingButton extends PureComponent<Props> {
  static defaultProps = {
    containerStyle: {
      width: '100%',
      height: 50,
    },
    buttonStyle: {
      backgroundColor: '#424242',
      borderRadius: 4,
      paddingHorizontal: 16,
    },
    title: 'Button',
    titleStyle: {
      color: 'white',
    },
    titleProps: {},
    loadingStyle: {
      color: 'white',
    },
    loadingProps: {},
    TouchableComponent: Platform.select<any>({
      android: TouchableNativeFeedback,
      default: TouchableOpacity,
    }),
    duration: 400,
    raised: false,
    disabled: false,
    disabledStyle: {},
    useNativeDriver: false,
    colors: ['#0699FF', '#0D6CEC'],
  };

  state = {
    loading: false,
  };

  // We want to turn any percentages into a numeric width.
  containerWidth = 3000;

  // We want to turn any percentages into a numeric height.
  containerHeight = 3000;

  loadingValue: {
    maxWidth: Animated.Value;
    borderRadius: Animated.Value;
    opacity: Animated.Value;
  };

  constructor(props: Props) {
    super(props);
    const {borderRadius} = props.buttonStyle;

    this.loadingValue = {
      maxWidth: new Animated.Value(this.containerWidth),
      borderRadius: new Animated.Value(borderRadius || 0),
      opacity: new Animated.Value(1),
    };
  }

  get borderRadius() {
    const {buttonStyle} = this.props;
    return buttonStyle.borderRadius || 0;
  }

  setLoading = (loading: boolean) => {
    const {duration} = this.props;
    if (loading) {
      this.animateButton(this.containerHeight, this.containerHeight / 2, 0);
      setTimeout(() => {
        this.setState({loading});
      }, duration);
    } else {
      this.animateButton(this.containerWidth, this.borderRadius, 1);
      this.setState({loading});
    }
  };

  animateButton(maxWidthEnd: any, borderRadiusEnd: any, opacityEnd: any) {
    const {duration} = this.props;
    const {maxWidth, opacity, borderRadius} = this.loadingValue;

    Animated.timing(maxWidth, {
      toValue: maxWidthEnd,
      duration,
      useNativeDriver: false,
    }).start();
    Animated.timing(borderRadius, {
      toValue: borderRadiusEnd,
      duration,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacity, {
      toValue: opacityEnd,
      duration,
      useNativeDriver: false,
    }).start();
  }

  onLayout = (e) => {
    const {layout} = e.nativeEvent;
    const {loading} = this.state;
    this.containerWidth = layout.width;
    this.containerHeight = layout.height;
    if (!loading) {
      this.loadingValue.maxWidth.setValue(this.containerWidth);
    }
  };

  renderLoading() {
    const {loadingStyle, loadingProps} = this.props;
    return (
      <ActivityIndicator
        style={loadingStyle}
        color={loadingStyle.color}
        {...loadingProps}
      />
    );
  }

  renderTitle() {
    const {opacity} = this.loadingValue;
    const {title, titleStyle, titleProps} = this.props;
    return (
      <Animated.Text
        style={StyleSheet.flatten([styles.title, {opacity}, titleStyle])}
        {...titleProps}>
        {title}
      </Animated.Text>
    );
  }

  render() {
    const {loading} = this.state;
    const {
      containerStyle,
      TouchableComponent,
      onPress,
      buttonStyle,
      raised,
      disabled,
      disabledStyle,
      titleStyle,
      ...props
    } = this.props;
    const {maxWidth, borderRadius} = this.loadingValue;
    // The container will help calculate the layout width and height.
    // The animated view will help animate the restricted maxWidth, borderRadius.
    return (
      <View style={[styles.container, containerStyle]} onLayout={this.onLayout}>
        <Animated.View
          style={StyleSheet.flatten([
            styles.buttonContainer,
            {
              maxWidth,
              borderRadius,
            },
          ])}>
          <TouchableOpacity
            onPress={onPress}
            disabled={loading}
            delayPressIn={0}
            activeOpacity={0.3}
            accessibilityRole="button"
            // accessibilityStates={[...(loading ? ['busy'] : [])]}
            // background={
            //   Platform.OS === 'android' && Platform.Version >= 21
            //     ? TouchableNativeFeedback.Ripple(
            //         titleStyle.color || 'white',
            //         false,
            //       )
            //     : undefined
            // }
            {...props}>
            <LinearGradient
              colors={props.colors}
              style={StyleSheet.flatten([
                styles.button,
                raised && styles.raised,
                buttonStyle,
                disabled && styles.disabled,
                disabled && disabledStyle,
              ])}>
              {loading ? this.renderLoading() : this.renderTitle()}
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
