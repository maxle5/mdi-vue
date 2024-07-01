
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBoldCircle from "../../src/components/MdiArrowRightBoldCircle.vue";

test("MdiArrowRightBoldCircle snapshot", () => {
  const wrapper = mount(MdiArrowRightBoldCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
