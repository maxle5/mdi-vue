
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength3 from "../../src/components/MdiWifiStrength3.vue";

test("MdiWifiStrength3 snapshot", () => {
  const wrapper = mount(MdiWifiStrength3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
