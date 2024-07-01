
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankRemove from "../../src/components/MdiBankRemove.vue";

test("MdiBankRemove snapshot", () => {
  const wrapper = mount(MdiBankRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
