
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashOutline from "../../src/components/MdiFlashOutline.vue";

test("MdiFlashOutline snapshot", () => {
  const wrapper = mount(MdiFlashOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
