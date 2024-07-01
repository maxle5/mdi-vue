
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength1Lock from "../../src/components/MdiWifiStrength1Lock.vue";

test("MdiWifiStrength1Lock snapshot", () => {
  const wrapper = mount(MdiWifiStrength1Lock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
