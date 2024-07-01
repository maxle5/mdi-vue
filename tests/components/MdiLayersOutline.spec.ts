
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersOutline from "../../src/components/MdiLayersOutline.vue";

test("MdiLayersOutline snapshot", () => {
  const wrapper = mount(MdiLayersOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
