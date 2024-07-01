
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveMoveOutline from "../../src/components/MdiContentSaveMoveOutline.vue";

test("MdiContentSaveMoveOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveMoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
