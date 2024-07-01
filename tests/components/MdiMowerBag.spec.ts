
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMowerBag from "../../src/components/MdiMowerBag.vue";

test("MdiMowerBag snapshot", () => {
  const wrapper = mount(MdiMowerBag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
