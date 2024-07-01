
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlindsHorizontal from "../../src/components/MdiBlindsHorizontal.vue";

test("MdiBlindsHorizontal snapshot", () => {
  const wrapper = mount(MdiBlindsHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
