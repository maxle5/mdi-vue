
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickRemoveOutline from "../../src/components/MdiToyBrickRemoveOutline.vue";

test("MdiToyBrickRemoveOutline snapshot", () => {
  const wrapper = mount(MdiToyBrickRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
