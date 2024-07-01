
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength3Alert from "../../src/components/MdiWifiStrength3Alert.vue";

test("MdiWifiStrength3Alert snapshot", () => {
  const wrapper = mount(MdiWifiStrength3Alert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
