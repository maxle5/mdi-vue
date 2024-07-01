
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftThick from "../../src/components/MdiArrowLeftThick.vue";

test("MdiArrowLeftThick snapshot", () => {
  const wrapper = mount(MdiArrowLeftThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
