
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickRemove from "../../src/components/MdiToyBrickRemove.vue";

test("MdiToyBrickRemove snapshot", () => {
  const wrapper = mount(MdiToyBrickRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
