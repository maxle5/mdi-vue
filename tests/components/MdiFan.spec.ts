
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFan from "../../src/components/MdiFan.vue";

test("MdiFan snapshot", () => {
  const wrapper = mount(MdiFan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
