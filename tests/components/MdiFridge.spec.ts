
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridge from "../../src/components/MdiFridge.vue";

test("MdiFridge snapshot", () => {
  const wrapper = mount(MdiFridge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
