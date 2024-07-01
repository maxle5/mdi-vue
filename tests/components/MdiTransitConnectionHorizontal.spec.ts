
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransitConnectionHorizontal from "../../src/components/MdiTransitConnectionHorizontal.vue";

test("MdiTransitConnectionHorizontal snapshot", () => {
  const wrapper = mount(MdiTransitConnectionHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
