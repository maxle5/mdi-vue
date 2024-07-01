
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadHeart from "../../src/components/MdiHeadHeart.vue";

test("MdiHeadHeart snapshot", () => {
  const wrapper = mount(MdiHeadHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
