
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrenchOutline from "../../src/components/MdiWrenchOutline.vue";

test("MdiWrenchOutline snapshot", () => {
  const wrapper = mount(MdiWrenchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
