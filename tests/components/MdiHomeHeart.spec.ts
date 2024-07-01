
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeHeart from "../../src/components/MdiHomeHeart.vue";

test("MdiHomeHeart snapshot", () => {
  const wrapper = mount(MdiHomeHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
