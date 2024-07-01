
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagRemove from "../../src/components/MdiFlagRemove.vue";

test("MdiFlagRemove snapshot", () => {
  const wrapper = mount(MdiFlagRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
