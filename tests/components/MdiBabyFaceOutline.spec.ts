
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabyFaceOutline from "../../src/components/MdiBabyFaceOutline.vue";

test("MdiBabyFaceOutline snapshot", () => {
  const wrapper = mount(MdiBabyFaceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
