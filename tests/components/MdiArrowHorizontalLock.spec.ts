
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowHorizontalLock from "../../src/components/MdiArrowHorizontalLock.vue";

test("MdiArrowHorizontalLock snapshot", () => {
  const wrapper = mount(MdiArrowHorizontalLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
