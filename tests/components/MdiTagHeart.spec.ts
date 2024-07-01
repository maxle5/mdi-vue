
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagHeart from "../../src/components/MdiTagHeart.vue";

test("MdiTagHeart snapshot", () => {
  const wrapper = mount(MdiTagHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
