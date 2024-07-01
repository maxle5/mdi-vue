
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFocusField from "../../src/components/MdiFocusField.vue";

test("MdiFocusField snapshot", () => {
  const wrapper = mount(MdiFocusField, {});
  expect(wrapper.html()).toMatchSnapshot();
});
