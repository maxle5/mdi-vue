
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeftThick from "../../src/components/MdiArrowTopLeftThick.vue";

test("MdiArrowTopLeftThick snapshot", () => {
  const wrapper = mount(MdiArrowTopLeftThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
