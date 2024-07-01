
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheeseOff from "../../src/components/MdiCheeseOff.vue";

test("MdiCheeseOff snapshot", () => {
  const wrapper = mount(MdiCheeseOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
