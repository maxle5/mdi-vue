
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileAccountOutline from "../../src/components/MdiFileAccountOutline.vue";

test("MdiFileAccountOutline snapshot", () => {
  const wrapper = mount(MdiFileAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
