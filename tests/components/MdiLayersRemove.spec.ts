
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersRemove from "../../src/components/MdiLayersRemove.vue";

test("MdiLayersRemove snapshot", () => {
  const wrapper = mount(MdiLayersRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
