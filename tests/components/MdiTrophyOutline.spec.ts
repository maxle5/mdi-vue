
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrophyOutline from "../../src/components/MdiTrophyOutline.vue";

test("MdiTrophyOutline snapshot", () => {
  const wrapper = mount(MdiTrophyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
