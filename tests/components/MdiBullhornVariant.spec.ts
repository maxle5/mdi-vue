
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBullhornVariant from "../../src/components/MdiBullhornVariant.vue";

test("MdiBullhornVariant snapshot", () => {
  const wrapper = mount(MdiBullhornVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
