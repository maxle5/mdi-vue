
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength2LockOpen from "../../src/components/MdiWifiStrength2LockOpen.vue";

test("MdiWifiStrength2LockOpen snapshot", () => {
  const wrapper = mount(MdiWifiStrength2LockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
