
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength4Alert from "../../src/components/MdiWifiStrength4Alert.vue";

test("MdiWifiStrength4Alert snapshot", () => {
  const wrapper = mount(MdiWifiStrength4Alert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
