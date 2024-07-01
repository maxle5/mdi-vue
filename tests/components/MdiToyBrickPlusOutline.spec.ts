
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickPlusOutline from "../../src/components/MdiToyBrickPlusOutline.vue";

test("MdiToyBrickPlusOutline snapshot", () => {
  const wrapper = mount(MdiToyBrickPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
