
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickMinusOutline from "../../src/components/MdiToyBrickMinusOutline.vue";

test("MdiToyBrickMinusOutline snapshot", () => {
  const wrapper = mount(MdiToyBrickMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
