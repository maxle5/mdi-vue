
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabyFace from "../../src/components/MdiBabyFace.vue";

test("MdiBabyFace snapshot", () => {
  const wrapper = mount(MdiBabyFace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
