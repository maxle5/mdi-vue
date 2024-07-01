
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRolodexOutline from "../../src/components/MdiRolodexOutline.vue";

test("MdiRolodexOutline snapshot", () => {
  const wrapper = mount(MdiRolodexOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
