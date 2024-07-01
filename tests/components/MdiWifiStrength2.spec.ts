
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrength2 from "../../src/components/MdiWifiStrength2.vue";

test("MdiWifiStrength2 snapshot", () => {
  const wrapper = mount(MdiWifiStrength2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
