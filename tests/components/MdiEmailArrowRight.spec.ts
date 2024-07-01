
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailArrowRight from "../../src/components/MdiEmailArrowRight.vue";

test("MdiEmailArrowRight snapshot", () => {
  const wrapper = mount(MdiEmailArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
