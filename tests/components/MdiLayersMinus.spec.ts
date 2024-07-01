
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersMinus from "../../src/components/MdiLayersMinus.vue";

test("MdiLayersMinus snapshot", () => {
  const wrapper = mount(MdiLayersMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
