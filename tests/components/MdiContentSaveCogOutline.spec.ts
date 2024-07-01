
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveCogOutline from "../../src/components/MdiContentSaveCogOutline.vue";

test("MdiContentSaveCogOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
