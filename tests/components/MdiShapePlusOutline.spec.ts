
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShapePlusOutline from "../../src/components/MdiShapePlusOutline.vue";

test("MdiShapePlusOutline snapshot", () => {
  const wrapper = mount(MdiShapePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
