
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrophyVariantOutline from "../../src/components/MdiTrophyVariantOutline.vue";

test("MdiTrophyVariantOutline snapshot", () => {
  const wrapper = mount(MdiTrophyVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
