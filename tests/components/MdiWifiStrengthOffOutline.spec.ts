
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrengthOffOutline from "../../src/components/MdiWifiStrengthOffOutline.vue";

test("MdiWifiStrengthOffOutline snapshot", () => {
  const wrapper = mount(MdiWifiStrengthOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
