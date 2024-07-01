
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBarn from "../../src/components/MdiBarn.vue";

test("MdiBarn snapshot", () => {
  const wrapper = mount(MdiBarn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
