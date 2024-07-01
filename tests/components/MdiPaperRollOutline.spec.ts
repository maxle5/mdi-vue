
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperRollOutline from "../../src/components/MdiPaperRollOutline.vue";

test("MdiPaperRollOutline snapshot", () => {
  const wrapper = mount(MdiPaperRollOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
