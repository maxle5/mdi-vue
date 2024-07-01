
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSavePlusOutline from "../../src/components/MdiContentSavePlusOutline.vue";

test("MdiContentSavePlusOutline snapshot", () => {
  const wrapper = mount(MdiContentSavePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
