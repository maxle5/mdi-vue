
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBee from "../../src/components/MdiBee.vue";

test("MdiBee snapshot", () => {
  const wrapper = mount(MdiBee, {});
  expect(wrapper.html()).toMatchSnapshot();
});
