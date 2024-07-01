
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableArrowUp from "../../src/components/MdiTableArrowUp.vue";

test("MdiTableArrowUp snapshot", () => {
  const wrapper = mount(MdiTableArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
