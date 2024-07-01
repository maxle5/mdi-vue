
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransitConnectionVariant from "../../src/components/MdiTransitConnectionVariant.vue";

test("MdiTransitConnectionVariant snapshot", () => {
  const wrapper = mount(MdiTransitConnectionVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
