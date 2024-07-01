
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGiftOffOutline from "../../src/components/MdiGiftOffOutline.vue";

test("MdiGiftOffOutline snapshot", () => {
  const wrapper = mount(MdiGiftOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
