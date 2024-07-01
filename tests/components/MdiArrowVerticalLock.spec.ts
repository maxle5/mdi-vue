
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowVerticalLock from "../../src/components/MdiArrowVerticalLock.vue";

test("MdiArrowVerticalLock snapshot", () => {
  const wrapper = mount(MdiArrowVerticalLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
