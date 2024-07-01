
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthArrowUp from "../../src/components/MdiEarthArrowUp.vue";

test("MdiEarthArrowUp snapshot", () => {
  const wrapper = mount(MdiEarthArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
