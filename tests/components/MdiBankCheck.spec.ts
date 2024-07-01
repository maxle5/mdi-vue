
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankCheck from "../../src/components/MdiBankCheck.vue";

test("MdiBankCheck snapshot", () => {
  const wrapper = mount(MdiBankCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
