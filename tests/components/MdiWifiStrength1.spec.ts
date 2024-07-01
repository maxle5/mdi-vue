
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength1 from "../../src/components/MdiWifiStrength1.vue";

test("MdiWifiStrength1 snapshot", () => {
  const wrapper = mount(MdiWifiStrength1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
