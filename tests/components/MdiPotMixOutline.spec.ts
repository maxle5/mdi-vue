
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPotMixOutline from "../../src/components/MdiPotMixOutline.vue";

test("MdiPotMixOutline snapshot", () => {
  const wrapper = mount(MdiPotMixOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
