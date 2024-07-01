
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChiliMildOutline from "../../src/components/MdiChiliMildOutline.vue";

test("MdiChiliMildOutline snapshot", () => {
  const wrapper = mount(MdiChiliMildOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
