
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagTriangle from "../../src/components/MdiFlagTriangle.vue";

test("MdiFlagTriangle snapshot", () => {
  const wrapper = mount(MdiFlagTriangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
