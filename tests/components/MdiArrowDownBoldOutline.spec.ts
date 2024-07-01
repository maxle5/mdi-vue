
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownBoldOutline from "../../src/components/MdiArrowDownBoldOutline.vue";

test("MdiArrowDownBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowDownBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
