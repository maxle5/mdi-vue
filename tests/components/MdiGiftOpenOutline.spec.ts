
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGiftOpenOutline from "../../src/components/MdiGiftOpenOutline.vue";

test("MdiGiftOpenOutline snapshot", () => {
  const wrapper = mount(MdiGiftOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
