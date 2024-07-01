
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickMinus from "../../src/components/MdiToyBrickMinus.vue";

test("MdiToyBrickMinus snapshot", () => {
  const wrapper = mount(MdiToyBrickMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
