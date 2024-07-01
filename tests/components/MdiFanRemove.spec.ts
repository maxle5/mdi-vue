
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanRemove from "../../src/components/MdiFanRemove.vue";

test("MdiFanRemove snapshot", () => {
  const wrapper = mount(MdiFanRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
