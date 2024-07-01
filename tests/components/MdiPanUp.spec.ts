
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanUp from "../../src/components/MdiPanUp.vue";

test("MdiPanUp snapshot", () => {
  const wrapper = mount(MdiPanUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
