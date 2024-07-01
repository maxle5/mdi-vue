
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength2Alert from "../../src/components/MdiWifiStrength2Alert.vue";

test("MdiWifiStrength2Alert snapshot", () => {
  const wrapper = mount(MdiWifiStrength2Alert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
