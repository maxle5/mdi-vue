
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowULeftTop from "../../src/components/MdiArrowULeftTop.vue";

test("MdiArrowULeftTop snapshot", () => {
  const wrapper = mount(MdiArrowULeftTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
