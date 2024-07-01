
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeftBoldBox from "../../src/components/MdiArrowTopLeftBoldBox.vue";

test("MdiArrowTopLeftBoldBox snapshot", () => {
  const wrapper = mount(MdiArrowTopLeftBoldBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
