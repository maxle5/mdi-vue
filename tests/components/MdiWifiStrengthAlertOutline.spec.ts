
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrengthAlertOutline from "../../src/components/MdiWifiStrengthAlertOutline.vue";

test("MdiWifiStrengthAlertOutline snapshot", () => {
  const wrapper = mount(MdiWifiStrengthAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
