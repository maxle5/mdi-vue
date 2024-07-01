
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageFlashOutline from "../../src/components/MdiMessageFlashOutline.vue";

test("MdiMessageFlashOutline snapshot", () => {
  const wrapper = mount(MdiMessageFlashOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
