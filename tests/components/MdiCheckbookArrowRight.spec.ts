
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckbookArrowRight from "../../src/components/MdiCheckbookArrowRight.vue";

test("MdiCheckbookArrowRight snapshot", () => {
  const wrapper = mount(MdiCheckbookArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
