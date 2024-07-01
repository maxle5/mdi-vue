
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailArrowLeft from "../../src/components/MdiEmailArrowLeft.vue";

test("MdiEmailArrowLeft snapshot", () => {
  const wrapper = mount(MdiEmailArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
