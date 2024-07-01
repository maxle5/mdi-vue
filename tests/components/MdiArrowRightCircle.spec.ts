
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightCircle from "../../src/components/MdiArrowRightCircle.vue";

test("MdiArrowRightCircle snapshot", () => {
  const wrapper = mount(MdiArrowRightCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
