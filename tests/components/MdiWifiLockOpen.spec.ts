
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiLockOpen from "../../src/components/MdiWifiLockOpen.vue";

test("MdiWifiLockOpen snapshot", () => {
  const wrapper = mount(MdiWifiLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
