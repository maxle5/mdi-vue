
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEggOffOutline from "../../src/components/MdiEggOffOutline.vue";

test("MdiEggOffOutline snapshot", () => {
  const wrapper = mount(MdiEggOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
