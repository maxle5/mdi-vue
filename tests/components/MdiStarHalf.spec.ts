
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarHalf from "../../src/components/MdiStarHalf.vue";

test("MdiStarHalf snapshot", () => {
  const wrapper = mount(MdiStarHalf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
