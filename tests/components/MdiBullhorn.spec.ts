
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBullhorn from "../../src/components/MdiBullhorn.vue";

test("MdiBullhorn snapshot", () => {
  const wrapper = mount(MdiBullhorn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
