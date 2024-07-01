
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusSchool from "../../src/components/MdiBusSchool.vue";

test("MdiBusSchool snapshot", () => {
  const wrapper = mount(MdiBusSchool, {});
  expect(wrapper.html()).toMatchSnapshot();
});
