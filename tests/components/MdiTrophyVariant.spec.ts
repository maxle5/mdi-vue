
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrophyVariant from "../../src/components/MdiTrophyVariant.vue";

test("MdiTrophyVariant snapshot", () => {
  const wrapper = mount(MdiTrophyVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
