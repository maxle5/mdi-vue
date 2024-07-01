
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength2 from "../../src/components/MdiNetworkStrength2.vue";

test("MdiNetworkStrength2 snapshot", () => {
  const wrapper = mount(MdiNetworkStrength2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
