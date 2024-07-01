
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveOutline from "../../src/components/MdiContentSaveOutline.vue";

test("MdiContentSaveOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
