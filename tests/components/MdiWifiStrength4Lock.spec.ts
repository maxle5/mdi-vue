
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength4Lock from "../../src/components/MdiWifiStrength4Lock.vue";

test("MdiWifiStrength4Lock snapshot", () => {
  const wrapper = mount(MdiWifiStrength4Lock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
