
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPotOutline from "../../src/components/MdiPotOutline.vue";

test("MdiPotOutline snapshot", () => {
  const wrapper = mount(MdiPotOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
