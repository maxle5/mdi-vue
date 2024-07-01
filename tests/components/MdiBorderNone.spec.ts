
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderNone from "../../src/components/MdiBorderNone.vue";

test("MdiBorderNone snapshot", () => {
  const wrapper = mount(MdiBorderNone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
