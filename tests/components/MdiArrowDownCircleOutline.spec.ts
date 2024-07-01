
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownCircleOutline from "../../src/components/MdiArrowDownCircleOutline.vue";

test("MdiArrowDownCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowDownCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
