
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedSingleOutline from "../../src/components/MdiBedSingleOutline.vue";

test("MdiBedSingleOutline snapshot", () => {
  const wrapper = mount(MdiBedSingleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
