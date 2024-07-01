
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeft from "../../src/components/MdiArrowLeft.vue";

test("MdiArrowLeft snapshot", () => {
  const wrapper = mount(MdiArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
