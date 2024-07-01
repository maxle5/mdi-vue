
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStretchToPage from "../../src/components/MdiStretchToPage.vue";

test("MdiStretchToPage snapshot", () => {
  const wrapper = mount(MdiStretchToPage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
