
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMowerBagOn from "../../src/components/MdiMowerBagOn.vue";

test("MdiMowerBagOn snapshot", () => {
  const wrapper = mount(MdiMowerBagOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
