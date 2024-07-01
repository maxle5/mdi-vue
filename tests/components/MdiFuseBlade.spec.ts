
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFuseBlade from "../../src/components/MdiFuseBlade.vue";

test("MdiFuseBlade snapshot", () => {
  const wrapper = mount(MdiFuseBlade, {});
  expect(wrapper.html()).toMatchSnapshot();
});
