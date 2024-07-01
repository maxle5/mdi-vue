
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectArrowUp from "../../src/components/MdiSelectArrowUp.vue";

test("MdiSelectArrowUp snapshot", () => {
  const wrapper = mount(MdiSelectArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
