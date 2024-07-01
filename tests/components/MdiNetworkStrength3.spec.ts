
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength3 from "../../src/components/MdiNetworkStrength3.vue";

test("MdiNetworkStrength3 snapshot", () => {
  const wrapper = mount(MdiNetworkStrength3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
