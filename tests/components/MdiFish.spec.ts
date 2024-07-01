
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFish from "../../src/components/MdiFish.vue";

test("MdiFish snapshot", () => {
  const wrapper = mount(MdiFish, {});
  expect(wrapper.html()).toMatchSnapshot();
});
