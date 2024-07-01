
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftTop from "../../src/components/MdiArrowLeftTop.vue";

test("MdiArrowLeftTop snapshot", () => {
  const wrapper = mount(MdiArrowLeftTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
