
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength1LockOpen from "../../src/components/MdiWifiStrength1LockOpen.vue";

test("MdiWifiStrength1LockOpen snapshot", () => {
  const wrapper = mount(MdiWifiStrength1LockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
