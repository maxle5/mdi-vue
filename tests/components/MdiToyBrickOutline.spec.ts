
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickOutline from "../../src/components/MdiToyBrickOutline.vue";

test("MdiToyBrickOutline snapshot", () => {
  const wrapper = mount(MdiToyBrickOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
