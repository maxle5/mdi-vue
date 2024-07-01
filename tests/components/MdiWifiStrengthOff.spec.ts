
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrengthOff from "../../src/components/MdiWifiStrengthOff.vue";

test("MdiWifiStrengthOff snapshot", () => {
  const wrapper = mount(MdiWifiStrengthOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
