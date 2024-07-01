
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength3Lock from "../../src/components/MdiWifiStrength3Lock.vue";

test("MdiWifiStrength3Lock snapshot", () => {
  const wrapper = mount(MdiWifiStrength3Lock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
