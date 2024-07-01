
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBullhornOutline from "../../src/components/MdiBullhornOutline.vue";

test("MdiBullhornOutline snapshot", () => {
  const wrapper = mount(MdiBullhornOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
