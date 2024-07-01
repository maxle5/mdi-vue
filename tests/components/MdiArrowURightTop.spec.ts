
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowURightTop from "../../src/components/MdiArrowURightTop.vue";

test("MdiArrowURightTop snapshot", () => {
  const wrapper = mount(MdiArrowURightTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
