
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength1Alert from "../../src/components/MdiWifiStrength1Alert.vue";

test("MdiWifiStrength1Alert snapshot", () => {
  const wrapper = mount(MdiWifiStrength1Alert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
