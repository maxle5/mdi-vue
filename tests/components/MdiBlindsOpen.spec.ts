
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlindsOpen from "../../src/components/MdiBlindsOpen.vue";

test("MdiBlindsOpen snapshot", () => {
  const wrapper = mount(MdiBlindsOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
