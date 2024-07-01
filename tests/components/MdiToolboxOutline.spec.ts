
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToolboxOutline from "../../src/components/MdiToolboxOutline.vue";

test("MdiToolboxOutline snapshot", () => {
  const wrapper = mount(MdiToolboxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
