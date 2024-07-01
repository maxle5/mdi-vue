
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength4 from "../../src/components/MdiNetworkStrength4.vue";

test("MdiNetworkStrength4 snapshot", () => {
  const wrapper = mount(MdiNetworkStrength4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
