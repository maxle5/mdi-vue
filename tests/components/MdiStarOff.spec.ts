
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarOff from "../../src/components/MdiStarOff.vue";

test("MdiStarOff snapshot", () => {
  const wrapper = mount(MdiStarOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
