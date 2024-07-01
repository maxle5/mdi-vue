
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusNetwork from "../../src/components/MdiMinusNetwork.vue";

test("MdiMinusNetwork snapshot", () => {
  const wrapper = mount(MdiMinusNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
