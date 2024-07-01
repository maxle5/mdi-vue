
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookHeart from "../../src/components/MdiBookHeart.vue";

test("MdiBookHeart snapshot", () => {
  const wrapper = mount(MdiBookHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
