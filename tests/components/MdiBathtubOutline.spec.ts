
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBathtubOutline from "../../src/components/MdiBathtubOutline.vue";

test("MdiBathtubOutline snapshot", () => {
  const wrapper = mount(MdiBathtubOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
