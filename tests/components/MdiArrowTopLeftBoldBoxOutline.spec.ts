
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeftBoldBoxOutline from "../../src/components/MdiArrowTopLeftBoldBoxOutline.vue";

test("MdiArrowTopLeftBoldBoxOutline snapshot", () => {
  const wrapper = mount(MdiArrowTopLeftBoldBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
