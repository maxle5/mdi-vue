
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedDoubleOutline from "../../src/components/MdiBedDoubleOutline.vue";

test("MdiBedDoubleOutline snapshot", () => {
  const wrapper = mount(MdiBedDoubleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
