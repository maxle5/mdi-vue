
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScoreboardOutline from "../../src/components/MdiScoreboardOutline.vue";

test("MdiScoreboardOutline snapshot", () => {
  const wrapper = mount(MdiScoreboardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
