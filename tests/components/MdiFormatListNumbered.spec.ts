
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListNumbered from "../../src/components/MdiFormatListNumbered.vue";

test("MdiFormatListNumbered snapshot", () => {
  const wrapper = mount(MdiFormatListNumbered, {});
  expect(wrapper.html()).toMatchSnapshot();
});
