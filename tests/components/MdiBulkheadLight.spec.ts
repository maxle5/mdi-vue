
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBulkheadLight from "../../src/components/MdiBulkheadLight.vue";

test("MdiBulkheadLight snapshot", () => {
  const wrapper = mount(MdiBulkheadLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
