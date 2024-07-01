
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownDropCircle from "../../src/components/MdiArrowDownDropCircle.vue";

test("MdiArrowDownDropCircle snapshot", () => {
  const wrapper = mount(MdiArrowDownDropCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
