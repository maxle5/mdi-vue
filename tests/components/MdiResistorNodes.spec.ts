
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiResistorNodes from "../../src/components/MdiResistorNodes.vue";

test("MdiResistorNodes snapshot", () => {
  const wrapper = mount(MdiResistorNodes, {});
  expect(wrapper.html()).toMatchSnapshot();
});
