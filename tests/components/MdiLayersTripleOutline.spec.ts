
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersTripleOutline from "../../src/components/MdiLayersTripleOutline.vue";

test("MdiLayersTripleOutline snapshot", () => {
  const wrapper = mount(MdiLayersTripleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
