
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength3LockOpen from "../../src/components/MdiWifiStrength3LockOpen.vue";

test("MdiWifiStrength3LockOpen snapshot", () => {
  const wrapper = mount(MdiWifiStrength3LockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
