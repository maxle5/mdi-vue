
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountGroupOutline from "../../src/components/MdiAccountGroupOutline.vue";

test("MdiAccountGroupOutline snapshot", () => {
  const wrapper = mount(MdiAccountGroupOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
