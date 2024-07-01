
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpDownBoldOutline from "../../src/components/MdiArrowUpDownBoldOutline.vue";

test("MdiArrowUpDownBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowUpDownBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
