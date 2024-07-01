
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRight from "../../src/components/MdiArrowTopRight.vue";

test("MdiArrowTopRight snapshot", () => {
  const wrapper = mount(MdiArrowTopRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
