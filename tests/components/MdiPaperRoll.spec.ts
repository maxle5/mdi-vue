
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperRoll from "../../src/components/MdiPaperRoll.vue";

test("MdiPaperRoll snapshot", () => {
  const wrapper = mount(MdiPaperRoll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
