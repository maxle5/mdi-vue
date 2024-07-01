
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeft from "../../src/components/MdiArrowTopLeft.vue";

test("MdiArrowTopLeft snapshot", () => {
  const wrapper = mount(MdiArrowTopLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
