
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFocusFieldHorizontal from "../../src/components/MdiFocusFieldHorizontal.vue";

test("MdiFocusFieldHorizontal snapshot", () => {
  const wrapper = mount(MdiFocusFieldHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
