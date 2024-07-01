
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEggFried from "../../src/components/MdiEggFried.vue";

test("MdiEggFried snapshot", () => {
  const wrapper = mount(MdiEggFried, {});
  expect(wrapper.html()).toMatchSnapshot();
});
