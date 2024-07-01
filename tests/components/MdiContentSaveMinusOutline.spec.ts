
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveMinusOutline from "../../src/components/MdiContentSaveMinusOutline.vue";

test("MdiContentSaveMinusOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
