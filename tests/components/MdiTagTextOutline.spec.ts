
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagTextOutline from "../../src/components/MdiTagTextOutline.vue";

test("MdiTagTextOutline snapshot", () => {
  const wrapper = mount(MdiTagTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
