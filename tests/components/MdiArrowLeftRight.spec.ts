
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftRight from "../../src/components/MdiArrowLeftRight.vue";

test("MdiArrowLeftRight snapshot", () => {
  const wrapper = mount(MdiArrowLeftRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
