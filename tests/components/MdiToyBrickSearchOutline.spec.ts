
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickSearchOutline from "../../src/components/MdiToyBrickSearchOutline.vue";

test("MdiToyBrickSearchOutline snapshot", () => {
  const wrapper = mount(MdiToyBrickSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
