
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength4LockOpen from "../../src/components/MdiWifiStrength4LockOpen.vue";

test("MdiWifiStrength4LockOpen snapshot", () => {
  const wrapper = mount(MdiWifiStrength4LockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
