
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFerry from "../../src/components/MdiFerry.vue";

test("MdiFerry snapshot", () => {
  const wrapper = mount(MdiFerry, {});
  expect(wrapper.html()).toMatchSnapshot();
});
