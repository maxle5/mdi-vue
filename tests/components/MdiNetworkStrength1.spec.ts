
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength1 from "../../src/components/MdiNetworkStrength1.vue";

test("MdiNetworkStrength1 snapshot", () => {
  const wrapper = mount(MdiNetworkStrength1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
