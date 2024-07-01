
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBathtub from "../../src/components/MdiBathtub.vue";

test("MdiBathtub snapshot", () => {
  const wrapper = mount(MdiBathtub, {});
  expect(wrapper.html()).toMatchSnapshot();
});
