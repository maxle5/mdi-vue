
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookArrowLeft from "../../src/components/MdiBookArrowLeft.vue";

test("MdiBookArrowLeft snapshot", () => {
  const wrapper = mount(MdiBookArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
