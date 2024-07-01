
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceMan from "../../src/components/MdiFaceMan.vue";

test("MdiFaceMan snapshot", () => {
  const wrapper = mount(MdiFaceMan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
