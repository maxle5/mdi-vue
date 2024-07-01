
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrengthLockOutline from "../../src/components/MdiWifiStrengthLockOutline.vue";

test("MdiWifiStrengthLockOutline snapshot", () => {
  const wrapper = mount(MdiWifiStrengthLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
