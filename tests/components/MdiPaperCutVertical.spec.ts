
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperCutVertical from "../../src/components/MdiPaperCutVertical.vue";

test("MdiPaperCutVertical snapshot", () => {
  const wrapper = mount(MdiPaperCutVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
