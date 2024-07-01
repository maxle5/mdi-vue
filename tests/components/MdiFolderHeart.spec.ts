
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderHeart from "../../src/components/MdiFolderHeart.vue";

test("MdiFolderHeart snapshot", () => {
  const wrapper = mount(MdiFolderHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
