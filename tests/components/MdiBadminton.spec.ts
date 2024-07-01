
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBadminton from "../../src/components/MdiBadminton.vue";

test("MdiBadminton snapshot", () => {
  const wrapper = mount(MdiBadminton, {});
  expect(wrapper.html()).toMatchSnapshot();
});
