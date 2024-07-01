
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckbookArrowLeft from "../../src/components/MdiCheckbookArrowLeft.vue";

test("MdiCheckbookArrowLeft snapshot", () => {
  const wrapper = mount(MdiCheckbookArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
