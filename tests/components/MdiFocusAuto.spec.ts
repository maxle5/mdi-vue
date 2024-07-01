
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFocusAuto from "../../src/components/MdiFocusAuto.vue";

test("MdiFocusAuto snapshot", () => {
  const wrapper = mount(MdiFocusAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
