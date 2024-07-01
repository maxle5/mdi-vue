
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGiftOpen from "../../src/components/MdiGiftOpen.vue";

test("MdiGiftOpen snapshot", () => {
  const wrapper = mount(MdiGiftOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
