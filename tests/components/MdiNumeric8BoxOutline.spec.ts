
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric8BoxOutline from "../../src/components/MdiNumeric8BoxOutline.vue";

test("MdiNumeric8BoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric8BoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
