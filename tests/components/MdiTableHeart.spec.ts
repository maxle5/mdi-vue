
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableHeart from "../../src/components/MdiTableHeart.vue";

test("MdiTableHeart snapshot", () => {
  const wrapper = mount(MdiTableHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
