
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownLeft from "../../src/components/MdiArrowDownLeft.vue";

test("MdiArrowDownLeft snapshot", () => {
  const wrapper = mount(MdiArrowDownLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
