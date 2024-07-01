
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarHalfFull from "../../src/components/MdiStarHalfFull.vue";

test("MdiStarHalfFull snapshot", () => {
  const wrapper = mount(MdiStarHalfFull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
