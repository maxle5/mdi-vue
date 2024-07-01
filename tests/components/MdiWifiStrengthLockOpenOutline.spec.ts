
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrengthLockOpenOutline from "../../src/components/MdiWifiStrengthLockOpenOutline.vue";

test("MdiWifiStrengthLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiWifiStrengthLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
