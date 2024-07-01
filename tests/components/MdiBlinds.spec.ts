
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlinds from "../../src/components/MdiBlinds.vue";

test("MdiBlinds snapshot", () => {
  const wrapper = mount(MdiBlinds, {});
  expect(wrapper.html()).toMatchSnapshot();
});
