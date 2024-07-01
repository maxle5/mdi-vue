
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownDropCircleOutline from "../../src/components/MdiArrowDownDropCircleOutline.vue";

test("MdiArrowDownDropCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowDownDropCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
