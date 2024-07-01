
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpBoldOutline from "../../src/components/MdiArrowUpBoldOutline.vue";

test("MdiArrowUpBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowUpBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
