
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeer from "../../src/components/MdiBeer.vue";

test("MdiBeer snapshot", () => {
  const wrapper = mount(MdiBeer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
