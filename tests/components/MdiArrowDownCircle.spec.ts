
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownCircle from "../../src/components/MdiArrowDownCircle.vue";

test("MdiArrowDownCircle snapshot", () => {
  const wrapper = mount(MdiArrowDownCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
