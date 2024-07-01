
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGiftOutline from "../../src/components/MdiGiftOutline.vue";

test("MdiGiftOutline snapshot", () => {
  const wrapper = mount(MdiGiftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
