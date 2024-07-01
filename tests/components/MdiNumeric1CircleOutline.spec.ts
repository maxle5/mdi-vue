
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric1CircleOutline from "../../src/components/MdiNumeric1CircleOutline.vue";

test("MdiNumeric1CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric1CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
