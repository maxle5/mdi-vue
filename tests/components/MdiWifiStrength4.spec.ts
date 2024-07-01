
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength4 from "../../src/components/MdiWifiStrength4.vue";

test("MdiWifiStrength4 snapshot", () => {
  const wrapper = mount(MdiWifiStrength4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
