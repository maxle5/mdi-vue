
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelMultipleOutline from "../../src/components/MdiLabelMultipleOutline.vue";

test("MdiLabelMultipleOutline snapshot", () => {
  const wrapper = mount(MdiLabelMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
